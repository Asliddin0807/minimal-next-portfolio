import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "learning-platform",
    companyName:
      "E-learning platforma online dasturlashni o'rganish uchun (130+ GitHub stars)",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Ochiq manbali Next.js portfeli shabloni butun dunyo boʻylab ishlab chiquvchilar tomonidan tan olingan va forklangan, SEO/AEO va ishlash uchun optimallashtirilgan.",
    websiteLink: "https://e-platforma.vercel.app/",
    githubLink: "https://github.com/Asliddin0807/e-learning",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/portfolio/logo.jpg",
    pagesInfoArr: [
      {
        title: "Online o'qish & dasturlash",
        description:
          "Ko'nikmalar, loyihalar, hissalar va tajriba uchun bo'limlarga ega toza, minimal ochilish sahifasi.",
        imgArr: ["/profile-img.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Online darslik va dasturlashni o'rganmoqchi bo'lgan o'quvchilar uchun online platforma yaratdim!",
        "Loyiha unumdorlikka, toza tipografiyaga va kuchli SEO/AEO asoslariga katta e'tibor qaratadi va u butun dunyo bo'ylab ishlab chiquvchilar tomonidan qabul qilingan va forklangan.",
      ],
      bullets: [
        "Dunyo boʻylab ishlab chiquvchilar tomonidan tan olingan va forklangan ochiq manbali Next.js portfeli shablonini yaratdi.",
        "AEO/GEO optimallashtirish orqali “eng yaxshi Next.js portfel shablonini GitHub” uchun ChatGPT qidiruvida 1-oʻrinni egalladi.",
        "Minimal, tematik dizayn tizimiga ega tezkor, sezgir foydalanuvchi interfeysi mavjud.",
      ],
    },
  },
  {
    id: "game",
    companyName: "Game 2048",
    type: "Personal",
    category: ["Full Stack", "Mobile Dev", "Web Dev"],
    shortDescription:
      "Mobil o'yin logika va matematik. Eng katta sonni bitta burchakda ushlash, Tartibsiz harakat qilmaslik, Pastga va bir tomonga ko‘proq yurish",
    techStack: ["Next.js", "React", "Node.js", "Typescript", "Python"],
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-10-01"),
    companyLogoImg: "/projects/convot/logo.jpg",
    pagesInfoArr: [
      {
        title: "Mobile dev & Games",
        description: "Mobil o'yinlarni xush ko'ruvchilar uchun 2048!",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Mobil qurilmalar uchun oddiy interfaceli o'yin 2048.",
        "Buning eng ajoyib tomonlari shundaki, inson miyasini mashq qilish uchun va ishlardan chalg'ish uchun!",
      ],
      bullets: [
        "↑ ↓ ← → tugmalari bilan bloklarni surasiz.",
        "Har yurishda yangi 2 yoki 4 paydo bo‘ladi.",
        "Joy qolmasa va yurish bo‘lmasa — o‘yin tugaydi.",
      ],
    },
  },
  {
    id: "movie-mobile",
    companyName: "Online kinoteatr mobil ilovasi",
    type: "Personal",
    category: ["Full Stack", "Mobile Dev", "UI/UX"],
    shortDescription:
      "Online kinoteatr loyhasida mobil qurulmalar uchun online kino va seriallarni ko'rish uchun yaratildi!",
    websiteLink: "",
    githubLink: "",
    techStack: ["Next.js", "React", "Typescript", "Supabase", "Tailwind CSS"],
    startDate: new Date("2024-08-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/niya/logo.jpg",
    pagesInfoArr: [
      {
        title: "Mobil ilova",
        description: "Online mobil qurilmalar uchun ilova.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Barcha mobil qurilmalar uchun mos tushadigan ilova.",
        "+1000 dan ortiq kino va seriallar.",
      ],
      bullets: [
        "React-native texnologiasi orqali yaratildi server bilan aloqa bor.",
        "Zaifmobilqurilmalar uchun xam mos tushadi.",
        "React-native expo texnologiyasi orqali yaratildi va ishga tushirildi.",
      ],
    },
  },
  {
    id: "portfolio-card",
    companyName: "Portfolio Card",
    type: "Professional",
    category: ["Web Dev", "Frontend", "3D Modeling"],
    shortDescription:
      "Three.js va Blender imkoniyatlaridan foydalangan holda immersiv 3D portfolio kartasi yaratildi, bu erda san'at va texnologiya interaktiv asarda birlashadi.",
    websiteLink: "",
    githubLink: "",
    techStack: ["React", "Javascript", "HTML 5", "CSS 3"],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/card/logo.png",
    pagesInfoArr: [
      {
        title: "Karta ko'rinishlari",
        description: "Interaktiv 3D kartaning old va orqa ko'rinishlari",
        imgArr: ["/projects/card/card_2.webp", "/projects/card/card_3.webp"],
      },
      {
        title: "Interaktiv elementlar",
        description:
          "Interaktiv animatsiyalar bilan 3D modelga o'rnatilgan maxsus havolalar",
        imgArr: ["/projects/card/card_1.webp"],
      },
      {
        title: "3D Model Development",
        description: "Model yaratish jarayonini namoyish qiluvchi blender loyihasi",
        imgArr: ["/projects/card/card_4.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Shaxsiy loyiham davomida men ijodkorlik olamiga sho‘ng‘ib, Three.js yordamida o‘ziga xos portfolio kartasini yaratdim.",
        "Bu portfolio kartasi oddiy dizayndan ancha yuqori bo‘lib, mukammal yoritish effektlari bilan boyitilgan jozibador 3D model sifatida namoyon bo‘ladi va foydalanuvchiga hayratlanarli vizual tajriba taqdim etadi.",
        "Ushbu g‘oyani amalga oshirish uchun Three.js va Blender imkoniyatlarini birlashtirib, karta markazidagi asosiy 3D modelni puxta ishlab chiqdim va sayqalladim.",
        "Bundan tashqari, men maxsus havolalarni Three.js komponentlari ichiga mohirona integratsiya qildim. Yangi komponentlar yaratilib, karta yuzasiga uyg‘un tarzda joylashtirildi va ular karta aylanishlari bilan birga harakatlanib, interaktiv tajribani yanada boyitdi.",
        "Portfolio kartasi doimiy avtomatik aylanish animatsiyasiga ega bo‘lib, uning turli tomonlarini namoyish etadi. Qo‘shimcha ravishda, foydalanuvchi kartani oddiy sudrash orqali uni istalgan tomondan ko‘rish imkoniyatiga ega bo‘ladi.",
        "Umuman olganda, ushbu loyiha texnik mahorat, san’atkorona yondashuv va interaktiv dizayn uyg‘unligini ifodalaydi. Three.js, Blender va komponent integratsiyasi orqali oddiy portfolio emas, balki foydalanuvchida unutilmas taassurot qoldiruvchi dinamik tajriba yaratildi.",
      ],

      bullets: [
        "Three.js yordamida o‘ziga xos portfolio kartasi konsepsiyasi ishlab chiqildi va muvaffaqiyatli yaratildi.",
        "Puxta yoritish effektlari bilan boyitilgan jozibador 3D model yaratilib, kuchli vizual tajriba taqdim etildi.",
        "Three.js va Blender uyg‘unligi orqali markaziy 3D model mukammal tarzda modellashtirildi va detallariga katta e’tibor qaratildi.",
        "Three.js komponentlari ichiga maxsus havolalar integratsiya qilinib, yangi interaktiv qatlam hosil qilindi.",
        "Portfolio kartasiga avtomatik aylanish funksiyasi qo‘shilib, uning barcha tomonlari namoyish etilishi ta’minlandi.",
        "Foydalanuvchilar uchun intuitiv sudrash mexanizmi joriy qilinib, kartani har tomonlama ko‘rib chiqish imkoniyati yaratildi.",
        "Loyiha texnik salohiyat, ijodkorlik va interaktiv dizayn uyg‘unligini aks ettirib, an’anaviy portfolio tushunchasini yangi bosqichga olib chiqdi.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
