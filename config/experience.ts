import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "ubs",
    position: "Ali dizayn",
    company: "Ali dizayn",
    location: "Fergana, Uzbekistan",
    startDate: new Date("2024-08-01"),
    endDate: new Date("2025-08-01"),
    description: [
      "IT va dizaynerlik o'qitish maktabi. Mentor va dasturchi muhandis.",
      "Javascript dasturlash tili mentor va dasturchi muhandis lavozimida 1-yil",
      "Dasturlashda xar yo'nalishlar, qiyinchiliklarni o'rgatish uslublari.",
    ],
    achievements: [
      "Bir nechta junior dasturchilarni Frontend va Full-Stack development yo‘nalishida muvaffaqiyatli o‘qitib, real loyihalarga tayyorladim.",
      "React, Next.js va JavaScript asoslarini o‘rgatish orqali talabalar bilim darajasini amaliy loyihalar orqali oshirdim.",
      "Talabalarga coding best practices, clean code va real-world project architecture bo‘yicha mentorlik qildim.",
      "Jamoaviy ishlash (teamwork) va Git/GitHub workflow bo‘yicha amaliy treninglar o‘tkazdim.",
      "10+ talabaga portfolio va startup darajasidagi loyihalarni yaratishda yo‘l-yo‘riq ko‘rsatdim.",
    ],
    skills: [
      "Typescript",
      "React",
      "Databricks",
      "Javascript",
      "MongoDB",
      "Bootstrap",
      "FastAPI",
      "Git",
      "Google Auth",
      "HTML 5",
      "MySQL",
      "Node.js",
      'Socket.io',
      'Firebase',
      'Next.js',
      'Tailwind CSS',
      'express.js',
      'Redux'
    ],
    companyUrl: "",
    logo: "/experience/keys-logo.jpg",
  },
  
];
