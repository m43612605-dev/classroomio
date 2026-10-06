import type { AlekowsCourseSeed } from './types';

export const UNIVERSAL_CREDIT_COURSES: AlekowsCourseSeed[] = [
  {
    key: 'alekows-universal-credit-tr',
    displayOrder: 1,
    title: 'Universal Credit, adım adım',
    description:
      "Ücretsiz kurs · 5 kısa ders + test · yaklaşık 25 dakika. Universal Credit'in ne olduğu, kimlerin başvurabileceği, aylık tutarın nasıl hesaplandığı, adım adım nasıl başvurulduğu ve başvurudan sonra neler yapmanız gerektiği.",
    sectionTitle: 'Universal Credit',
    lessons: [
      {
        title: 'Universal Credit nedir, kimler başvurabilir?',
        content:
          "<blockquote><p><strong>Başlamadan önce.</strong> Bu kurs genel bilgi amaçlıdır, kendi başvurunuza özel bir danışmanlık değildir. Tüm rakamlar GOV.UK'te yayımlanan aylık tutarlardır (6 Ekim 2026'da kontrol edildi). Tutarlar her nisan ayında değişir. Kendi durumunuz için her zaman GOV.UK'i kontrol edin ya da bir yardım hesaplayıcısı (benefits calculator) kullanın. Bu kurs göçmenlik/oturum statüsü konularını kapsamaz.</p></blockquote><p><strong>Universal Credit (UC)</strong>, yaşam masraflarına yardım eden aylık bir ödemedir. Düşük gelirliyseniz, işsizseniz ya da örneğin bir sağlık sorunu nedeniyle çalışamıyorsanız alabilirsiniz. Çalışanlar da başvurabilir. Buna yarı zamanlı çalışanlar ve serbest çalışanlar (self-employed) da dahildir.</p><p>UC, <strong>Housing Benefit</strong> ve <strong>gelire bağlı ESA (income-related ESA)</strong> gibi eski yardımların yerini alıyor. Bunlardan birini alıyorsanız, durumunuz değişmedikçe ya da size <strong>Migration Notice</strong> adlı bir mektup gelmedikçe bir şey yapmanız gerekmez. Bu mektup gelirse, desteğin devam etmesi için mektuptaki son tarihe kadar UC'ye başvurmanız gerekir.</p><h3>Temel şartlar</h3><p>Başvurmak için:</p><ul><li>Birleşik Krallık'ta yaşıyor olmalısınız</li><li>18 yaşında ya da daha büyük olmalısınız (16–17 yaş için bazı istisnalar vardır)</li><li>Devlet emeklilik yaşının (State Pension age) altında olmalısınız</li><li>Para, birikim ve yatırımlarınız toplam <strong>£16.000 veya daha az</strong> olmalı</li></ul><p><strong>Çiftler:</strong> Partnerinizle birlikte yaşıyorsanız, partneriniz uygun olmasa bile hane için <strong>tek bir ortak başvuru (joint claim)</strong> yapmanız gerekir. İki partnerin geliri ve birikimi de hesaba katılır.</p><p><strong>Öğrenciler:</strong> Tam zamanlı öğrencilerin çoğu başvuramaz. Ancak istisnalar vardır, örneğin bir çocuğa bakmakla yükümlüyseniz ya da partneriniz uygunsa.</p><p><strong>AB, AEA ve İsviçre vatandaşları:</strong> GOV.UK, AB Yerleşim Programı (EU Settlement Scheme) kapsamında settled ya da pre-settled statü gerekebileceğini belirtiyor. Statünüzle ilgili sorular yetkili bir göçmenlik danışmanının konusudur ve burada ele alınmaz.</p><h3>⚠️ Geçmeden önce kontrol edin</h3><p>Şu anda başka yardımlar alıyorsanız, UC'ye başvurmadan önce daha kazançlı çıkıp çıkmayacağınızı kontrol edin. <strong>Başvurduğunuzda bazı eski yardımlar durur ve UC başvurunuz reddedilse bile onlara geri dönemezsiniz.</strong> Önce bir yardım hesaplayıcısı kullanın ya da bir danışmana sorun.</p><p><strong>Özet:</strong> UC tüm haneniz için tek bir aylık ödemedir. Dört temel şart: Birleşik Krallık'ta yaşamak, 18 yaş ve üstü olmak, emeklilik yaşının altında olmak ve £16.000 veya daha az birikim.</p><hr><p><em>Kaynak: GOV.UK, \"Universal Credit\" rehberi (yazdırılabilir sürüm), 6 Ekim 2026'da kontrol edildi: https://www.gov.uk/universal-credit/print. Alekows genel bilgi ve başvuru desteği sunar. Bu bir hukuki veya göçmenlik danışmanlığı değildir.</em></p>"
      },
      {
        title: 'Ne kadar alabilirsiniz?',
        content:
          "<p>UC ödemeniz katman katman hesaplanır:</p><ol><li>bir <strong>standart ödenek (standard allowance)</strong> (her hane bir tane alır)</li><li>artı size uygun <strong>ek tutarlar (extra amounts)</strong></li><li>eksi <strong>kesintiler</strong>, artı çalışıyorsanız <strong>kazancınızın etkisi</strong></li></ol><h3>Standart ödenek (aylık)</h3><table><thead><tr><th>Durumunuz</th><th>Aylık</th></tr></thead><tbody><tr><td>Bekâr, 25 yaş altı</td><td>£338,58</td></tr><tr><td>Bekâr, 25 yaş ve üstü</td><td>£424,90</td></tr><tr><td>Çift, ikiniz de 25 yaş altı</td><td>£528,34 (ikiniz için)</td></tr><tr><td>Çift, en az biriniz 25 yaş ve üstü</td><td>£666,97 (ikiniz için)</td></tr></tbody></table><h3>Ek tutarlar (aylık)</h3><table><thead><tr><th>Ek tutar</th><th>Aylık</th></tr></thead><tbody><tr><td>Sizinle yaşayan her çocuk için</td><td>£303,94</td></tr><tr><td>İlk çocuk 6 Nisan 2017'den önce doğduysa (ek)</td><td>£47,94</td></tr><tr><td>Engelli çocuk, düşük tutar</td><td>£164,79</td></tr><tr><td>Engelli çocuk, yüksek tutar</td><td>£514,71</td></tr><tr><td>Ağır sağlık sorunu (LCWRA ya da yaşamın sonuna yakın olma)</td><td>£429,80</td></tr><tr><td>Daha hafif sağlık sorunu</td><td>£217,26</td></tr><tr><td>Bakıcı (uygun bir engellilik yardımı alan birine haftada 35+ saat bakım)</td><td>£209,34</td></tr><tr><td>Çocuk bakımı (çalışıyorsanız)</td><td>masrafın %85'ine kadar, en fazla £1.071,09 (1 çocuk) / £1.836,16 (2+ çocuk)</td></tr></tbody></table><p>Ayrıca <strong>konut masrafları</strong> (kira ve bazı hizmet bedelleri) için de yardım alabilirsiniz.</p><p><strong>Önemli:</strong> Ek tutarlar <strong>otomatik olarak eklenmez</strong>. Örneğin bakıcı olduysanız bunu bildirmeniz gerekir. Carer's Allowance almaya başlamanız, bakıcı ek tutarını (carer element) kendiliğinden eklemez.</p><p>Bakıcı ek tutarı ile LCWRA sağlık tutarını aynı anda alamazsınız. GOV.UK, sağlık sorununu 6 Nisan 2026'dan önce bildirdiyseniz farklı kuralların geçerli olduğunu belirtiyor.</p><h3>Neler kesilir?</h3><p>Avans geri ödüyorsanız, <strong>yardım tavanını (benefit cap)</strong> aşıyorsanız, geçmişte fazla ödeme aldıysanız ya da Council Tax veya enerji faturası gibi borçlarınız varsa ödemeniz azalabilir. Bazı yardımlar UC'den birebir düşülür, örneğin <strong>Carer's Allowance</strong>, <strong>State Pension</strong>, <strong>New Style JSA/ESA</strong> ve <strong>Maternity Allowance</strong>.</p><p><strong>Örnek (yalnızca açıklama amaçlı):</strong> 2019'da doğmuş bir çocuğu olan 30 yaşında tek ebeveyn £424,90 + £303,94 = <strong>ayda £728,84</strong> ile başlar. Buna konut masrafı, kazanç ve kesintiler dahil değildir.</p><p><strong>Özet:</strong> standart ödenek + ek tutarlar − kesintiler. Ek tutar gerektiren her değişikliği bildirin.</p><hr><p><em>Kaynak: GOV.UK, \"Universal Credit\" rehberi (yazdırılabilir sürüm), 6 Ekim 2026'da kontrol edildi: https://www.gov.uk/universal-credit/print. Alekows genel bilgi ve başvuru desteği sunar. Bu bir hukuki veya göçmenlik danışmanlığı değildir.</em></p>"
      },
      {
        title: 'Çalışmak, maaş ve birikim',
        content:
          "<h3>UC alırken çalışmak</h3><p>UC alırken çalışabileceğiniz <strong>saat sınırı yoktur</strong>. Maaşınız arttıkça UC kademeli olarak azalır:</p><blockquote><p><strong>Kazandığınız her £1 için UC'niz 55p azalır.</strong></p></blockquote><p>Yani çalışmak her zaman çalışmamaktan daha kazançlıdır.</p><h3>Çalışma ödeneği (work allowance)</h3><p>Bir <strong>çocuğa bakmakla yükümlüyseniz</strong> ya da <strong>çalışmanızı etkileyen bir sağlık sorununuz veya engelliliğiniz</strong> varsa, UC azalmaya başlamadan önce belirli bir tutar kazanabilirsiniz:</p><ul><li>UC üzerinden konut masrafı yardımı alıyorsanız (ya da belediyenin ayarladığı geçici konutta kalıyorsanız) <strong>ayda £427</strong></li><li>almıyorsanız <strong>ayda £710</strong></li></ul><p><strong>Örnek (yalnızca açıklama amaçlı):</strong> UC'den konut yardımı alan bir ebeveyn ayda £1.027 kazanıyor. İlk £427 dikkate alınmaz. Kalan £600'ün %55'i £330 eder, yani UC'si £330 azalır.</p><p>Çoğu işveren maaşınızı otomatik olarak bildirir. Serbest çalışanlar kazançlarını her ay kendileri bildirir (onlar için farklı kurallar vardır).</p><h3>Birikim</h3><table><thead><tr><th>Birikim</th><th>Etkisi</th></tr></thead><tbody><tr><td>£6.000'e kadar</td><td>Etkisi yok</td></tr><tr><td>£6.000 – £16.000</td><td>£6.000'in üzerindeki her £250 (veya £250'nin bir kısmı) için ayda £4,35 düşülür</td></tr><tr><td>£16.000'in üzeri</td><td>Genellikle UC alamazsınız</td></tr></tbody></table><h3>Maaş artar ve UC durursa</h3><p>UC, maaşınız arttığı için durduysa ve maaşınız sonra tekrar düşerse, 6 ay içinde UC otomatik olarak yeniden başlar. 6 aydan sonra yeniden başvurmanız gerekir.</p><p><strong>Özet:</strong> 55p kesinti oranı ve çalışma ödeneği sayesinde fazladan çalışmak kazandırır. Birikim £6.000'in üzerinde hesaba girmeye başlar.</p><hr><p><em>Kaynak: GOV.UK, \"Universal Credit\" rehberi (yazdırılabilir sürüm), 6 Ekim 2026'da kontrol edildi: https://www.gov.uk/universal-credit/print. Alekows genel bilgi ve başvuru desteği sunar. Bu bir hukuki veya göçmenlik danışmanlığı değildir.</em></p>"
      },
      {
        title: 'Adım adım başvuru',
        content:
          "<ol><li><strong>Daha kazançlı olup olmadığınızı kontrol edin.</strong> Bu özellikle başka yardımlar alıyorsanız önemlidir (bkz. Ders 1).</li><li>GOV.UK'te <strong>çevrimiçi hesabınızı açın</strong>. Başvuruyu <strong>28 gün içinde</strong> tamamlamalısınız, yoksa baştan başlarsınız. Çiftlerin her biri ayrı hesap açar ve hesaplar birbirine bağlanır.</li><li><strong>Hazır bulundurun:</strong> banka, building society veya credit union hesap bilgileri, bir e-posta adresi ve bir telefon.</li><li><strong>Kimliğinizi doğrulayın</strong>, örneğin pasaport, ehliyet, banka kartı veya kredi kartı, maaş bordrosu ya da P60 ile.</li><li><strong>Şu bilgileri verin:</strong> kira/konut bilgileri, kazanç, varsa Ulusal Sigorta numarası (National Insurance number), aldığınız diğer yardımlar, çalışmanızı etkileyen sağlık sorunları, çocuk bakım masrafları, birikim ve yatırımlar.</li><li><strong>Gönderin.</strong> Başvurunuz gönderdiğiniz gün başlar.</li><li><strong>Taahhüt görüşmesine (claimant commitment) katılın.</strong> Bu genellikle jobcentre'da olur. İlk ödemeden önce taahhüdünüzü kabul etmeniz gerekir.</li></ol><p><strong>Çevrimiçi başvuramıyor musunuz?</strong> Ücretsiz <strong>Universal Credit yardım hattını arayın: 0800 328 5644</strong> (pazartesi–cuma, 08:00–18:00), bir jobcentre'a gidin ya da ücretsiz <strong>Citizens Advice Help to Claim</strong> hizmetini kullanın.</p><p><strong>Geç mi kaldınız?</strong> Engellilik, hastalık ya da sistemin çalışmaması gibi bazı durumlarda başvurunuzu <strong>bir aya kadar geriye tarihletmeyi (backdate)</strong> isteyebilirsiniz.</p><p><strong>Özet:</strong> Başvuruya başladıktan sonra tamamlamak için 28 gününüz var. Belgelerinizi önceden hazırlayın.</p><hr><p><em>Kaynak: GOV.UK, \"Universal Credit\" rehberi (yazdırılabilir sürüm), 6 Ekim 2026'da kontrol edildi: https://www.gov.uk/universal-credit/print. Alekows genel bilgi ve başvuru desteği sunar. Bu bir hukuki veya göçmenlik danışmanlığı değildir.</em></p>"
      },
      {
        title: 'Başvurudan sonra',
        content:
          "<h3>İlk ödemeniz</h3><p>İlk ödeme genellikle <strong>yaklaşık 5 hafta</strong> sürer. Bu arada paraya ihtiyacınız olursa <strong>avans (advance)</strong> isteyebilirsiniz. Avans sonraki ödemelerinizden geri kesilir.</p><p>Sonrasında <strong>her değerlendirme döneminin (assessment period) bitiminden yaklaşık 7 gün sonra</strong>, her ay aynı tarihte ödeme alırsınız. İskoçya'da ayda iki kez ödeme seçeneği vardır.</p><blockquote><p><em>GOV.UK örneği:</em> Sam 10 Eylül'de başvuruyor. İlk değerlendirme dönemi 9 Ekim'e kadar sürüyor. Sam 17 Ekim'de ve sonrasında her ayın 17'sinde ödeme alıyor.</p></blockquote><p>Çiftlere <strong>hane başına tek ödeme</strong> yapılır. Tek ödemeyi yönetmek zorsa, <strong>Alternatif Ödeme Düzenlemesi (Alternative Payment Arrangement)</strong> isteyebilirsiniz, örneğin kiranın doğrudan ev sahibine ödenmesi.</p><h3>Taahhüdünüz (claimant commitment)</h3><p>Bu, yapmayı kabul ettiğiniz şeylerdir, örneğin iş aramak ya da işe hazırlanmak. Geçerli bir nedeniniz olmadan bunları yapmazsanız ödemeniz kesilebilir. Buna <strong>yaptırım (sanction)</strong> denir. Yaptırım yüzünden kira, ısınma, yiyecek veya hijyen masraflarını karşılayamıyorsanız <strong>zor durum ödemesi (hardship payment)</strong> isteyebilirsiniz.</p><h3>Değişiklikleri hemen bildirin</h3><p>Yeni iş, adres değişikliği, kira değişikliği, bebek, partnerle birlikte yaşamaya başlama, birikim değişikliği, sağlık durumunda değişiklik ya da Büyük Britanya dışına seyahat gibi durumları bildirin. Geç bildirim, geri ödemeniz gereken <strong>fazla ödemeye (overpayment)</strong> yol açabilir. Yanlış bilgi vermek cezaya yol açabilir.</p><h3>Bir karara itiraz etmek</h3><p><strong>Mandatory reconsideration</strong> isteyebilirsiniz. Bu, DWP'nin kararı yeniden incelemesi demektir.</p><h3>🛡️ Güvende kalın</h3><p>GOV.UK'e göre banka bilgileri gibi kişisel bilgileriniz journal üzerinden, telefonla, SMS'le veya e-postayla <strong>asla</strong> istenmez. Bunları isteyen her mesajı dolandırıcılık olarak kabul edin.</p><p><strong>Özet:</strong> İlk ödeme için yaklaşık 5 hafta bekleyin, taahhüdünüze uyun ve değişiklikleri hemen bildirin.</p><hr><p><em>Kaynak: GOV.UK, \"Universal Credit\" rehberi (yazdırılabilir sürüm), 6 Ekim 2026'da kontrol edildi: https://www.gov.uk/universal-credit/print. Alekows genel bilgi ve başvuru desteği sunar. Bu bir hukuki veya göçmenlik danışmanlığı değildir.</em></p>"
      }
    ],
    quizTitle: 'Universal Credit testi',
    quizDescription: 'Öğrendiklerinizi 5 soruyla kontrol edin.',
    questions: [
      {
        question: "UC'ye genellikle başvurabilmek için en fazla ne kadar birikiminiz olabilir?",
        options: [
          {
            label: '£6.000',
            isCorrect: false
          },
          {
            label: '£16.000',
            isCorrect: true
          },
          {
            label: '£20.000',
            isCorrect: false
          },
          {
            label: 'sınır yok',
            isCorrect: false
          }
        ]
      },
      {
        question: 'Partnerinizle yaşıyorsunuz. Nasıl başvurursunuz?',
        options: [
          {
            label: 'Sadece daha az kazanan başvurur',
            isCorrect: false
          },
          {
            label: 'Hane için tek bir ortak başvuru',
            isCorrect: true
          },
          {
            label: 'İki ayrı başvuru',
            isCorrect: false
          },
          {
            label: 'Sadece ikiniz de uygunsa',
            isCorrect: false
          }
        ]
      },
      {
        question: 'Kazandığınız her £1 için UC ne kadar azalır?',
        options: [
          {
            label: '£1',
            isCorrect: false
          },
          {
            label: '85p',
            isCorrect: false
          },
          {
            label: '55p',
            isCorrect: true
          },
          {
            label: '25p',
            isCorrect: false
          }
        ]
      },
      {
        question: 'İlk ödeme genellikle ne kadar sürer?',
        options: [
          {
            label: '1 hafta',
            isCorrect: false
          },
          {
            label: '2 hafta',
            isCorrect: false
          },
          {
            label: 'yaklaşık 5 hafta',
            isCorrect: true
          },
          {
            label: '3 ay',
            isCorrect: false
          }
        ]
      },
      {
        question:
          'PIP günlük yaşam (daily living) bölümünü alan birine haftada 35+ saat bakmaya başladınız. Ne yapmalısınız?',
        options: [
          {
            label: 'Hiçbir şey, otomatik eklenir',
            isCorrect: false
          },
          {
            label: 'Bakıcı ek tutarının eklenmesi için değişikliği bildirin',
            isCorrect: true
          },
          {
            label: 'Başvurunuzu kapatın',
            isCorrect: false
          },
          {
            label: 'Yıllık incelemeyi bekleyin',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    key: 'alekows-universal-credit-bg',
    displayOrder: 2,
    title: 'Universal Credit — стъпка по стъпка',
    description:
      'Безплатен курс · 5 кратки урока + тест · около 25 минути. Какво е Universal Credit, кой може да кандидатства, как се изчислява месечната сума, как да подадете заявление стъпка по стъпка и какво трябва да правите след това.',
    sectionTitle: 'Universal Credit',
    lessons: [
      {
        title: 'Какво е Universal Credit и кой може да кандидатства',
        content:
          '<blockquote><p><strong>Преди да започнете.</strong> Този курс е обща информация, а не съвет за вашия конкретен случай. Всички суми са месечните ставки, публикувани в GOV.UK (проверени на 6 октомври 2026 г.). Ставките се променят всеки април, затова винаги проверявайте GOV.UK или използвайте калкулатор за помощи (benefits calculator) за вашата ситуация. Курсът не разглежда въпроси за имиграционен статут.</p></blockquote><p><strong>Universal Credit (UC)</strong> е месечно плащане, което помага с разходите за живот. Може да го получите, ако сте с нисък доход, без работа или не можете да работите, например заради здравословен проблем. Работещите също могат да кандидатстват, включително тези на непълен работен ден и самонаетите (self-employed).</p><p>UC заменя по-стари помощи като <strong>Housing Benefit</strong> и <strong>ESA, свързана с доходите (income-related ESA)</strong>. Ако получавате някоя от тях, не е нужно да правите нищо, освен ако обстоятелствата ви се променят или получите писмо <strong>Migration Notice</strong>. Ако получите такова писмо, трябва да кандидатствате за UC до крайния срок в него, за да продължите да получавате подкрепа.</p><h3>Основни условия</h3><p>За да кандидатствате, трябва:</p><ul><li>да живеете в Обединеното кралство</li><li>да сте на 18 или повече години (има изключения за 16–17-годишни)</li><li>да сте под възрастта за държавна пенсия (State Pension age)</li><li>да имате <strong>£16 000 или по-малко</strong> пари, спестявания и инвестиции</li></ul><p><strong>Двойки:</strong> ако живеете с партньор, трябва да подадете <strong>едно общо заявление (joint claim)</strong> за домакинството, дори ако партньорът ви не отговаря на условията. Доходите и спестяванията и на двамата се вземат предвид.</p><p><strong>Студенти:</strong> повечето студенти редовно обучение не могат да кандидатстват, но има изключения, например ако отговаряте за дете или партньорът ви отговаря на условията.</p><p><strong>Граждани на ЕС, ЕИП и Швейцария:</strong> според GOV.UK може да ви е нужен settled или pre-settled статут по EU Settlement Scheme. Въпросите за вашия статут са за квалифициран имиграционен съветник и не се разглеждат тук.</p><h3>⚠️ Проверете, преди да преминете</h3><p>Ако вече получавате други помощи, проверете дали ще сте в по-добро положение, преди да кандидатствате за UC. <strong>След като подадете заявление, някои стари помощи спират и не можете да се върнете към тях, дори ако заявлението за UC бъде отказано.</strong> Първо използвайте калкулатор или попитайте съветник.</p><p><strong>Накратко:</strong> UC е едно месечно плащане за цялото домакинство. Четирите основни условия са: живеете в Обединеното кралство, на 18+ години сте, под пенсионна възраст сте и имате £16 000 или по-малко спестявания.</p><hr><p><em>Източник: GOV.UK, ръководство „Universal Credit“ (версия за печат), проверено на 6 октомври 2026 г.: https://www.gov.uk/universal-credit/print. Alekows предоставя обща информация и помощ при кандидатстване. Това не е правен или имиграционен съвет.</em></p>'
      },
      {
        title: 'Колко може да получите',
        content:
          "<p>Плащането по UC се изгражда на слоеве:</p><ol><li><strong>стандартна помощ (standard allowance)</strong> (по една на домакинство)</li><li>плюс <strong>допълнителни суми (extra amounts)</strong>, които се отнасят за вас</li><li>минус <strong>удръжки</strong>, плюс ефекта от <strong>доходите</strong>, ако работите</li></ol><h3>Стандартна помощ (месечно)</h3><table><thead><tr><th>Вашата ситуация</th><th>На месец</th></tr></thead><tbody><tr><td>Сам/сама, под 25 г.</td><td>£338,58</td></tr><tr><td>Сам/сама, 25 г. и повече</td><td>£424,90</td></tr><tr><td>Двойка, и двамата под 25 г.</td><td>£528,34 (за двамата)</td></tr><tr><td>Двойка, поне един е на 25 г. или повече</td><td>£666,97 (за двамата)</td></tr></tbody></table><h3>Допълнителни суми (месечно)</h3><table><thead><tr><th>Допълнителна сума</th><th>На месец</th></tr></thead><tbody><tr><td>За всяко дете, което живее с вас</td><td>£303,94</td></tr><tr><td>Първо дете, родено преди 6 април 2017 г. (допълнително)</td><td>£47,94</td></tr><tr><td>Дете с увреждане, по-ниска сума</td><td>£164,79</td></tr><tr><td>Дете с увреждане, по-висока сума</td><td>£514,71</td></tr><tr><td>Тежко здравословно състояние (LCWRA или края на живота)</td><td>£429,80</td></tr><tr><td>По-леко здравословно състояние</td><td>£217,26</td></tr><tr><td>Грижещ се (35+ часа седмично за човек с определена помощ за увреждане)</td><td>£209,34</td></tr><tr><td>Детски грижи (ако работите)</td><td>до 85% от разходите, макс. £1071,09 (1 дете) / £1836,16 (2+ деца)</td></tr></tbody></table><p>Може да получите и помощ за <strong>разходи за жилище</strong> (наем и някои такси за услуги).</p><p><strong>Важно:</strong> допълнителните суми <strong>не се добавят автоматично</strong>. Ако например започнете да се грижите за някого, трябва да го съобщите. Започването на Carer's Allowance само по себе си не добавя сумата за грижещ се (carer element).</p><p>Не може да получавате едновременно сумата за грижещ се и здравната сума LCWRA. GOV.UK посочва, че важат различни правила, ако сте съобщили за здравословен проблем преди 6 април 2026 г.</p><h3>Какво се удържа</h3><p>Плащането може да бъде намалено, ако връщате аванс, ако надхвърляте <strong>тавана на помощите (benefit cap)</strong>, ако в миналото сте получили надплащане или ако дължите пари, например за Council Tax или сметки за енергия. Някои други помощи се приспадат изцяло, например <strong>Carer's Allowance</strong>, <strong>State Pension</strong>, <strong>New Style JSA/ESA</strong> и <strong>Maternity Allowance</strong>.</p><p><strong>Пример (само за илюстрация):</strong> самотен родител на 30 години с едно дете, родено през 2019 г., започва от £424,90 + £303,94 = <strong>£728,84 на месец</strong>, преди разходи за жилище, доходи или удръжки.</p><p><strong>Накратко:</strong> стандартна помощ + допълнителни суми − удръжки. Съобщавайте за всичко, което може да добави допълнителна сума.</p><hr><p><em>Източник: GOV.UK, ръководство „Universal Credit“ (версия за печат), проверено на 6 октомври 2026 г.: https://www.gov.uk/universal-credit/print. Alekows предоставя обща информация и помощ при кандидатстване. Това не е правен или имиграционен съвет.</em></p>"
      },
      {
        title: 'Работа, заплата и спестявания',
        content:
          '<h3>Работа, докато получавате UC</h3><p><strong>Няма ограничение на часовете</strong>, които можете да работите и пак да получавате UC. Когато заплатата ви се увеличава, UC намалява постепенно:</p><blockquote><p><strong>За всеки спечелен £1 вашият UC намалява с 55p.</strong></p></blockquote><p>Така работата винаги ви оставя в по-добро положение, отколкото ако не работите.</p><h3>Освободен доход (work allowance)</h3><p>Ако <strong>отговаряте за дете</strong> или имате <strong>здравословен проблем или увреждане, което засяга способността ви да работите</strong>, можете да спечелите определена сума, преди UC да започне да намалява:</p><ul><li><strong>£427 на месец</strong>, ако получавате помощ за жилище чрез UC (или живеете във временно жилище, осигурено от общината)</li><li><strong>£710 на месец</strong>, ако не получавате</li></ul><p><strong>Пример (само за илюстрация):</strong> родител, който получава помощ за жилище в UC, печели £1027 на месец. Първите £427 не се броят. 55% от останалите £600 са £330, така че UC намалява с £330.</p><p>Повечето работодатели съобщават заплатата ви автоматично. Самонаетите съобщават доходите си всеки месец (за тях важат други правила).</p><h3>Спестявания</h3><table><thead><tr><th>Спестявания</th><th>Ефект</th></tr></thead><tbody><tr><td>До £6000</td><td>Няма ефект</td></tr><tr><td>£6000 – £16 000</td><td>UC намалява с £4,35 на месец за всеки £250 (или част от £250) над £6000</td></tr><tr><td>Над £16 000</td><td>Обикновено не може да получавате UC</td></tr></tbody></table><h3>Ако заплатата се увеличи и UC спре</h3><p>Ако UC спре, защото доходите ви са се увеличили, а после отново спаднат, UC се възобновява автоматично в рамките на 6 месеца. След 6 месеца трябва да кандидатствате отново.</p><p><strong>Накратко:</strong> заради намалението от 55p и освободения доход допълнителната работа се отплаща. Спестяванията започват да се броят над £6000.</p><hr><p><em>Източник: GOV.UK, ръководство „Universal Credit“ (версия за печат), проверено на 6 октомври 2026 г.: https://www.gov.uk/universal-credit/print. Alekows предоставя обща информация и помощ при кандидатстване. Това не е правен или имиграционен съвет.</em></p>'
      },
      {
        title: 'Как да кандидатствате стъпка по стъпка',
        content:
          '<ol><li><strong>Проверете дали ще сте в по-добро положение.</strong> Това е особено важно, ако вече получавате други помощи (вижте Урок 1).</li><li><strong>Създайте онлайн акаунт</strong> в GOV.UK. Трябва да завършите заявлението <strong>до 28 дни</strong>, иначе започвате отначало. При двойки всеки създава акаунт и двата акаунта се свързват.</li><li><strong>Пригответе:</strong> данни за банкова сметка (bank, building society или credit union), имейл адрес и телефон.</li><li><strong>Докажете самоличността си</strong>, например с паспорт, шофьорска книжка, дебитна или кредитна карта, фиш за заплата или P60.</li><li><strong>Дайте информация за:</strong> наема или жилището, доходите, номера на National Insurance (ако имате), други помощи, здравословни проблеми, които засягат работата, разходи за детски грижи, спестявания и инвестиции.</li><li><strong>Подайте.</strong> Заявлението ви започва от датата, на която го подадете.</li><li><strong>Отидете на срещата за поетите задължения (claimant commitment).</strong> Тя обикновено е в jobcentre. Трябва да приемете задълженията си преди първото плащане.</li></ol><p><strong>Не можете да кандидатствате онлайн?</strong> Обадете се на безплатната <strong>линия на Universal Credit: 0800 328 5644</strong> (понеделник–петък, 8:00–18:00), отидете в jobcentre или използвайте безплатната услуга <strong>Citizens Advice Help to Claim</strong>.</p><p><strong>Закъсняли сте?</strong> В някои случаи, например при увреждане, заболяване или ако онлайн услугата не е работила, може да поискате заявлението да се <strong>върне назад с до един месец (backdate)</strong>.</p><p><strong>Накратко:</strong> след като започнете заявлението, имате 28 дни да го завършите. Първо пригответе документите си.</p><hr><p><em>Източник: GOV.UK, ръководство „Universal Credit“ (версия за печат), проверено на 6 октомври 2026 г.: https://www.gov.uk/universal-credit/print. Alekows предоставя обща информация и помощ при кандидатстване. Това не е правен или имиграционен съвет.</em></p>'
      },
      {
        title: 'След като кандидатствате',
        content:
          '<h3>Първото плащане</h3><p>Първото плащане обикновено отнема <strong>около 5 седмици</strong>. Ако ви трябват пари преди това, може да поискате <strong>аванс (advance)</strong>, който се връща от бъдещите плащания.</p><p>След това получавате плащане <strong>месечно, около 7 дни след края на всеки период на оценка (assessment period)</strong>, на една и съща дата всеки месец. В Шотландия може да изберете плащане два пъти месечно.</p><blockquote><p><em>Пример от GOV.UK:</em> Сам кандидатства на 10 септември. Първият период на оценка продължава до 9 октомври. Сам получава плащане на 17 октомври и след това на 17-о число всеки месец.</p></blockquote><p>Двойките получават <strong>едно плащане на домакинство</strong>. Ако едно плащане е трудно за управление, може да поискате <strong>алтернативна схема на плащане (Alternative Payment Arrangement)</strong>, например наемът да се плаща директно на наемодателя.</p><h3>Вашите задължения (claimant commitment)</h3><p>Това е, което сте се съгласили да правите, например да търсите работа или да се подготвяте за работа. Ако не го правите без основателна причина, плащането ви може да бъде намалено. Това се нарича <strong>санкция (sanction)</strong>. Ако заради санкция не можете да платите наем, отопление, храна или хигиенни нужди, може да поискате <strong>плащане при затруднение (hardship payment)</strong>.</p><h3>Съобщавайте за промени веднага</h3><p>Съобщавайте за нова работа, нов адрес, промяна в наема, ново бебе, заживяване с партньор, промяна в спестяванията или здравето, или пътуване извън Великобритания. Късното съобщаване може да доведе до <strong>надплащане (overpayment)</strong>, което трябва да върнете. Даването на грешна информация може да доведе до глоба.</p><h3>Ако не сте съгласни с решение</h3><p>Може да поискате <strong>mandatory reconsideration</strong>, т.е. DWP да преразгледа решението.</p><h3>🛡️ Пазете се</h3><p>Според GOV.UK <strong>никога</strong> няма да ви поискат лична информация като банкови данни в journal, по телефон, SMS или имейл. Приемайте всяко такова съобщение за измама.</p><p><strong>Накратко:</strong> очаквайте около 5 седмици за първото плащане, спазвайте задълженията си и съобщавайте за промени веднага.</p><hr><p><em>Източник: GOV.UK, ръководство „Universal Credit“ (версия за печат), проверено на 6 октомври 2026 г.: https://www.gov.uk/universal-credit/print. Alekows предоставя обща информация и помощ при кандидатстване. Това не е правен или имиграционен съвет.</em></p>'
      }
    ],
    quizTitle: 'Тест: Universal Credit',
    quizDescription: 'Проверете наученото с 5 въпроса.',
    questions: [
      {
        question: 'Какви са максималните спестявания, с които обикновено можете да получавате UC?',
        options: [
          {
            label: '£6000',
            isCorrect: false
          },
          {
            label: '£16 000',
            isCorrect: true
          },
          {
            label: '£20 000',
            isCorrect: false
          },
          {
            label: 'няма ограничение',
            isCorrect: false
          }
        ]
      },
      {
        question: 'Живеете с партньор. Как кандидатствате?',
        options: [
          {
            label: 'Кандидатства само този, който печели по-малко',
            isCorrect: false
          },
          {
            label: 'Едно общо заявление за домакинството',
            isCorrect: true
          },
          {
            label: 'Две отделни заявления',
            isCorrect: false
          },
          {
            label: 'Само ако и двамата отговарят на условията',
            isCorrect: false
          }
        ]
      },
      {
        question: 'С колко намалява UC за всеки спечелен £1?',
        options: [
          {
            label: '£1',
            isCorrect: false
          },
          {
            label: '85p',
            isCorrect: false
          },
          {
            label: '55p',
            isCorrect: true
          },
          {
            label: '25p',
            isCorrect: false
          }
        ]
      },
      {
        question: 'Колко време обикновено отнема първото плащане?',
        options: [
          {
            label: '1 седмица',
            isCorrect: false
          },
          {
            label: '2 седмици',
            isCorrect: false
          },
          {
            label: 'около 5 седмици',
            isCorrect: true
          },
          {
            label: '3 месеца',
            isCorrect: false
          }
        ]
      },
      {
        question:
          'Започвате да се грижите 35+ часа седмично за човек, който получава PIP daily living. Какво трябва да направите?',
        options: [
          {
            label: 'Нищо, добавя се автоматично',
            isCorrect: false
          },
          {
            label: 'Да съобщите за промяната, за да се добави сумата за грижещ се',
            isCorrect: true
          },
          {
            label: 'Да закриете заявлението си',
            isCorrect: false
          },
          {
            label: 'Да чакате годишния преглед',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    key: 'alekows-universal-credit-en',
    displayOrder: 3,
    title: 'Universal Credit, explained',
    description:
      'Free course · 5 short lessons + quiz · about 25 minutes. What Universal Credit is, who can claim it, how the monthly amount is worked out, how to apply step by step, and what you have to do after you claim.',
    sectionTitle: 'Universal Credit',
    lessons: [
      {
        title: 'What Universal Credit is and who can claim',
        content:
          "<blockquote><p><strong>Before you start.</strong> This course is general information, not advice about your own claim. All figures are the monthly rates published on GOV.UK (checked 6 October 2026). Rates change every April, so always check GOV.UK or use a benefits calculator for your own situation. This course does not cover immigration status questions.</p></blockquote><p><strong>Universal Credit (UC)</strong> is a monthly payment to help with living costs. You may be able to get it if you are on a low income, out of work, or unable to work, for example because of a health condition. Working people can claim too, including part-time and self-employed workers.</p><p>UC is replacing older benefits such as <strong>Housing Benefit</strong> and <strong>income-related ESA</strong>. If you get one of these, you don't need to do anything unless your circumstances change or you receive a <strong>Migration Notice</strong> letter. If you get that letter, you must claim UC by the deadline in it to keep getting support.</p><h3>The basic conditions</h3><p>To claim, you must:</p><ul><li>live in the UK</li><li>be 18 or over (there are some exceptions for 16 and 17 year olds)</li><li>be under State Pension age</li><li>have <strong>£16,000 or less</strong> in money, savings and investments</li></ul><p><strong>Couples:</strong> if you live with your partner, you must make one <strong>joint claim</strong> for the household, even if your partner isn't eligible. Both partners' income and savings count.</p><p><strong>Students:</strong> most full-time students can't claim, but there are exceptions, for example if you are responsible for a child or your partner is eligible.</p><p><strong>EU, EEA and Swiss citizens:</strong> GOV.UK says you might also need settled or pre-settled status under the EU Settlement Scheme. Questions about your status need a qualified immigration adviser and aren't covered here.</p><h3>⚠️ Check before you switch</h3><p>If you already get other benefits, check whether you'd be better off before claiming UC. <strong>Once you claim, some old benefits stop, and you can't go back to them, even if your UC claim is refused.</strong> Use a benefits calculator or ask a benefits adviser first.</p><p><strong>Key takeaway:</strong> UC is one monthly payment for your whole household. The four basics are UK residence, age 18 or over, under State Pension age, and £16,000 or less in savings.</p><hr><p><em>Source: GOV.UK, \"Universal Credit\" guide (printable version), checked 6 October 2026: https://www.gov.uk/universal-credit/print. Alekows provides general information and claim support. This is not legal or immigration advice.</em></p>"
      },
      {
        title: 'How much you could get',
        content:
          "<p>Your UC payment is built in layers:</p><ol><li>a <strong>standard allowance</strong> (everyone gets one per household)</li><li>plus any <strong>extra amounts</strong> that apply to you</li><li>minus any <strong>deductions</strong>, plus the effect of <strong>earnings</strong> if you work</li></ol><h3>Standard allowance (monthly)</h3><table><thead><tr><th>Your situation</th><th>Per month</th></tr></thead><tbody><tr><td>Single, under 25</td><td>£338.58</td></tr><tr><td>Single, 25 or over</td><td>£424.90</td></tr><tr><td>Couple, both under 25</td><td>£528.34 (for you both)</td></tr><tr><td>Couple, either of you 25 or over</td><td>£666.97 (for you both)</td></tr></tbody></table><h3>Extra amounts (monthly)</h3><table><thead><tr><th>Extra amount</th><th>Per month</th></tr></thead><tbody><tr><td>Each child living with you</td><td>£303.94</td></tr><tr><td>First child born before 6 April 2017 (extra)</td><td>£47.94</td></tr><tr><td>Disabled child, lower amount</td><td>£164.79</td></tr><tr><td>Disabled child, higher amount</td><td>£514.71</td></tr><tr><td>Health condition, severe (LCWRA, or nearing end of life)</td><td>£429.80</td></tr><tr><td>Health condition, less severe</td><td>£217.26</td></tr><tr><td>Carer (35+ hours a week caring for someone on a qualifying disability benefit)</td><td>£209.34</td></tr><tr><td>Childcare, if working</td><td>up to 85% of costs, max £1,071.09 (1 child) / £1,836.16 (2+)</td></tr></tbody></table><p>You can also get help with <strong>housing costs</strong> (rent and some service charges).</p><p><strong>Important:</strong> extra amounts are <strong>not added automatically</strong>. If you become a carer, for example, you must report it. Starting Carer's Allowance does not add the carer element by itself.</p><p>You can't get the carer element and the LCWRA health amount at the same time. GOV.UK notes different rules if you reported a health condition before 6 April 2026.</p><h3>What gets taken off</h3><p>Your payment can be reduced if you're repaying an advance, if you'd go above the <strong>benefit cap</strong>, if you were overpaid before, or if you owe money for things like Council Tax or energy bills. Some other benefits are taken off pound for pound, for example <strong>Carer's Allowance</strong>, <strong>State Pension</strong>, <strong>New Style JSA/ESA</strong> and <strong>Maternity Allowance</strong>.</p><p><strong>Example (illustration only):</strong> a single parent aged 30 with one child born in 2019 starts from £424.90 + £303.94 = <strong>£728.84 a month</strong>, before housing costs, earnings or deductions.</p><p><strong>Key takeaway:</strong> standard allowance + extra amounts − deductions. Report anything that should add an extra amount.</p><hr><p><em>Source: GOV.UK, \"Universal Credit\" guide (printable version), checked 6 October 2026: https://www.gov.uk/universal-credit/print. Alekows provides general information and claim support. This is not legal or immigration advice.</em></p>"
      },
      {
        title: 'Work, wages and savings',
        content:
          "<h3>Working while on UC</h3><p>There's <strong>no limit on the hours</strong> you can work and still get UC. As your wages go up, UC goes down gradually:</p><blockquote><p><strong>For every £1 you earn, your UC goes down by 55p.</strong></p></blockquote><p>So working always leaves you better off than not working.</p><h3>Work allowance</h3><p>If you are <strong>responsible for a child</strong>, or you have a <strong>health condition or disability that affects your ability to work</strong>, you can earn a set amount before UC starts reducing:</p><ul><li><strong>£427 a month</strong> if you get help with housing costs through UC (or live in council-arranged temporary accommodation)</li><li><strong>£710 a month</strong> if you don't</li></ul><p><strong>Example (illustration only):</strong> a parent who gets housing costs in UC earns £1,027 a month. The first £427 is ignored. 55% of the remaining £600 is £330, so their UC goes down by £330.</p><p>Most employers report your wages automatically. Self-employed people report their earnings monthly (different rules apply).</p><h3>Savings</h3><table><thead><tr><th>Savings</th><th>Effect</th></tr></thead><tbody><tr><td>Up to £6,000</td><td>No effect</td></tr><tr><td>£6,000 to £16,000</td><td>UC goes down by £4.35 a month for every £250 (or part of £250) over £6,000</td></tr><tr><td>Over £16,000</td><td>You usually can't get UC</td></tr></tbody></table><h3>If wages rise and UC stops</h3><p>If UC stops because your earnings went up and then they drop again, UC restarts automatically within 6 months. After 6 months you need to reapply.</p><p><strong>Key takeaway:</strong> the 55p taper and the work allowance mean extra work pays. Savings start to count above £6,000.</p><hr><p><em>Source: GOV.UK, \"Universal Credit\" guide (printable version), checked 6 October 2026: https://www.gov.uk/universal-credit/print. Alekows provides general information and claim support. This is not legal or immigration advice.</em></p>"
      },
      {
        title: 'How to claim, step by step',
        content:
          '<ol><li><strong>Check you\'re better off.</strong> This is especially important if you already get other benefits (see Lesson 1).</li><li><strong>Create your online account</strong> on GOV.UK. You must finish the claim <strong>within 28 days</strong> or start again. Couples each create an account and link them.</li><li><strong>Have ready:</strong> bank, building society or credit union details, an email address, and a phone.</li><li><strong>Prove your identity</strong>, for example with a passport, driving licence, debit or credit card, payslip or P60.</li><li><strong>Give information about:</strong> your rent or housing, earnings, National Insurance number (if you have one), other benefits, any health condition affecting work, childcare costs, and savings and investments.</li><li><strong>Submit.</strong> Your claim starts on the date you submit it.</li><li><strong>Attend your claimant commitment meeting.</strong> This is usually at the jobcentre. You must accept your commitment before your first payment.</li></ol><p><strong>Can\'t claim online?</strong> Call the free <strong>Universal Credit helpline: 0800 328 5644</strong> (Monday to Friday, 8am to 6pm), go to a jobcentre, or use the free <strong>Citizens Advice Help to Claim</strong> service.</p><p><strong>Missed the start?</strong> In certain cases, such as disability, illness or the online service being down, you can ask to <strong>backdate up to one month</strong>.</p><p><strong>Key takeaway:</strong> you have 28 days to finish the claim once you start it. Get your documents ready first.</p><hr><p><em>Source: GOV.UK, "Universal Credit" guide (printable version), checked 6 October 2026: https://www.gov.uk/universal-credit/print. Alekows provides general information and claim support. This is not legal or immigration advice.</em></p>'
      },
      {
        title: 'After you claim',
        content:
          '<h3>Your first payment</h3><p>The first payment usually takes <strong>around 5 weeks</strong>. If you need money before then, you can ask for an <strong>advance</strong>, which you pay back from future payments.</p><p>After that, you\'re paid <strong>monthly, about 7 days after each assessment period ends</strong>, on the same date each month. In Scotland, you can choose to be paid twice a month.</p><blockquote><p><em>GOV.UK example:</em> Sam claims on 10 September. The first assessment period runs to 9 October, and Sam is paid on 17 October and on the 17th of every month after that.</p></blockquote><p>Couples get <strong>one payment per household</strong>. If one payment is hard to manage, you can ask for an <strong>Alternative Payment Arrangement</strong>, for example rent paid straight to your landlord.</p><h3>Your claimant commitment</h3><p>This is what you agree to do, such as looking for work or preparing for work. If you don\'t do it without a good reason, your payment can be cut. This is called a <strong>sanction</strong>. If a sanction leaves you unable to pay for rent, heating, food or hygiene, you can ask for a <strong>hardship payment</strong>.</p><h3>Report changes straight away</h3><p>Report things like a new job, a new address, a rent change, a new baby, a partner moving in, savings changes, health changes, or travel outside Great Britain. Late reporting can mean an <strong>overpayment</strong> you have to pay back. Giving wrong information can lead to a penalty.</p><h3>If you disagree with a decision</h3><p>You can ask for a <strong>mandatory reconsideration</strong>, which means the DWP looks at the decision again.</p><h3>🛡️ Stay safe</h3><p>GOV.UK says you will <strong>never</strong> be asked for personal information such as bank details in your journal, or by phone, text or email. Treat any message asking for them as a scam.</p><p><strong>Key takeaway:</strong> expect about 5 weeks for the first payment, keep to your commitment, and report changes immediately.</p><hr><p><em>Source: GOV.UK, "Universal Credit" guide (printable version), checked 6 October 2026: https://www.gov.uk/universal-credit/print. Alekows provides general information and claim support. This is not legal or immigration advice.</em></p>'
      }
    ],
    quizTitle: 'Universal Credit quiz',
    quizDescription: 'Check what you have learned with 5 questions.',
    questions: [
      {
        question: 'What is the most you can have in savings and usually still claim UC?',
        options: [
          {
            label: '£6,000',
            isCorrect: false
          },
          {
            label: '£16,000',
            isCorrect: true
          },
          {
            label: '£20,000',
            isCorrect: false
          },
          {
            label: 'no limit',
            isCorrect: false
          }
        ]
      },
      {
        question: 'You live with your partner. How do you claim?',
        options: [
          {
            label: 'Only the partner who earns less claims',
            isCorrect: false
          },
          {
            label: 'One joint claim for the household',
            isCorrect: true
          },
          {
            label: 'Two separate claims',
            isCorrect: false
          },
          {
            label: 'Only if both are eligible',
            isCorrect: false
          }
        ]
      },
      {
        question: 'For every £1 you earn, how much does UC go down?',
        options: [
          {
            label: '£1',
            isCorrect: false
          },
          {
            label: '85p',
            isCorrect: false
          },
          {
            label: '55p',
            isCorrect: true
          },
          {
            label: '25p',
            isCorrect: false
          }
        ]
      },
      {
        question: 'How long does the first payment usually take?',
        options: [
          {
            label: '1 week',
            isCorrect: false
          },
          {
            label: '2 weeks',
            isCorrect: false
          },
          {
            label: 'around 5 weeks',
            isCorrect: true
          },
          {
            label: '3 months',
            isCorrect: false
          }
        ]
      },
      {
        question: 'You start caring 35+ hours a week for someone on PIP daily living. What should you do?',
        options: [
          {
            label: "Nothing, it's added automatically",
            isCorrect: false
          },
          {
            label: 'Report the change so the carer element can be added',
            isCorrect: true
          },
          {
            label: 'Close your claim',
            isCorrect: false
          },
          {
            label: 'Wait for your annual review',
            isCorrect: false
          }
        ]
      }
    ]
  }
];
