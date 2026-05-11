import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Bosh sahifa",
    description: "Mening web dasturimga xush kelibsiz",
    metadata: {
      title: "Bosh sahifa",
      description: "Asliddin Nuriddinovning portfolio websayti.",
    },
  },
  skills: {
    title: "Ko'nikmalar",
    description: "Mening kasbiy shaxsimni belgilaydigan asosiy ko'nikmalar.",
    metadata: {
      title: "Ko'nikmalar",
      description:
        "Asliddin Nuriddinovning kasbiy shaxsimni belgilaydigan asosiy ko'nikmalar.",
    },
  },
  projects: {
    title: "Loyhalar",
    description: "Ta'sirli loyihalar va texnik yutuqlarni namoyish qilish.",
    metadata: {
      title: "Loyhalar",
      description: "Asliddin Nuriddinovning loyihalar va texnik yutuqlarni namoyishlar.",
    },
  },
  contact: {
    title: "Bog'lanish",
    description: "Men bilan bog'lanish uchun ushbu qatorlarni to'ldirining!",
    metadata: {
      title: "Bog'lanish",
      description: "Asliddin Nuriddinov bilan bog'lanish",
    },
  },
  contributions: {
    title: "Hissalar",
    description: "Ochiq manbali hissalar va jamoatchilik ishtiroki.",
    metadata: {
      title: "Contributions",
      description:
        "Asliddin Nuriddinov's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Rezyume",
    description: "Asliddin Nuriddinovning rezumesi.",
    metadata: {
      title: "Rezyume",
      description: "Asliddin Nuriddinovning rezyumesi.",
    },
  },
  blogs: {
    title: "Bloglar",
    description:
      "AI, dasturiy ta'minot injiniringi va omma oldida qurish haqidagi fikrlar.",
    metadata: {
      title: "Bloglar",
      description:
        "Asliddin Nuriddinovning dasturiy ta'minot injiniringi va omma oldida qurish haqidagi fikrlari",
    },
  },
  experience: {
    title: "Tajribalar",
    description: "Professional sayohat va martaba xronologiyasi.",
    metadata: {
      title: "Experience",
      description:
        "Asliddin Nuriddinovning professional sayohat va martaba xronologiyasi.",
    },
  },
};
