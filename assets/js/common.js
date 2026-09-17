/*
  Общий файл сайта Lumino: боковое меню, шапка, подвал, правая колонка с виджетами,
  мобильное меню, счётчик Яндекс.Метрики, рекламные блоки.

  Чтобы поменять пункты меню, название сайта или ID счётчика/рекламы — правь только
  блок SITE_CONFIG ниже. Дизайн (цвета, отступы) — в assets/css/style.css.

  Хлебные крошки и теги задаются на каждой странице отдельно (см. articles/_template.html) —
  это делает страница, а не common.js, ищи там window.PAGE_CRUMBS.
*/

var SITE_CONFIG = {
  siteName: "ATMAMAPA",
  tagline: "Карта пути к себе",
  baseUrl: "https://natalydes-cell.github.io", // поменять после покупки домена
  yandexMetrikaId: null,          // вписать номер счётчика после регистрации в Яндекс.Метрике
  yandexAdBlockId: null,          // вписать ID рекламного блока после подключения РСЯ
  geneKeyChannelUrl: "https://t.me/hologenetictransits", // канал с разбором транзита, ссылка в виджете «Генные ключи»
  nav: [
    { title: "Чакры",                href: "/articles/chakry/",         icon: "ic-chakra",     ready: true  },
    { title: "Хологенетика",         href: "/articles/hologenetika/",   icon: "ic-holo",       ready: false },
    { title: "Human Design",         href: "/articles/human-design/",   icon: "ic-hd",         ready: false },
    { title: "Сакральная геометрия", href: "/articles/sakralnaya-geometriya/", icon: "ic-geometry", ready: true  },
    { title: "Нумерология",          href: "/articles/numerologiya/",   icon: "ic-numerology", ready: true  },
    { title: "Натальная карта",      href: "/articles/natalnaya-karta/",icon: "ic-natal",      ready: true  },
    { title: "Камни",                href: "/articles/kamni/",          icon: "ic-crystal",    ready: true  },
    { title: "Ароматерапия",         href: "/articles/aromaterapiya/",  icon: "ic-drop",       ready: true  },
    { title: "Дыхание",              href: "/articles/dyhanie/",        icon: "ic-breath",     ready: true  },
    { title: "Медитации",            href: "/articles/meditacii/",      icon: "ic-lotus",      ready: true  },
    { title: "Пульс планеты",        href: "/articles/puls-planety/",   icon: "ic-pulse",      ready: true  }
  ]
};

/*
  Реестр статей — используется для страницы тегов (/tags/), чтобы собирать
  все статьи с одним тегом на одной странице без отдельного файла на каждый тег.

  ВАЖНО: при добавлении новой статьи добавляй её и сюда (иначе она не найдётся
  по тегам), и в index.html соответствующего раздела (карточка в списке).
*/
var ARTICLES = [
  { title: "Калькулятор квадрата Пифагора по дате рождения", href: "/articles/numerologiya/kalkulyator-kvadrat-pifagora.html", cat: "Нумерология", excerpt: "Онлайн-расчёт квадрата Пифагора по дате рождения с готовой расшифровкой всех девяти ячеек.", tags: ["нумерология", "квадрат Пифагора", "калькулятор", "психоматрица"] },
  { title: "Что такое квадрат Пифагора и как его построить по дате рождения", href: "/articles/numerologiya/chto-takoe-kvadrat-pifagora.html", cat: "Нумерология", excerpt: "Откуда взялась методика, как посчитать четыре рабочих числа и разместить цифры в квадрате 3×3 — с примером расчёта.", tags: ["нумерология", "квадрат Пифагора", "психоматрица", "дата рождения"] },
  { title: "Первое рабочее число: характер и сила воли", href: "/articles/numerologiya/pervoe-rabochee-chislo-harakter.html", cat: "Нумерология", excerpt: "Что означает количество единиц в квадрате — от нехватки характера до избытка упорства, и как это читать без крайностей.", tags: ["нумерология", "квадрат Пифагора", "характер", "психоматрица"] },
  { title: "Энергетика, здоровье и трудолюбие в квадрате", href: "/articles/numerologiya/energiya-zdorovie-trudolyubie.html", cat: "Нумерология", excerpt: "Три ячейки, которые отвечают за жизненный тонус, склонность к болезням и отношение к труду — разбираем по отдельности.", tags: ["нумерология", "квадрат Пифагора", "здоровье", "энергия", "трудолюбие"] },
  { title: "Логика, интуиция и удача: как читать оставшиеся ячейки", href: "/articles/numerologiya/logika-intuiciya-udacha.html", cat: "Нумерология", excerpt: "Логика, склонность к интуитивному познанию, удача, чувство долга и память — пять ячеек, которые редко разбирают подробно.", tags: ["нумерология", "квадрат Пифагора", "логика", "интуиция", "удача"] },
  { title: "Как использовать расчёт квадрата Пифагора на практике", href: "/articles/numerologiya/kak-ispolzovat-raschet-na-praktike.html", cat: "Нумерология", excerpt: "Собираем полную картину по всем девяти ячейкам, разбираем частые ошибки при самостоятельном расчёте и границы метода.", tags: ["нумерология", "квадрат Пифагора", "самопознание", "психоматрица"] },
  { title: "Что такое натальная карта и как её строят", href: "/articles/natalnaya-karta/chto-takoe-natalnaya-karta.html", cat: "Натальная карта", excerpt: "Какие данные нужны для расчёта, из чего состоит карта и в чём ключевое различие тропического и сидерического зодиака.", tags: ["натальная карта", "астрология", "зодиак", "джйотиш"] },
  { title: "Планеты в натальной карте: общее значение", href: "/articles/natalnaya-karta/planety-v-natalnoy-karte.html", cat: "Натальная карта", excerpt: "Что символизирует каждая планета — от Солнца до Сатурна — и где смысл совпадает в обеих традициях, а где расходится.", tags: ["натальная карта", "планеты", "астрология"] },
  { title: "Дома натальной карты: 12 сфер жизни", href: "/articles/natalnaya-karta/doma-natalnoy-karty.html", cat: "Натальная карта", excerpt: "За что отвечает каждый из 12 домов — от личности и денег до отношений и карьеры.", tags: ["натальная карта", "дома", "бхавы", "астрология"] },
  { title: "Знаки зодиака в западной астрологии", href: "/articles/natalnaya-karta/znaki-zodiaka-zapadnaya-astrologiya.html", cat: "Натальная карта", excerpt: "Стихии, качества и характеристики 12 знаков тропического зодиака.", tags: ["натальная карта", "знаки зодиака", "западная астрология"] },
  { title: "Аспекты между планетами", href: "/articles/natalnaya-karta/aspekty-mezhdu-planetami.html", cat: "Натальная карта", excerpt: "Соединения, квадраты, трины и оппозиции — как по углам между планетами читают напряжение и гармонию в карте.", tags: ["натальная карта", "аспекты", "западная астрология"] },
  { title: "Основы джйотиша: сидерический зодиак и накшатры", href: "/articles/natalnaya-karta/osnovy-dzhyotisha-nakshatry.html", cat: "Натальная карта", excerpt: "27 лунных стоянок и почему ведическая астрология смотрит на Луну там, где западная смотрит на Солнце.", tags: ["натальная карта", "джйотиш", "накшатры", "ведическая астрология"] },
  { title: "Раши, бхавы и даши в джйотише", href: "/articles/natalnaya-karta/rashi-bhavy-dashi-dzhyotish.html", cat: "Натальная карта", excerpt: "Дома и планетные периоды — то, что задаёт хронологию жизненных событий в ведической астрологии.", tags: ["натальная карта", "джйотиш", "даши", "ведическая астрология"] },
  { title: "Западная и ведическая астрология: в чём разница и как выбрать подход", href: "/articles/natalnaya-karta/zapadnaya-i-vedicheskaya-astrologiya-raznica.html", cat: "Натальная карта", excerpt: "Собираем всё вместе: почему знаки отличаются, что выбрать для практики и можно ли использовать обе традиции сразу.", tags: ["натальная карта", "астрология", "джйотиш", "сравнение"] },
  { title: "Что такое литотерапия и как камни используют для здоровья и энергетики", href: "/articles/kamni/chto-takoe-litoterapiya-i-svoystva-kamney.html", cat: "Камни", excerpt: "Гемология, литотерапия, кристаллотерапия и магия камней — в чём разница между этими направлениями и что из них говорит наука.", tags: ["камни", "литотерапия", "кристаллотерапия", "гемология"] },
  { title: "Как выбрать, очистить и зарядить камень", href: "/articles/kamni/kak-vybrat-ochistit-i-zaryadit-kamen.html", cat: "Камни", excerpt: "Практическое руководство: выбор камня по ощущению и задаче, способы очищения водой, дымом, землёй и звуком, зарядка намерением.", tags: ["камни", "литотерапия", "очищение камня", "зарядка камня"] },
  { title: "Камни по чакрам: подбор минералов для семи энергетических центров", href: "/articles/kamni/kamni-po-chakram.html", cat: "Камни", excerpt: "От муладхары до сахасрары — какие камни традиционно соотносят с каждой чакрой и как их применяют в кристаллотерапии.", tags: ["камни", "кристаллотерапия", "чакры"] },
  { title: "Магические свойства камней: защита, привлечение, ритуалы", href: "/articles/kamni/magicheskie-svoystva-kamney.html", cat: "Камни", excerpt: "Защитные, привлекающие и проясняющие ум камни в магической традиции — от вавилонских амулетов до современных ритуалов.", tags: ["камни", "магия камней", "амулеты", "талисманы"] },
  { title: "Как отличить натуральный камень от подделки: основы минералогии", href: "/articles/kamni/kak-otlichit-natturalny-kamen-ot-poddelki.html", cat: "Камни", excerpt: "Гемологические признаки: твёрдость, температура, включения, цвет. Домашние тесты и когда без лаборатории не обойтись.", tags: ["камни", "гемология", "минералогия", "натуральные камни"] },
  { title: "Что такое чакры и откуда взялось это понятие", href: "/articles/chakry/chto-takoe-chakry.html", cat: "Чакры", excerpt: "Санскритское слово «чакра», тексты, в которых система описана впервые, и почему привычные цвета радуги — позднее западное добавление.", tags: ["чакры", "тантра", "йога", "первоисточники"] },
  { title: "Нади, сушумна и кундалини: как устроена система чакр", href: "/articles/chakry/sistema-chakr-nadi-kundalini.html", cat: "Чакры", excerpt: "Почему чакры нельзя понять отдельно от каналов-нади: ида, пингала, сушумна, три узла-грантхи и то, что традиция называет пробуждением кундалини.", tags: ["чакры", "кундалини", "нади", "пранаяма"] },
  { title: "Муладхара: корневая чакра, опора и безопасность", href: "/articles/chakry/muladhara-pervaya-chakra.html", cat: "Чакры", excerpt: "Четыре лепестка, квадрат земли и биджа ЛАМ: что говорит о первой чакре традиция и как её тему читают сегодня.", tags: ["чакры", "муладхара", "корневая чакра", "земля"] },
  { title: "Свадхистхана: чакра желания, текучести и творчества", href: "/articles/chakry/svadhisthana-vtoraya-chakra.html", cat: "Чакры", excerpt: "Шесть лепестков, лунный серп воды и биджа ВАМ — вторая чакра как центр желания, чувственности и подвижности.", tags: ["чакры", "свадхистхана", "вода", "творчество"] },
  { title: "Манипура: чакра огня, воли и самооценки", href: "/articles/chakry/manipura-tretya-chakra.html", cat: "Чакры", excerpt: "Десять лепестков, треугольник огня и биджа РАМ — центр, с которым связывают волю, пищеварение и чувство собственной силы.", tags: ["чакры", "манипура", "огонь", "воля"] },
  { title: "Анахата: сердечный центр и «незвучащий звук»", href: "/articles/chakry/anahata-chetvertaya-chakra.html", cat: "Чакры", excerpt: "Двенадцать лепестков, гексаграмма воздуха и биджа ЯМ — почему сердечный центр в традиции считается точкой перехода.", tags: ["чакры", "анахата", "сердечная чакра", "воздух"] },
  { title: "Вишуддха: горловой центр, речь и чистота", href: "/articles/chakry/vishuddha-pyataya-chakra.html", cat: "Чакры", excerpt: "Шестнадцать лепестков, пространство-акаша и биджа ХАМ — центр, отвечающий за голос, честность и умение слушать.", tags: ["чакры", "вишуддха", "горловая чакра", "акаша"] },
  { title: "Аджна: «третий глаз», различение и внимание", href: "/articles/chakry/adzhna-shestaya-chakra.html", cat: "Чакры", excerpt: "Два лепестка, слог ОМ и слияние иды, пингалы и сушумны — чакра, которую чаще всего понимают неверно.", tags: ["чакры", "аджна", "третий глаз", "медитация"] },
  { title: "Сахасрара: тысячелепестковый лотос над макушкой", href: "/articles/chakry/sahasrara-sedmaya-chakra.html", cat: "Чакры", excerpt: "Седьмой центр, который формально не входит в шесть чакр: что о нём говорит «Шат-чакра-нирупана» и чем это отличается от популярных трактовок.", tags: ["чакры", "сахасрара", "медитация", "самадхи"] },
  { title: "Практики работы с чакрами: концентрация, биджа-мантры, дыхание", href: "/articles/chakry/praktiki-raboty-s-chakrami.html", cat: "Чакры", excerpt: "Дхарана, биджа-мантры, нади шодхана и визуализация — что из практик действительно описано в текстах, с чего начинать и чего не делать.", tags: ["чакры", "медитация", "мантры", "практика"] },
  { title: "Что такое медитация и что о ней известно достоверно", href: "/articles/meditacii/chto-takoe-meditaciya.html", cat: "Медитации", excerpt: "Определение, краткая история от Упанишад до клиник XX века, три больших семейства техник и трезвый разбор того, что доказано, а что нет.", tags: ["медитация", "осознанность", "практика", "исследования"] },
  { title: "Анапанасати: медитация на дыхании", href: "/articles/meditacii/anapanasati-meditaciya-na-dyhanii.html", cat: "Медитации", excerpt: "Самая базовая техника всех традиций: что сказано в Анапанасати-сутте, как считать дыхание и что делать с блуждающим умом.", tags: ["медитация", "дыхание", "анапанасати", "буддизм"] },
  { title: "Випассана: наблюдение вместо вмешательства", href: "/articles/meditacii/vipassana-nablyudenie.html", cat: "Медитации", excerpt: "Практика ясного видения: четыре основы внимания из Сатипаттхана-сутты, сканирование тела по Гоенке и что происходит на ретрите.", tags: ["медитация", "випассана", "осознанность", "буддизм"] },
  { title: "Метта: практика любящей доброты", href: "/articles/meditacii/metta-lyubyashchaya-dobrota.html", cat: "Медитации", excerpt: "Одна из самых изученных практик: последовательность из пяти адресатов, точные формулы и что делать, если вместо тепла поднимается раздражение.", tags: ["медитация", "метта", "сострадание", "буддизм"] },
  { title: "Дзадзэн: просто сидеть", href: "/articles/meditacii/dzadzen-shikantaza.html", cat: "Медитации", excerpt: "Дзэнская традиция сидения лицом к стене: точная поза, что делать с мыслями и почему Догэн отказывался считать практику средством.", tags: ["медитация", "дзадзэн", "дзэн", "шикантаза"] },
  { title: "Мантра-медитация: джапа, ОМ и трансцендентальная медитация", href: "/articles/meditacii/mantra-meditaciya-i-dzhapa.html", cat: "Медитации", excerpt: "Как работает повторение звука, что о мантрах говорят Йога-сутры и Хатха-йога-прадипика, чем отличается ТМ и сколько она стоит.", tags: ["медитация", "мантра", "джапа", "ОМ"] },
  { title: "Йога-нидра и сканирование тела", href: "/articles/meditacii/yoga-nidra-i-skanirovanie-tela.html", cat: "Медитации", excerpt: "Что такое «йогический сон», как устроено вращение сознания по частям тела и почему эта практика лучше всего подходит для начала.", tags: ["медитация", "йога-нидра", "расслабление", "сон"] },
  { title: "MBSR: светская осознанность и что показали исследования", href: "/articles/meditacii/mbsr-osoznannost-bez-ezoteriki.html", cat: "Медитации", excerpt: "Программа, с которой медитация попала в клиники: структура восьми недель, реальные результаты исследований и честный разбор преувеличений.", tags: ["медитация", "осознанность", "MBSR", "наука"] },
  { title: "Медитация в движении: ходьба, еда, обычные дела", href: "/articles/meditacii/meditaciya-v-dvizhenii.html", cat: "Медитации", excerpt: "Для тех, кому тяжело сидеть: медитация ходьбы по буддийской традиции, практика еды и внимание в обычных делах.", tags: ["медитация", "ходьба", "осознанность", "повседневность"] },
  { title: "Как выстроить практику: поза, время, трудности", href: "/articles/meditacii/kak-vystroit-praktiku-meditacii.html", cat: "Медитации", excerpt: "Практические ответы на вопросы новичка: длительность, время суток, поза, что считать прогрессом и когда практику стоит прекратить.", tags: ["медитация", "практика", "начинающим", "дисциплина"] },
  { title: "Что такое ароматерапия и как она возникла", href: "/articles/aromaterapiya/chto-takoe-aromaterapiya.html", cat: "Ароматерапия", excerpt: "Как обожжённая рука химика в 1910 году положила начало целому направлению, чем эфирное масло отличается от ароматизатора и где проходят границы метода.", tags: ["ароматерапия", "эфирные масла", "история"] },
  { title: "Как действуют эфирные масла на самом деле", href: "/articles/aromaterapiya/kak-deystvuyut-efirnye-masla.html", cat: "Ароматерапия", excerpt: "Два механизма действия — через обоняние и через кожу, — почему запах так тесно связан с памятью и что из эффектов подтверждено исследованиями.", tags: ["ароматерапия", "эфирные масла", "обоняние", "исследования"] },
  { title: "Безопасность: разведение, противопоказания, фототоксичность", href: "/articles/aromaterapiya/bezopasnost-efirnyh-masel.html", cat: "Ароматерапия", excerpt: "Самая важная статья раздела: как считать проценты, какие масла нельзя на солнце, что нельзя детям и почему эфирные масла не пьют.", tags: ["ароматерапия", "безопасность", "разведение", "противопоказания"] },
  { title: "Способы применения: диффузор, ингаляция, ванна, массаж", href: "/articles/aromaterapiya/sposoby-primeneniya-efirnyh-masel.html", cat: "Ароматерапия", excerpt: "Холодная диффузия, паровая ингаляция, ванна с эмульгатором, массажная смесь, компресс и аромакулон — что для чего и в каких дозах.", tags: ["ароматерапия", "диффузор", "ингаляция", "массаж"] },
  { title: "Десять базовых масел, с которых стоит начать", href: "/articles/aromaterapiya/bazovye-efirnye-masla.html", cat: "Ароматерапия", excerpt: "Разбор десяти масел, которых достаточно для домашней аптечки: за что отвечает каждое, что о нём известно и с чем его не сочетать.", tags: ["ароматерапия", "эфирные масла", "лаванда", "чайное дерево"] },
  { title: "Масла для сна и снижения тревоги", href: "/articles/aromaterapiya/masla-dlya-sna-i-trevogi.html", cat: "Ароматерапия", excerpt: "Разбор доказательств по лаванде (включая препарат силексан), рабочие вечерние ритуалы и честный ответ на вопрос, лечит ли аромат бессонницу.", tags: ["ароматерапия", "сон", "тревога", "лаванда"] },
  { title: "Масла для энергии, ясности и концентрации", href: "/articles/aromaterapiya/masla-dlya-energii-i-koncentracii.html", cat: "Ароматерапия", excerpt: "Розмарин и память, мята и бодрость, цитрусы и настроение — с разбором того, где эффект реален, а где это ожидание.", tags: ["ароматерапия", "концентрация", "розмарин", "мята"] },
  { title: "Базовые масла и как составлять смеси", href: "/articles/aromaterapiya/bazovye-masla-i-sostavlenie-smesey.html", cat: "Ароматерапия", excerpt: "Как выбрать масло-носитель под задачу и по какому принципу собирать смесь из трёх нот — с готовыми пропорциями.", tags: ["ароматерапия", "базовые масла", "смеси", "ноты"] },
  { title: "Ароматы в ритуалах и медитации", href: "/articles/aromaterapiya/aromaty-v-ritualah-i-meditacii.html", cat: "Ароматерапия", excerpt: "Зачем во всех традициях жгли смолы, что известно о ладане и сандале, как использовать их в практике и почему дымом лучше не злоупотреблять.", tags: ["ароматерапия", "ладан", "мирра", "ритуалы"] },
  { title: "Как выбрать качественное масло и не купить подделку", href: "/articles/aromaterapiya/kak-vybrat-kachestvennoe-maslo.html", cat: "Ароматерапия", excerpt: "Что должно быть на этикетке настоящего масла, почему «терапевтический класс» ничего не значит и как проверить масло дома.", tags: ["ароматерапия", "качество масел", "подделки", "покупка"] },
  { title: "Что такое сакральная геометрия", href: "/articles/sakralnaya-geometriya/chto-takoe-sakralnaya-geometriya.html", cat: "Сакральная геометрия", excerpt: "История идеи от пифагорейцев до Кеплера, три её главных мотива и честный разбор того, где заканчивается математика и начинается метафора.", tags: ["сакральная геометрия", "Платон", "Пифагор", "символы"] },
  { title: "Золотое сечение и ряд Фибоначчи", href: "/articles/sakralnaya-geometriya/zolotoe-sechenie-i-fibonachchi.html", cat: "Сакральная геометрия", excerpt: "Определение φ без формул, связь с рядом Фибоначчи, реальные примеры в природе и разоблачение мифов о Парфеноне, Моне Лизе и раковине наутилуса.", tags: ["сакральная геометрия", "золотое сечение", "Фибоначчи", "математика"] },
  { title: "Vesica Piscis: с чего начинается вся конструкция", href: "/articles/sakralnaya-geometriya/vesica-piscis-i-dve-okruzhnosti.html", cat: "Сакральная геометрия", excerpt: "Простейшее построение циркулем, из которого разворачивается почти вся сакральная геометрия — с математикой и с историей символа мандорлы.", tags: ["сакральная геометрия", "весика писцис", "геометрия", "соборы"] },
  { title: "Цветок жизни: построение, история, значения", href: "/articles/sakralnaya-geometriya/cvetok-zhizni.html", cat: "Сакральная геометрия", excerpt: "Пошаговое построение, реальная история изображений и разбор того, что в популярных книгах о цветке жизни правда, а что додумано.", tags: ["сакральная геометрия", "цветок жизни", "символы", "Абидос"] },
  { title: "Платоновы тела: пять форм, которых больше нет", href: "/articles/sakralnaya-geometriya/platonovy-tela.html", cat: "Сакральная геометрия", excerpt: "Почему правильных многогранников ровно пять, как Платон сопоставил их со стихиями и чем закончилась попытка Кеплера построить на них модель Солнечной системы.", tags: ["сакральная геометрия", "Платоновы тела", "многогранники", "Кеплер"] },
  { title: "Куб Метатрона и Меркаба", href: "/articles/sakralnaya-geometriya/kub-metatrona-i-merkaba.html", cat: "Сакральная геометрия", excerpt: "Построение фигуры, честная история названий (включая еврейскую мистику) и то, какие утверждения о ней не выдерживают проверки.", tags: ["сакральная геометрия", "куб Метатрона", "Меркаба", "символы"] },
  { title: "Мандала и янтра: геометрия для медитации", href: "/articles/sakralnaya-geometriya/mandala-i-yantra.html", cat: "Сакральная геометрия", excerpt: "Что такое янтра в тантрической традиции, зачем монахи делают мандалы из песка и почему Юнг считал круглые рисунки признаком внутренней работы.", tags: ["сакральная геометрия", "мандала", "янтра", "медитация"] },
  { title: "Спирали, соты и фракталы: почему природа выбирает эти формы", href: "/articles/sakralnaya-geometriya/spirali-i-formy-v-prirode.html", cat: "Сакральная геометрия", excerpt: "Почему у подсолнуха числа Фибоначчи, почему соты шестиугольные и почему папоротник похож сам на себя — физика и биология вместо чуда.", tags: ["сакральная геометрия", "природа", "спираль", "фракталы"] },
  { title: "Геометрия в архитектуре храмов", href: "/articles/sakralnaya-geometriya/geometriya-hramov-i-arhitektury.html", cat: "Сакральная геометрия", excerpt: "Что действительно известно о геометрии пирамид и соборов, как устроены исламские орнаменты и что предписывает васту-шастра.", tags: ["сакральная геометрия", "архитектура", "готика", "храмы"] },
  { title: "Как практиковать: построения циркулем и созерцание", href: "/articles/sakralnaya-geometriya/kak-praktikovat-sakralnuyu-geometriyu.html", cat: "Сакральная геометрия", excerpt: "Практическая часть раздела: набор инструментов, пошаговые построения от весики до цветка жизни и разумные ожидания от практики.", tags: ["сакральная геометрия", "практика", "рисование", "медитация"] },
  { title: "Что такое космическая погода", href: "/articles/puls-planety/chto-takoe-kosmicheskaya-pogoda.html", cat: "Пульс планеты", excerpt: "Базовая картина: что летит от Солнца к Земле, что нас от этого защищает и какие службы ведут наблюдение.", tags: ["пульс планеты", "космическая погода", "солнце", "магнитосфера"] },
  { title: "Солнечные вспышки и корональные выбросы массы", href: "/articles/puls-planety/solnechnye-vspyshki-i-vybrosy.html", cat: "Пульс планеты", excerpt: "Как устроена шкала вспышек, чем вспышка отличается от коронального выброса и что такое 11-летний солнечный цикл.", tags: ["пульс планеты", "солнечные вспышки", "КВМ", "солнечный цикл"] },
  { title: "Геомагнитные бури и K-индекс", href: "/articles/puls-planety/geomagnitnye-buri-i-k-indeks.html", cat: "Пульс планеты", excerpt: "Разбор индексов, которые показывает виджет на сайте: откуда берутся цифры, что считается сильной бурей и чем закончились самые известные из них.", tags: ["пульс планеты", "магнитные бури", "K-индекс", "Kp"] },
  { title: "Магнитные бури и самочувствие: честный разбор", href: "/articles/puls-planety/meteochuvstvitelnost-i-magnitnye-buri.html", cat: "Пульс планеты", excerpt: "Обзор данных о влиянии геомагнитных бурь на сердце, сон и настроение — с объяснением, почему такие исследования трудно делать корректно.", tags: ["пульс планеты", "метеочувствительность", "здоровье", "исследования"] },
  { title: "Резонанс Шумана: что это и чего это не значит", href: "/articles/puls-planety/rezonans-shumana-fakty-i-mify.html", cat: "Пульс планеты", excerpt: "Физика явления простыми словами, разбор популярных утверждений о «повышении частоты Земли» и о связи с ритмами мозга.", tags: ["пульс планеты", "резонанс Шумана", "7.83 Гц", "мифы"] },
  { title: "Фазы Луны, сон и поведение", href: "/articles/puls-planety/fazy-luny-son-i-povedenie.html", cat: "Пульс планеты", excerpt: "Разбор известных работ о лунном цикле и сне, объяснение приливов и ответ на вопрос, влияет ли полнолуние на людей.", tags: ["пульс планеты", "фазы Луны", "сон", "исследования"] },
  { title: "Циркадные ритмы: свет, мелатонин, режим дня", href: "/articles/puls-planety/cirkadnye-ritmy-i-svet.html", cat: "Пульс планеты", excerpt: "Самая практичная тема раздела: механизм внутренних часов, роль утреннего света и понятные правила для режима сна.", tags: ["пульс планеты", "циркадные ритмы", "сон", "свет"] },
  { title: "Сезонные ритмы, зимняя хандра и светотерапия", href: "/articles/puls-planety/sezonnye-ritmy-i-zimnyaya-handra.html", cat: "Пульс планеты", excerpt: "Механизм сезонных изменений настроения, доказанная эффективность светотерапии, параметры лампы и что делать помимо неё.", tags: ["пульс планеты", "сезонность", "светотерапия", "настроение"] },
  { title: "Полярные сияния: физика и практика наблюдения", href: "/articles/puls-planety/polyarnye-siyaniya.html", cat: "Пульс планеты", excerpt: "Как рождается свечение, что определяет его цвет, на какой широте его видно при разных значениях Kp и когда ехать.", tags: ["пульс планеты", "полярное сияние", "аврора", "наблюдения"] },
  { title: "Как пользоваться данными: источники и дневник наблюдений", href: "/articles/puls-planety/kak-polzovatsya-dannymi-o-pulse-planety.html", cat: "Пульс планеты", excerpt: "Список надёжных источников, объяснение виджетов на сайте и простая методика самонаблюдения, которая не обманывает саму себя.", tags: ["пульс планеты", "данные", "наблюдения", "дневник"] }
];

var ICON_SPRITE =
  '<svg style="display:none">' +
  '<symbol id="ic-crest" viewBox="0 0 40 40"><path d="M20 4 L34 10V22C34 30 28 35 20 37C12 35 6 30 6 22V10Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M20 12 A8 8 0 1 0 20 28 A6.4 6.4 0 1 1 20 12Z" fill="currentColor"/></symbol>' +
  '<symbol id="ic-arch" viewBox="0 0 60 34"><path d="M4 30 A26 26 0 0 1 56 30" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="30" cy="4" r="1.6" fill="currentColor"/><circle cx="12" cy="14" r="1.2" fill="currentColor"/><circle cx="48" cy="14" r="1.2" fill="currentColor"/></symbol>' +
  '<symbol id="ic-home" viewBox="0 0 24 24"><path d="M4 11L12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></symbol>' +
  '<symbol id="ic-breath" viewBox="0 0 24 24"><circle cx="12" cy="11" r="7.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5 13.5Q8.5 8 12 13.5T19 13.5" fill="none" stroke="currentColor" stroke-width="1.5"/></symbol>' +
  '<symbol id="ic-pulse" viewBox="0 0 24 24"><circle cx="8.5" cy="15" r="3.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M13 10Q16.5 10 16.5 6.5M15 12Q19.5 12 19.5 7" fill="none" stroke="currentColor" stroke-width="1.5"/></symbol>' +
  '<symbol id="ic-numerology" viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5 9.6H19M5 14.3H19M9.6 5V19M14.3 5V19" stroke="currentColor" stroke-width="1.2"/></symbol>' +
  '<symbol id="ic-natal" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 4.5V19.5M4.5 12H19.5" stroke="currentColor" stroke-width="1.2"/></symbol>' +
  '<symbol id="ic-hd" viewBox="0 0 24 24"><path d="M12 4L20 8V16L12 20L4 16V8Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.3"/></symbol>' +
  '<symbol id="ic-holo" viewBox="0 0 24 24"><circle cx="9.5" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="14.5" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/></symbol>' +
  '<symbol id="ic-chakra" viewBox="0 0 24 24"><path d="M12 4V20" stroke="currentColor" stroke-width="1.3"/><circle cx="12" cy="6" r="1.5" fill="currentColor"/><circle cx="12" cy="10.5" r="1.5" fill="currentColor"/><circle cx="12" cy="15" r="1.8" fill="currentColor"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/></symbol>' +
  '<symbol id="ic-lotus" viewBox="0 0 24 24"><path d="M12 18C12 18 4 15.5 4 9C4 9 9.5 10.5 12 16C14.5 10.5 20 9 20 9C20 15.5 12 18 12 18Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><circle cx="12" cy="6" r="1.4" fill="currentColor"/></symbol>' +
  '<symbol id="ic-crystal" viewBox="0 0 24 24"><path d="M8 4H16L20 10L12 20L4 10Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 4L12 10L16 4M4 10H20" stroke="currentColor" stroke-width="1.1"/></symbol>' +
  '<symbol id="ic-drop" viewBox="0 0 24 24"><path d="M12 4C12 4 6 13 6 17C6 20.3 8.7 22.5 12 22.5C15.3 22.5 18 20.3 18 17C18 13 12 4 12 4Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></symbol>' +
  '<symbol id="ic-geometry" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="12" cy="6.5" r="4" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="17" cy="9.3" r="4" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="17" cy="14.8" r="4" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="12" cy="17.5" r="4" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="7" cy="14.8" r="4" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="7" cy="9.3" r="4" fill="none" stroke="currentColor" stroke-width="1.2"/></symbol>' +
  '<symbol id="ic-gear" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></symbol>' +
  '<symbol id="ic-moon" viewBox="0 0 24 24"><path d="M20 13.5A8.5 8.5 0 1 1 10.5 4 6.8 6.8 0 0 0 20 13.5Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></symbol>' +
  '<symbol id="ic-wave" viewBox="0 0 24 24"><path d="M3 12Q6 6 9 12T15 12T21 12" stroke="currentColor" stroke-width="1.5" fill="none"/></symbol>' +
  '<symbol id="ic-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 2.5V5M12 19V21.5M2.5 12H5M19 12H21.5M5 5L6.8 6.8M17.2 17.2L19 19M19 5L17.2 6.8M6.8 17.2L5 19" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></symbol>' +
  '<symbol id="ic-tg" viewBox="0 0 24 24"><path d="M21 4L3 11.5l6 2M21 4L9 15M21 4l-4 17-6-6.5" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linejoin="round"/></symbol>' +
  '<symbol id="ic-vk" viewBox="0 0 24 24"><path d="M4 4c0 9 4 13 8 13M20 4c-.4 3-2 6-4 8M4 4h3.2c.6 3 2 6.8 3.8 8 0-2.7 0-6.8-1-8H8M20 4h-3l-2 5 4 8h3l-4-6z" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linejoin="round" stroke-linecap="round"/></symbol>' +
  '<symbol id="ic-ig" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="17" cy="7" r="1" fill="currentColor"/></symbol>' +
  '<symbol id="ic-yt" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="3" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10.5 9.5L15 12l-4.5 2.5Z" fill="currentColor"/></symbol>' +
  '<symbol id="ic-heart" viewBox="0 0 24 24"><path d="M12 20.2C12 20.2 3.5 15.4 3.5 9.4A4.6 4.6 0 0 1 12 6.8A4.6 4.6 0 0 1 20.5 9.4C20.5 15.4 12 20.2 12 20.2Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></symbol>' +
  '<symbol id="ic-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="8.3" r="0.9" fill="currentColor"/><path d="M12 11.2V16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></symbol>' +
  '<symbol id="ic-star" viewBox="0 0 24 24"><path d="M12 3.5L14.6 9.3L21 10L16.2 14.2L17.5 20.5L12 17.2L6.5 20.5L7.8 14.2L3 10L9.4 9.3Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></symbol>' +
  "</svg>";

function icon(name, cls) {
  return '<svg class="icon' + (cls ? " " + cls : "") + '"><use href="#' + name + '"/></svg>';
}

function renderSprite() {
  if (document.getElementById("icon-sprite")) return;
  var wrap = document.createElement("div");
  wrap.id = "icon-sprite";
  wrap.innerHTML = ICON_SPRITE;
  document.body.insertBefore(wrap, document.body.firstChild);
}

function currentPath() {
  return window.location.pathname.replace(/index\.html$/, "");
}

function renderSidebar() {
  var el = document.getElementById("sidebar");
  if (!el) return;
  var path = currentPath();
  var homeActive = path === "/" || /\/index\.html$/.test(window.location.pathname) === false && path === "/";
  var items = SITE_CONFIG.nav.map(function (item) {
    var active = path.indexOf(item.href) === 0;
    return '<li><a href="' + item.href + '" class="' + (active ? "active" : "") + '">' +
      '<span class="sweep"></span>' + icon(item.icon) +
      '<span class="label">' + item.title + (item.ready ? "" : ' <span class="soon">скоро</span>') + "</span>" +
      "</a></li>";
  }).join("");
  el.innerHTML =
    '<div class="sidebar-head">' +
      '<button class="hamburger" id="closeNav" aria-label="Закрыть меню"><span></span><span></span><span></span></button>' +
      '<a class="brand" href="/">' + icon("ic-crest", "brand-crest") + '<div class="brand-word">' + SITE_CONFIG.siteName + "</div></a>" +
    "</div>" +
    '<nav class="side-nav">' +
      '<div class="nav-label">Разделы</div>' +
      '<ul><li><a href="/" class="' + (path === "/" ? "active" : "") + '"><span class="sweep"></span>' + icon("ic-home") + '<span class="label">Главная</span></a></li>' + items + "</ul>" +
    "</nav>";
}

function renderTopbar() {
  var el = document.getElementById("topbar");
  if (!el) return;
  el.innerHTML =
    '<button class="hamburger" id="openNav" aria-label="Открыть меню"><span></span><span></span><span></span></button>' +
    '<a class="topbar-brand" href="/">' + icon("ic-crest", "brand-crest-sm") +
    '<span class="topbar-brand-text"><span class="topbar-word">' + SITE_CONFIG.siteName + '</span>' +
    '<span class="topbar-tag">' + SITE_CONFIG.tagline + "</span></span></a>";
}

function renderCrumbs() {
  var el = document.getElementById("crumbs");
  if (!el) return;
  var crumbs = window.PAGE_CRUMBS || [{ title: "Главная", href: "/" }];
  el.innerHTML = crumbs.map(function (c, i) {
    var isLast = i === crumbs.length - 1;
    var label = (i === 0 ? icon("ic-home") + " " : "") + c.title;
    return isLast ? '<span class="crumb-current">' + label + "</span>" : '<a href="' + c.href + '">' + label + "</a>";
  }).join('<span class="crumb-sep">/</span>');
}

function renderTags(tags, linkable) {
  if (!tags || !tags.length) return "";
  return '<div class="tags">' + tags.map(function (t) {
    return linkable
      ? '<a class="tag" href="/tags/?tag=' + encodeURIComponent(t) + '">' + t + "</a>"
      : '<span class="tag">' + t + "</span>";
  }).join("") + "</div>";
}

/*
  Лайк и избранное — пока хранятся локально в браузере (localStorage), без сервера.
  Ключ статьи — её путь (location.pathname), это же значение позже станет id при
  переносе в профиль пользователя (см. STORAGE_KEYS ниже — при подключении профиля
  эти же функции нужно переключить на чтение/запись через API, сохранив сигнатуру).
*/
var STORAGE_KEYS = { likes: "lumino_likes", favorites: "lumino_favorites" };

function readStoredSet(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "{}");
  } catch (e) {
    return {};
  }
}

function toggleStoredSet(key, id) {
  var set = readStoredSet(key);
  if (set[id]) {
    delete set[id];
  } else {
    set[id] = true;
  }
  try {
    localStorage.setItem(key, JSON.stringify(set));
  } catch (e) {}
  return !!set[id];
}

function renderArticleActions() {
  var el = document.querySelector("[data-article-actions]");
  if (!el) return;
  var id = window.location.pathname;
  var liked = !!readStoredSet(STORAGE_KEYS.likes)[id];
  var favorited = !!readStoredSet(STORAGE_KEYS.favorites)[id];

  function paint() {
    el.innerHTML =
      '<button type="button" class="action-btn action-like' + (liked ? " active" : "") + '" aria-pressed="' + liked + '">' +
        icon("ic-heart") + '<span>' + (liked ? "Понравилось" : "Нравится") + "</span>" +
      "</button>" +
      '<button type="button" class="action-btn action-favorite' + (favorited ? " active" : "") + '" aria-pressed="' + favorited + '">' +
        icon("ic-star") + '<span>' + (favorited ? "В избранном" : "В избранное") + "</span>" +
      "</button>";
    el.querySelector(".action-like").addEventListener("click", function () {
      liked = toggleStoredSet(STORAGE_KEYS.likes, id);
      paint();
    });
    el.querySelector(".action-favorite").addEventListener("click", function () {
      favorited = toggleStoredSet(STORAGE_KEYS.favorites, id);
      paint();
    });
  }
  paint();
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-tags]").forEach(function (el) {
    var tags = el.getAttribute("data-tags").split(",").map(function (t) { return t.trim(); });
    // Внутри карточки-ссылки (article-card) теги не делаем ссылками — вложенная
    // ссылка в ссылке ломает клик по карточке. На странице статьи (не внутри <a>) — кликабельны.
    var linkable = !el.closest("a");
    el.innerHTML = renderTags(tags, linkable);
  });
});

function renderTagPage() {
  var mount = document.getElementById("tag-page");
  if (!mount) return;
  var tag = new URLSearchParams(window.location.search).get("tag");

  if (!tag) {
    var counts = {};
    ARTICLES.forEach(function (a) {
      a.tags.forEach(function (t) { counts[t] = (counts[t] || 0) + 1; });
    });
    var allTags = Object.keys(counts).sort(function (a, b) { return a.localeCompare(b, "ru"); });
    mount.innerHTML =
      '<div class="article-list-head"><h1>Все теги</h1><p>Выберите тег, чтобы увидеть все статьи по этой теме.</p></div>' +
      '<div class="tags tag-cloud">' + allTags.map(function (t) {
        return '<a class="tag" href="/tags/?tag=' + encodeURIComponent(t) + '">' + t + ' <span class="tag-count">' + counts[t] + "</span></a>";
      }).join("") + "</div>";
    return;
  }

  var norm = tag.trim().toLowerCase();
  var matches = ARTICLES.filter(function (a) {
    return a.tags.some(function (t) { return t.toLowerCase() === norm; });
  });

  var head = '<div class="article-list-head"><h1>Тег: ' + tag + "</h1><p>" +
    matches.length + (matches.length === 1 ? " статья" : " статей") + " с этим тегом.</p></div>";

  var body = matches.length
    ? '<div class="article-grid">' + matches.map(function (a) {
        return '<a class="article-card" href="' + a.href + '">' +
          '<span class="article-cat">' + a.cat + "</span>" +
          '<p class="article-title">' + a.title + "</p>" +
          '<p class="article-excerpt">' + a.excerpt + "</p>" +
        "</a>";
      }).join("") + "</div>"
    : "<p>Пока нет статей с этим тегом.</p>";

  mount.innerHTML = head + body;
}

/* ---------- виджеты правой колонки: сегодня, фаза Луны, Шуманн, К-индекс ---------- */
var LUMINO_LOCATION = { lat: 55.7558, lon: 37.6176, tz: "Europe/Moscow" };
var SYNODIC_MONTH = 29.530588853;
var ZODIAC_SIGNS = ["Овен", "Телец", "Близнецы", "Рак", "Лев", "Дева", "Весы", "Скорпион", "Стрелец", "Козерог", "Водолей", "Рыбы"];

/* Как часто перезапрашиваем данные виджетов у открытой вкладки. */
var WIDGET_REFRESH_MS = 30 * 60 * 1000;
/* Минутный поток NOAA — самое свежее значение Kp, обновляется примерно раз в минуту. */
var NOAA_KP_LIVE_URL = "https://services.swpc.noaa.gov/json/planetary_k_index_1m.json";
/* Запасной трёхчасовой поток: отстаёт до шести часов, но иногда живёт, когда минутный молчит. */
var NOAA_KP_3H_URL = "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json";
/* Живая спектрограмма резонанса Шумана, обсерватория Томского госуниверситета. */
var SCHUMANN_IMAGE_URL = "https://sosrff.tsu.ru/new/shm.jpg";

var widgetRefreshTimer = null;
var lastWidgetRefresh = 0;
var kpRequest = null;

/* Добавляем к адресу метку времени, чтобы браузер не отдал вчерашний ответ из кэша. */
function noCacheUrl(url) {
  return url + (url.indexOf("?") === -1 ? "?" : "&") + "_=" + Date.now();
}

/* NOAA отдаёт время без пометки зоны — оно всегда UTC. */
function parseUtcTimestamp(value) {
  return new Date(/(Z|[+-]\d\d:?\d\d)$/.test(value) ? value : value + "Z");
}

function timeInMoscow(date) {
  return date.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit", timeZone: LUMINO_LOCATION.tz });
}

function fetchJson(url) {
  return fetch(noCacheUrl(url)).then(function (r) {
    if (!r.ok) throw new Error("HTTP " + r.status);
    return r.json();
  });
}

/*
  Текущий планетарный Kp. Основной источник — минутный поток (estimated_kp),
  запасной — трёхчасовой. Результат кэшируем на цикл обновления, чтобы виджеты
  Шуманна и К-индекса не ходили в NOAA по два раза.
*/
function fetchCurrentKp() {
  return fetchJson(NOAA_KP_LIVE_URL)
    .then(function (rows) {
      var last = rows[rows.length - 1];
      var kp = Number(last.estimated_kp);
      if (!isFinite(kp)) throw new Error("нет значения");
      return { value: Math.round(kp * 10) / 10, at: parseUtcTimestamp(last.time_tag) };
    })
    .catch(function () {
      return fetchJson(NOAA_KP_3H_URL).then(function (rows) {
        var last = rows[rows.length - 1];
        var kp = Number(last.Kp);
        if (!isFinite(kp)) throw new Error("нет значения");
        return { value: Math.round(kp * 10) / 10, at: parseUtcTimestamp(last.time_tag) };
      });
    });
}

function currentKp() {
  if (!kpRequest) kpRequest = fetchCurrentKp();
  return kpRequest;
}

function toJulianDate(date) {
  return date.getTime() / 86400000 + 2440587.5;
}

function normalizeDegrees(deg) {
  deg = deg % 360;
  return deg < 0 ? deg + 360 : deg;
}

function pluralDay(n) {
  var mod10 = n % 10, mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 14) return "дней";
  if (mod10 === 1) return "день";
  if (mod10 >= 2 && mod10 <= 4) return "дня";
  return "дней";
}

/* Приводим угол к диапазону от −180° до +180° — так удобно искать ноль. */
function signedDegrees(deg) {
  return ((deg + 180) % 360 + 360) % 360 - 180;
}

/*
  Эклиптическая долгота Луны — усечённый ряд Meeus: главное уравнение центра,
  эвекция, вариация и годичное уравнение. Точность около 0.2°, то есть примерно
  четверть часа по времени фазы. Профессиональной эфемеридой не притворяется,
  но лунные сутки и фазу определяет верно.
*/
function moonEclipticLongitude(date) {
  var rad = Math.PI / 180;
  var d = toJulianDate(date) - 2451545.0;

  var Lm = 218.316 + 13.176396 * d;  // средняя долгота Луны
  var M  = (134.963 + 13.064993 * d) * rad;  // средняя аномалия Луны
  var Ms = (357.529 + 0.985600 * d) * rad;   // средняя аномалия Солнца
  var D  = (297.850 + 12.190749 * d) * rad;  // среднее удлинение
  var F  = (93.272 + 13.229350 * d) * rad;   // аргумент широты

  return normalizeDegrees(Lm
    + 6.289 * Math.sin(M)
    + 1.274 * Math.sin(2 * D - M)
    + 0.658 * Math.sin(2 * D)
    + 0.214 * Math.sin(2 * M)
    - 0.186 * Math.sin(Ms)
    - 0.114 * Math.sin(2 * F)
    - 0.059 * Math.sin(2 * D - 2 * M)
    - 0.057 * Math.sin(2 * D - Ms - M)
    + 0.053 * Math.sin(2 * D + M)
    + 0.046 * Math.sin(2 * D - Ms)
    + 0.041 * Math.sin(M - Ms)
    - 0.035 * Math.sin(D)
    - 0.031 * Math.sin(M + Ms));
}

/* Удлинение — угол между Луной и Солнцем. 0° — новолуние, 180° — полнолуние. */
function moonElongation(date) {
  return normalizeDegrees(moonEclipticLongitude(date) - sunLongitude(date));
}

var MOON_ELONGATION_RATE = 360 / SYNODIC_MONTH; // около 12.19° в сутки

/* Момент, когда удлинение равно targetDeg — уточняем методом Ньютона от прикидки. */
function solveMoonElongation(targetDeg, guessDate) {
  var t = guessDate.getTime();
  for (var i = 0; i < 6; i++) {
    var diff = signedDegrees(moonElongation(new Date(t)) - targetDeg);
    t -= (diff / MOON_ELONGATION_RATE) * 86400000;
  }
  return new Date(t);
}

function ordinalLunarDay(n) {
  return n + "-е лунные сутки";
}

/*
  Состояние Луны: фаза, освещённость, знак зодиака и лунные сутки.
  Фаза считается не от условной точки отсчёта, а от реального угла между
  Луной и Солнцем, поэтому не накапливает ошибку год от года.
*/
function computeMoonState(date) {
  var lonDeg = moonEclipticLongitude(date);
  var meanDailyMotion = 13.176396;

  var signIndex = Math.floor(lonDeg / 30);
  var degInSign = lonDeg - signIndex * 30;
  var daysLeftInSign = (30 - degInSign) / meanDailyMotion;

  var elongation = moonElongation(date);

  // Настоящий момент прошлого новолуния — от него и считаются лунные сутки.
  var newMoon = solveMoonElongation(0, new Date(date.getTime() - (elongation / MOON_ELONGATION_RATE) * 86400000));
  var age = (date - newMoon) / 86400000;
  var lunarDay = Math.min(30, Math.max(1, Math.floor(age) + 1));

  var illumination = (1 - Math.cos(elongation * Math.PI / 180)) / 2;
  var isWaxing = elongation < 180;

  // Названия фаз — восьмушки круга, каждая по 45°, отсчёт от точной фазы.
  var phaseName;
  if (elongation < 11.25 || elongation >= 348.75) phaseName = "Новолуние";
  else if (elongation < 78.75) phaseName = "Растущий серп";
  else if (elongation < 101.25) phaseName = "Первая четверть";
  else if (elongation < 168.75) phaseName = "Растущая Луна";
  else if (elongation < 191.25) phaseName = "Полнолуние";
  else if (elongation < 258.75) phaseName = "Убывающая Луна";
  else if (elongation < 281.25) phaseName = "Последняя четверть";
  else phaseName = "Убывающий серп";

  var fullMoon = solveMoonElongation(180,
    new Date(date.getTime() + (normalizeDegrees(180 - elongation) / MOON_ELONGATION_RATE) * 86400000));
  var daysToFullMoon = (fullMoon - date) / 86400000;

  return {
    signName: ZODIAC_SIGNS[signIndex],
    daysLeftInSign: Math.max(0, Math.round(daysLeftInSign)),
    phaseName: phaseName,
    illumination: illumination,
    isWaxing: isWaxing,
    lunarDay: lunarDay,
    newMoon: newMoon,
    daysToFullMoon: Math.round(daysToFullMoon)
  };
}

/*
  Контур освещённой части диска. Правый полукруг — это край Луны, а обратная
  дуга — терминатор: эллипс, у которого горизонтальная полуось меняется вместе
  с освещённостью. Меньше половины — эллипс выгибается к светлому краю и даёт
  серп, больше половины — в другую сторону и даёт горб. Ровно половина — прямая.
  Убывающую Луну зеркалим: у неё освещён левый край.
*/
function moonLitPath(radius, illumination) {
  var k = Math.min(1, Math.max(0, illumination));
  var rx = (radius * Math.abs(1 - 2 * k)).toFixed(2);
  var sweep = k > 0.5 ? 1 : 0;
  return "M 0," + -radius + " A " + radius + "," + radius + " 0 0,1 0," + radius +
         " A " + rx + "," + radius + " 0 0," + sweep + " 0," + -radius + " Z";
}

function moonSvg(s) {
  var r = 46;
  var path = moonLitPath(r, s.illumination);
  var flip = s.isWaxing ? "" : ' transform="scale(-1,1)"';
  return '<svg class="moon-disc" viewBox="-50 -50 100 100" role="img" aria-label="' + s.phaseName + '">' +
    "<defs>" +
      '<radialGradient id="moon-lit-grad" cx="38%" cy="30%" r="78%">' +
        '<stop offset="0%" stop-color="#FFFAF0"/>' +
        '<stop offset="70%" stop-color="#F0E3C6"/>' +
        '<stop offset="100%" stop-color="#DCC79D"/>' +
      "</radialGradient>" +
      '<clipPath id="moon-lit-clip"><path d="' + path + '"/></clipPath>' +
    "</defs>" +
    '<circle r="' + r + '" class="moon-dark"/>' +
    "<g" + flip + ">" +
      '<path d="' + path + '" fill="url(#moon-lit-grad)"/>' +
      '<g class="moon-craters" clip-path="url(#moon-lit-clip)">' +
        '<circle cx="-14" cy="-18" r="10"/>' +
        '<circle cx="9" cy="4" r="14"/>' +
        '<circle cx="-4" cy="25" r="7"/>' +
        '<circle cx="24" cy="-24" r="5"/>' +
        '<circle cx="28" cy="18" r="8"/>' +
      "</g>" +
    "</g>" +
    '<circle r="' + r + '" class="moon-rim" fill="none"/>' +
  "</svg>";
}

function renderMoonWidget() {
  var el = document.getElementById("widget-moon");
  if (!el) return;
  var s = computeMoonState(new Date());
  var fullMoonText = s.daysToFullMoon === 0
    ? "Полнолуние — сегодня"
    : "Полнолуние — через " + s.daysToFullMoon + " " + pluralDay(s.daysToFullMoon);
  var signDaysText = s.daysLeftInSign === 0 ? "меньше дня" : s.daysLeftInSign + " " + pluralDay(s.daysLeftInSign);

  el.innerHTML =
    '<div class="widget-label">' + icon("ic-moon") + "Фаза луны</div>" +
    '<div class="moon-row">' +
      moonSvg(s) +
      '<div><div class="moon-name">' + s.phaseName +
        ' <span class="moon-illum">' + Math.round(s.illumination * 100) + "%</span></div>" +
      '<div class="moon-day">' + ordinalLunarDay(s.lunarDay) + "</div>" +
      '<div class="moon-sign">Луна в знаке ' + s.signName + " · ещё " + signDaysText + "</div></div>" +
    "</div>" +
    '<div class="moon-next">' + fullMoonText + "</div>";
}

/* ----- транзит Солнца по Генным ключам ----- */

/*
  Колесо 64 ключей: тот же порядок ворот, что в Дизайне человека и И-Цзин.
  Отсчёт начинается с ключа 41 на 2° Водолея (302° тропической долготы),
  дальше ключи идут подряд по 5.625°, внутри каждого — 6 линий по 0.9375°.
  Контрольные точки расчёта: весеннее равноденствие попадает в ключ 25,
  13° Скорпиона — в ключ 1, 22 января — в ключ 41.
*/
var GENE_KEY_WHEEL = [
  41, 19, 13, 49, 30, 55, 37, 63, 22, 36, 25, 17, 21, 51, 42, 3,
  27, 24, 2, 23, 8, 20, 16, 35, 45, 12, 15, 52, 39, 53, 62, 56,
  31, 33, 7, 4, 29, 59, 40, 64, 47, 6, 46, 18, 48, 57, 32, 50,
  28, 44, 1, 43, 14, 34, 9, 5, 26, 11, 10, 58, 38, 54, 61, 60
];
var GENE_KEY_WHEEL_START = 302;
var GENE_KEY_ARC = 360 / 64;
var GENE_KEY_LINE_ARC = GENE_KEY_ARC / 6;

/* Классические названия гексаграмм И-Цзин — по номеру ключа. */
var HEXAGRAM_NAMES = [
  "Творчество", "Исполнение", "Начальная трудность", "Недоразвитость",
  "Ожидание", "Тяжба", "Войско", "Единение",
  "Воспитание малым", "Поступь", "Расцвет", "Упадок",
  "Единомышленники", "Обладание великим", "Смирение", "Вольность",
  "Последование", "Исправление порчи", "Посещение", "Созерцание",
  "Прокусывание", "Убранство", "Разрушение", "Возврат",
  "Беспорочность", "Воспитание великим", "Питание", "Переразвитие великого",
  "Бездна", "Сияние", "Взаимодействие", "Постоянство",
  "Бегство", "Мощь великого", "Восход", "Поражение света",
  "Домашние", "Разлад", "Препятствие", "Разрешение",
  "Убыль", "Приумножение", "Выход", "Перерождение",
  "Воссоединение", "Подъём", "Истощение", "Колодец",
  "Смена", "Жертвенник", "Молния", "Сосредоточенность",
  "Течение", "Невеста", "Изобилие", "Странствие",
  "Проникновенность", "Радость", "Раздробление", "Ограничение",
  "Внутренняя правда", "Переразвитие малого", "Уже конец", "Ещё не конец"
];

/*
  Солнечная долгота, формула низкой точности (Meeus) — погрешность около 0.01°,
  это меньше пятнадцати минут по времени, для границ ключа с запасом хватает.
*/
function sunLongitude(date) {
  var n = toJulianDate(date) - 2451545.0;
  var L = normalizeDegrees(280.460 + 0.9856474 * n);
  var g = normalizeDegrees(357.528 + 0.9856003 * n) * Math.PI / 180;
  return normalizeDegrees(L + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g));
}

function geneKeyAt(date) {
  var offset = normalizeDegrees(sunLongitude(date) - GENE_KEY_WHEEL_START);
  var index = Math.floor(offset / GENE_KEY_ARC);
  return {
    index: index,
    key: GENE_KEY_WHEEL[index],
    line: Math.floor((offset - index * GENE_KEY_ARC) / GENE_KEY_LINE_ARC) + 1
  };
}

/* Момент выхода Солнца из текущего ключа: шагаем по суткам, затем делим отрезок пополам. */
function geneKeyTransitEnd(date) {
  var startIndex = geneKeyAt(date).index;
  var lo = date.getTime();
  var hi = lo;
  for (var d = 1; d <= 8; d++) {
    hi = date.getTime() + d * 86400000;
    if (geneKeyAt(new Date(hi)).index !== startIndex) break;
    lo = hi;
  }
  for (var i = 0; i < 40; i++) {
    var mid = (lo + hi) / 2;
    if (geneKeyAt(new Date(mid)).index === startIndex) lo = mid; else hi = mid;
  }
  return new Date(hi);
}

function geneKeyTransitStart(date) {
  var startIndex = geneKeyAt(date).index;
  var hi = date.getTime();
  var lo = hi;
  for (var d = 1; d <= 8; d++) {
    lo = date.getTime() - d * 86400000;
    if (geneKeyAt(new Date(lo)).index !== startIndex) break;
    hi = lo;
  }
  for (var i = 0; i < 40; i++) {
    var mid = (lo + hi) / 2;
    if (geneKeyAt(new Date(mid)).index === startIndex) hi = mid; else lo = mid;
  }
  return new Date(hi);
}

function renderGeneKeyWidget() {
  var el = document.getElementById("widget-genekey");
  if (!el) return;
  var now = new Date();
  var gk = geneKeyAt(now);
  var start = geneKeyTransitStart(now);
  var end = geneKeyTransitEnd(now);

  var msLeft = end - now;
  var daysLeft = Math.ceil(msLeft / 86400000);
  var leftText = msLeft < 86400000
    ? "осталось меньше суток"
    : "осталось " + daysLeft + " " + pluralDay(daysLeft);
  var endText = end.toLocaleDateString("ru-RU", { day: "numeric", month: "long", timeZone: LUMINO_LOCATION.tz });
  var progress = Math.min(100, Math.max(0, ((now - start) / (end - start)) * 100));

  el.innerHTML =
    '<div class="widget-label">' + icon("ic-hd") + "Генные ключи" +
      '<button type="button" class="info-btn" data-genekey-info aria-expanded="false" aria-label="Что такое транзит Генных ключей">' + icon("ic-info") + "</button>" +
    "</div>" +
    '<p class="widget-info" id="genekey-info-text" hidden>Круг из 64 Генных ключей повторяет порядок гексаграмм И-Цзин и тот же круг ворот, что в Дизайне человека. Солнце проходит весь круг за год, задерживаясь в каждом ключе примерно 5–6 дней и меняя линию раз в сутки с небольшим. Положение считается по эфемериде прямо в браузере, поэтому обновляется само.</p>' +
    '<div class="transit-key">Ключ ' + gk.key + ' <span class="transit-line">· линия ' + gk.line + "</span></div>" +
    '<div class="transit-hex">Гексаграмма «' + HEXAGRAM_NAMES[gk.key - 1] + '»</div>' +
    '<div class="transit-bar"><span style="width:' + progress.toFixed(1) + '%"></span></div>' +
    '<div class="transit-left">' + leftText.charAt(0).toUpperCase() + leftText.slice(1) + " · до " + endText + "</div>" +
    '<a class="transit-link" href="' + SITE_CONFIG.geneKeyChannelUrl + '" target="_blank" rel="noopener">' +
      icon("ic-tg") + "Полное описание транзита</a>";

  bindInfoButton(el, "[data-genekey-info]", "genekey-info-text");
}

function kIndexZone(value) {
  if (value < 3) return { label: "Спокойная обстановка", cls: "quiet" };
  if (value < 5) return { label: "Повышенная активность", cls: "elevated" };
  return { label: "Геомагнитная буря", cls: "storm" };
}

/* Кнопка «i» в шапке виджета: показать/скрыть пояснение. */
function bindInfoButton(widgetEl, buttonSelector, textId) {
  var btn = widgetEl.querySelector(buttonSelector);
  if (!btn) return;
  btn.addEventListener("click", function () {
    var info = document.getElementById(textId);
    var expanded = btn.getAttribute("aria-expanded") === "true";
    info.hidden = expanded;
    btn.setAttribute("aria-expanded", String(!expanded));
  });
}

/* ----- К-индекс: текущее значение NOAA ----- */

function renderKIndexWidget() {
  var el = document.getElementById("widget-kindex");
  if (!el) return;
  el.innerHTML =
    '<div class="widget-label">' + icon("ic-wave") + "К-индекс" +
      '<button type="button" class="info-btn" data-kindex-info aria-expanded="false" aria-label="Что такое К-индекс">' + icon("ic-info") + "</button>" +
    "</div>" +
    '<p class="widget-info" id="kindex-info-text" hidden>К-индекс — показатель геомагнитной активности Земли по шкале от 0 до 9. 0–2 — спокойная магнитосфера, 3–4 — заметные возмущения, 5 и выше — геомагнитная буря, которая иногда ощущается как усталость или головная боль у чувствительных людей. Значение берём с минутного потока NOAA SWPC и обновляем каждые полчаса.</p>' +
    '<div class="stat-num" id="kindex-value">…</div>' +
    '<div class="stat-sub" id="kindex-sub">Загружаем данные NOAA…</div>' +
    '<div class="kindex-scale">' +
      '<div class="kindex-track">' +
        '<span class="kindex-zone zone-quiet"></span>' +
        '<span class="kindex-zone zone-elevated"></span>' +
        '<span class="kindex-zone zone-storm"></span>' +
        '<span class="kindex-marker" id="kindex-marker"></span>' +
      "</div>" +
      '<div class="kindex-scale-labels"><span>спокойно</span><span>повышено</span><span>буря</span></div>' +
    "</div>";

  bindInfoButton(el, "[data-kindex-info]", "kindex-info-text");
  updateKIndexWidget();
}

function updateKIndexWidget() {
  var valueEl = document.getElementById("kindex-value");
  if (!valueEl) return;
  currentKp()
    .then(function (kp) {
      var zone = kIndexZone(kp.value);
      valueEl.textContent = kp.value.toFixed(1);
      document.getElementById("kindex-sub").textContent = zone.label + " · данные на " + timeInMoscow(kp.at) + " МСК";
      var marker = document.getElementById("kindex-marker");
      marker.style.left = Math.min(100, (kp.value / 9) * 100) + "%";
      marker.className = "kindex-marker zone-" + zone.cls;
    })
    .catch(function () {
      valueEl.textContent = "—";
      document.getElementById("kindex-sub").textContent = "Не удалось получить данные NOAA";
    });
}

/* ----- Резонанс Шумана: живая спектрограмма станции Томска ----- */

function renderSchumannWidget() {
  var el = document.getElementById("widget-schumann");
  if (!el) return;
  el.innerHTML =
    '<div class="widget-label">' + icon("ic-pulse") + "Шуманн" +
      '<button type="button" class="info-btn" data-schumann-info aria-expanded="false" aria-label="Что такое резонанс Шумана">' + icon("ic-info") + "</button>" +
    "</div>" +
    '<p class="widget-info" id="schumann-info-text" hidden>Резонанс Шумана — стоячие электромагнитные волны в полости между поверхностью Земли и ионосферой, базовая частота около 7.83 Гц. На спектрограмме по горизонтали идёт время, по вертикали — частота, а яркость показывает амплитуду: чем светлее полосы, тем сильнее резонанс. Живые измерения ведёт обсерватория Томского госуниверситета; у них график обновляется непрерывно, у нас — каждые полчаса.</p>' +
    '<figure class="schumann-figure" id="schumann-figure" hidden>' +
      '<img id="schumann-img" alt="Спектрограмма резонанса Шумана, станция Томского госуниверситета">' +
      '<figcaption class="schumann-caption" id="schumann-caption">Станция Томска (ТГУ)</figcaption>' +
    "</figure>" +
    '<p class="stat-sub" id="schumann-status">Загружаем график станции…</p>';

  bindInfoButton(el, "[data-schumann-info]", "schumann-info-text");
  updateSchumannWidget();
}

function updateSchumannWidget() {
  var img = document.getElementById("schumann-img");
  if (!img) return;
  var figure = document.getElementById("schumann-figure");
  var status = document.getElementById("schumann-status");

  img.onload = function () {
    figure.hidden = false;
    status.hidden = true;
    document.getElementById("schumann-caption").textContent =
      "Станция Томска (ТГУ) · получено в " + timeInMoscow(new Date()) + " МСК";
  };
  img.onerror = function () {
    figure.hidden = true;
    status.hidden = false;
    status.textContent = "Станция Томска сейчас недоступна — график появится, как только она вернётся в эфир.";
  };
  img.src = noCacheUrl(SCHUMANN_IMAGE_URL);
}

/* ----- Сегодня: дата, восход и закат ----- */

function renderTodayWidget() {
  var el = document.getElementById("widget-today");
  if (!el) return;
  var now = new Date();
  var dateStr = now.toLocaleDateString("ru-RU", { day: "numeric", month: "long", weekday: "long", timeZone: LUMINO_LOCATION.tz });
  dateStr = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);

  el.innerHTML =
    '<div class="widget-label">' + icon("ic-sun") + "Сегодня</div>" +
    '<div class="today-date">' + dateStr + "</div>" +
    '<div class="today-sun">' +
      '<div class="today-sun-item"><span class="today-sun-label">Восход</span><span class="today-sun-time" id="today-sunrise">—:—</span></div>' +
      '<div class="today-sun-item"><span class="today-sun-label">Закат</span><span class="today-sun-time" id="today-sunset">—:—</span></div>' +
    "</div>";

  fetch(noCacheUrl("https://api.sunrise-sunset.org/json?lat=" + LUMINO_LOCATION.lat + "&lng=" + LUMINO_LOCATION.lon + "&formatted=0"))
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (data.status !== "OK") throw new Error("bad status");
      document.getElementById("today-sunrise").textContent = timeInMoscow(new Date(data.results.sunrise));
      document.getElementById("today-sunset").textContent = timeInMoscow(new Date(data.results.sunset));
    })
    .catch(function () {});
}

/* ----- обновление правой колонки каждые полчаса ----- */

function refreshWidgets() {
  lastWidgetRefresh = Date.now();
  kpRequest = null; // следующий currentKp() сходит в NOAA заново
  renderTodayWidget();
  renderMoonWidget();
  renderGeneKeyWidget();
  updateSchumannWidget();
  updateKIndexWidget();
}

function startWidgetRefresh() {
  lastWidgetRefresh = Date.now();
  if (widgetRefreshTimer) clearInterval(widgetRefreshTimer);
  widgetRefreshTimer = setInterval(refreshWidgets, WIDGET_REFRESH_MS);
  // Вкладку могли оставить открытой надолго: вернулись к ней — проверяем, не устарели ли данные.
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden && Date.now() - lastWidgetRefresh >= WIDGET_REFRESH_MS) refreshWidgets();
  });
}

function renderRightbar() {
  var el = document.getElementById("rightbar");
  if (!el) return;
  el.innerHTML =
    '<div class="widget" id="widget-today"></div>' +
    '<div class="widget" id="widget-moon"></div>' +
    '<div class="widget" id="widget-genekey"></div>' +
    '<div class="widget" id="widget-schumann"></div>' +
    '<div class="widget" id="widget-kindex"></div>' +
    '<div class="widget-ad"><div class="widget-label">Реклама</div><div class="banner-ad-slot" style="text-align:left;">рекламный блок РСЯ · 300×250</div></div>';
  renderTodayWidget();
  renderMoonWidget();
  renderGeneKeyWidget();
  renderSchumannWidget();
  renderKIndexWidget();
  startWidgetRefresh();
}

function renderFooter() {
  var el = document.getElementById("footer");
  if (!el) return;
  el.innerHTML =
    '<div class="footer-brand">' + icon("ic-crest") + SITE_CONFIG.siteName + "</div>" +
    '<nav class="footer-links"><a href="/">Главная</a><a href="/about.html">О проекте</a><a href="/contacts.html">Контакты</a></nav>' +
    '<div class="footer-social">' +
      '<a href="#">' + icon("ic-tg") + "</a>" +
      '<a href="#">' + icon("ic-vk") + "</a>" +
      '<a href="#">' + icon("ic-ig") + "</a>" +
    "</div>";
}

function renderAdSlot(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.classList.add("banner-ad");
  el.innerHTML = '<span class="banner-ad-label">Реклама</span><div class="banner-ad-slot">рекламный блок РСЯ' +
    (SITE_CONFIG.yandexAdBlockId ? "" : " · подключим после одобрения РСЯ") + "</div>";
  // Реальный код Яндекс РСЯ вставляется сюда после получения блока в кабинете.
}

function initMobileNav() {
  var sidebar = document.getElementById("sidebar"), overlay = document.getElementById("overlay");
  if (!sidebar || !overlay) return;
  function openNav() { sidebar.classList.add("open"); overlay.classList.add("show"); }
  function closeNav() { sidebar.classList.remove("open"); overlay.classList.remove("show"); }
  document.addEventListener("click", function (e) {
    if (e.target.closest("#openNav")) openNav();
    if (e.target.closest("#closeNav")) closeNav();
    if (e.target === overlay) closeNav();
  });
}

function loadYandexMetrika() {
  if (!SITE_CONFIG.yandexMetrikaId) return;
  var id = SITE_CONFIG.yandexMetrikaId;
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    k = e.createElement(t); a = e.getElementsByTagName(t)[0];
    k.async = 1; k.src = r; a.parentNode.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  ym(id, "init", { clickmap: true, trackLinks: true, accurateTrackBounce: true });
}

document.addEventListener("DOMContentLoaded", function () {
  renderSprite();
  renderSidebar();
  renderTopbar();
  renderCrumbs();
  renderRightbar();
  renderFooter();
  renderTagPage();
  renderArticleActions();
  initMobileNav();
  loadYandexMetrika();
  document.querySelectorAll("[data-ad-slot]").forEach(function (el) { renderAdSlot(el.id); });
});
