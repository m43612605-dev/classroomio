import { env } from '@cio/core/config/env';
import { updateCourse } from '@cio/core/services/course/course';
import { getOldestOrganizationAdmin, updateOrganization } from '@cio/db/queries/organization';
import {
  type TCourseImportDraftPayload,
  ZCourseImportDraftPayload,
  ZCourseImportDraftPublish
} from '@cio/utils/validation/course-import';
import { QUESTION_TYPE } from '@cio/utils/validation/constants';
import {
  createCourseImportDraftService,
  publishCourseImportDraftService
} from '@api/services/course-import/course-import';

import type { AlekowsCourseSeed } from './types';
import { UNIVERSAL_CREDIT_COURSES } from './universal-credit-courses';

const ACADEMY_NAME = 'Alekows Academy';
const LESSON_LOCALES = ['en', 'tr'] as const;
const SECTION_EXTERNAL_ID = 'section-1';
const QUIZ_EXTERNAL_ID = 'quiz-1';

/**
 * Builds a course-import draft from a seed. Lesson content is stored under every
 * locale in LESSON_LOCALES because the lesson viewer shows only the reader's own
 * locale and does not fall back to another one.
 */
function buildDraft(seed: AlekowsCourseSeed): TCourseImportDraftPayload {
  const lessons = seed.lessons.map((lesson, index) => ({
    externalId: `lesson-${index + 1}`,
    sectionExternalId: SECTION_EXTERNAL_ID,
    title: lesson.title,
    order: index + 1,
    isUnlocked: true
  }));

  const lessonLanguages = seed.lessons.flatMap((lesson, index) =>
    LESSON_LOCALES.map((locale) => ({
      lessonExternalId: `lesson-${index + 1}`,
      locale,
      content: lesson.content
    }))
  );

  const questions = seed.questions.map((question, index) => ({
    question: question.question,
    questionTypeId: QUESTION_TYPE.RADIO,
    points: 1,
    order: index + 1,
    options: question.options.map((option) => ({ label: option.label, isCorrect: option.isCorrect }))
  }));

  return ZCourseImportDraftPayload.parse({
    course: {
      title: seed.title,
      description: seed.description,
      type: 'SELF_PACED',
      locale: 'en',
      metadata: {
        allowSelfEnrollment: true,
        lessonDownload: false,
        grading: false
      }
    },
    sections: [{ externalId: SECTION_EXTERNAL_ID, title: seed.sectionTitle, order: 1 }],
    lessons,
    lessonLanguages,
    exercises: [
      {
        externalId: QUIZ_EXTERNAL_ID,
        sectionExternalId: SECTION_EXTERNAL_ID,
        title: seed.quizTitle,
        description: seed.quizDescription,
        order: 1,
        questions
      }
    ]
  });
}

async function publishSeed(organizationId: string, profileId: string, seed: AlekowsCourseSeed) {
  const draft = buildDraft(seed);
  const draftRecord = await createCourseImportDraftService(organizationId, profileId, {
    sourceType: 'prompt',
    idempotencyKey: seed.key,
    draft
  });

  const publishOverrides = ZCourseImportDraftPublish.parse({});
  const result = await publishCourseImportDraftService(organizationId, profileId, draftRecord.id, publishOverrides);

  if (result.createdLessons === 0) {
    return false;
  }

  await updateCourse(result.courseId, { isPublished: true, displayOrder: seed.displayOrder, cost: 0 });
  console.log(`Alekows academy: published "${seed.title}"`);

  return true;
}

/**
 * Loads the Alekows starter courses into the self-hosted organization once.
 * Each course is keyed by an import-draft idempotency key, so later restarts
 * skip it and admin edits or deletions are never overwritten.
 */
export async function bootstrapAlekowsAcademy() {
  if (env.PUBLIC_IS_SELFHOSTED !== 'true') return;

  const target = await getOldestOrganizationAdmin();
  if (!target) {
    console.log('Alekows academy: no organization admin yet, skipping course setup');
    return;
  }

  let publishedCount = 0;
  for (const seed of UNIVERSAL_CREDIT_COURSES) {
    const published = await publishSeed(target.organizationId, target.profileId, seed);
    if (published) publishedCount += 1;
  }

  if (publishedCount > 0 && target.organizationName !== ACADEMY_NAME) {
    await updateOrganization(target.organizationId, { name: ACADEMY_NAME });
    console.log(`Alekows academy: renamed organization to "${ACADEMY_NAME}"`);
  }
}
