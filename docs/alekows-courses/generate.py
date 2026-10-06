import json, os, re

import markdown

SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'universal-credit')
LANGS = {
    'tr': {'order': 1, 'title': 'Universal Credit, adım adım', 'lesson_re': r'^## Ders \d+ — (.+)$', 'quiz': 'Test',
           'section': 'Universal Credit', 'quiz_title': 'Universal Credit testi',
           'quiz_desc': 'Öğrendiklerinizi 5 soruyla kontrol edin.'},
    'bg': {'order': 2, 'title': 'Universal Credit — стъпка по стъпка', 'lesson_re': r'^## Урок \d+ — (.+)$', 'quiz': 'Тест',
           'section': 'Universal Credit', 'quiz_title': 'Тест: Universal Credit',
           'quiz_desc': 'Проверете наученото с 5 въпроса.'},
    'en': {'order': 3, 'title': 'Universal Credit, explained', 'lesson_re': r'^## Lesson \d+ — (.+)$', 'quiz': 'Quiz',
           'section': 'Universal Credit', 'quiz_title': 'Universal Credit quiz',
           'quiz_desc': 'Check what you have learned with 5 questions.'},
}

def md_html(text):
    html = markdown.markdown(text.strip(), extensions=['tables'])
    html = re.sub(r'<h([12])>', '<h3>', html)
    html = re.sub(r'</h([12])>', '</h3>', html)
    return html.replace('\n', '')

def parse(lang):
    raw = open(f'{SRC}/{lang}.md', encoding='utf-8').read()
    blocks = [b.strip() for b in raw.split('\n---\n')]
    header = blocks[0]
    footer = blocks[-1]
    head_lines = [l for l in header.splitlines() if l.strip()]
    tagline = head_lines[1].strip('*')
    learn = head_lines[2]
    disclaimer = '\n'.join(l for l in head_lines if l.startswith('>'))
    lessons, quiz = [], None
    for b in blocks[1:-1]:
        first, _, body = b.partition('\n')
        if first.startswith('## ') and first[3:].strip() == LANGS[lang]['quiz']:
            quiz = body
            continue
        m = re.match(LANGS[lang]['lesson_re'], first)
        assert m, (lang, first)
        lessons.append((m.group(1).strip(), body))
    assert len(lessons) == 5 and quiz
    return tagline, learn, disclaimer, footer, lessons, quiz

def parse_quiz(text):
    items = re.split(r'\n(?=\d+\. \*\*)', '\n' + text.strip())
    out = []
    for it in items:
        it = it.strip()
        if not it:
            continue
        lines = [l.strip() for l in it.splitlines() if l.strip()]
        q = re.match(r'\d+\. \*\*(.+)\*\*$', lines[0]).group(1)
        opts_line = lines[1]
        parts = re.split(r'(?:^|\s)[a-dа-г]\)\s', opts_line)
        parts = [p.strip() for p in parts if p.strip()]
        assert len(parts) == 4, parts
        opts = []
        for p in parts:
            correct = '✅' in p
            label = p.replace('✅', '').replace('**', '').strip()
            opts.append({'label': label, 'isCorrect': correct})
        assert sum(o['isCorrect'] for o in opts) == 1
        out.append({'question': q, 'options': opts})
    assert len(out) == 5
    return out

result = []
for lang, cfg in LANGS.items():
    tagline, learn, disclaimer, footer, lessons, quiz = parse(lang)
    learn_text = re.sub(r'\*\*(.+?)\*\*\s*', '', learn, count=1).strip()
    learn_text = learn_text[:1].upper() + learn_text[1:]
    footer_html = md_html(footer)
    disclaimer_html = md_html(disclaimer)
    lesson_items = []
    for idx, (title, body) in enumerate(lessons, start=1):
        html = md_html(body)
        if idx == 1:
            html = disclaimer_html + html
        html += '<hr>' + footer_html
        lesson_items.append({'title': title, 'content': html})
    result.append({
        'key': f'alekows-universal-credit-{lang}',
        'displayOrder': cfg['order'],
        'title': cfg['title'],
        'description': f'{tagline}. {learn_text}',
        'sectionTitle': cfg['section'],
        'lessons': lesson_items,
        'quizTitle': cfg['quiz_title'],
        'quizDescription': cfg['quiz_desc'],
        'questions': parse_quiz(quiz),
    })

def ts_str(s):
    return json.dumps(s, ensure_ascii=False).replace("'", "\\'")

out = ["import type { AlekowsCourseSeed } from './types';", '', 'export const UNIVERSAL_CREDIT_COURSES: AlekowsCourseSeed[] = ' + json.dumps(result, ensure_ascii=False, indent=2) + ';', '']
open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '../../apps/api/src/services/alekows/universal-credit-courses.ts'), 'w', encoding='utf-8').write('\n'.join(out))
for r in result:
    print(r['key'], r['title'], '|', r['description'][:90], '| lessons', [l['title'] for l in r['lessons']], '| q', len(r['questions']))
