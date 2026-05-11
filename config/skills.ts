import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Dinamik ilovalarni marshrutlash, tartiblar, yuklash interfeysi va API marshrutlari bilan bemalol yarata oladi.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Komponentlar, holat, rekvizitlar va virtual DOM yordamida interaktiv foydalanuvchi interfeyslarini yaratish uchun.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "GraphQL",
    description:
      "API va ish vaqti bajarilishi uchun kuchli so'rovlar tili bilan ma'lumotlarni aniq ishlaydi.",
    rating: 4,
    icon: Icons.graphql,
  },
  {
    name: "express.js",
    description:
      "Tez, noaniq Node.js ramkasidan foydalanib, tezda veb-ilovalar va API-larni yaratadi.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Node.js",
    description:
      "JavaScript-ni server tomonida ishga tushiring, bu dinamik va sezgir ilovalarni yoqadi.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "MongoDB",
    description:
      "Moslashuvchan va kengaytiriladigan NoSQL ma'lumotlar bazasi bilan ma'lumotlarni muammosiz saqlaydi va oladi.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Typescript",
    description:
      "JavaScript-ni statik turlar bilan yaxshilaydi, kodni tushunarli va ishonchli qiladi.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Ko'p qirrali skript tili bilan interaktiv va dinamik veb-tajribalarni yaratadi.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "HyperText Markup Languagening so‘nggi versiyasi bilan veb-kontentni chiroyli tarzda tuzadi.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Kaskadli uslublar jadvallarining so'nggi iteratsiyasi bilan veb-sahifalarni ijodiy tarzda yaratadi.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "React Native",
    description:
      "Barqaror va qiziqarli tajribalar uchun React yordamida platformalar aro mobil ilovalarni ishlab chiqadi.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Redux",
    description:
      "Prognoz qilinadigan va markazlashtirilgan holat konteyneridan foydalanib, ilova holatini samarali boshqaradi.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "Socket.io",
    description:
      "Mijozlar va serverlar o'rtasida real vaqt rejimida ikki tomonlama aloqani osonlik bilan yoqadi.",
    rating: 3,
    icon: Icons.socketio,
  },
  {
    name: "Tailwind CSS",
    description:
      "Birinchi yordamchi CSS tizimi yordamida chiroyli, zamonaviy veb-saytlarni tezroq loyihalash.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "AWS",
    description:
      "Kengaytirilgan, ishonchli va xavfsiz ilovalarni yaratish va joylashtirish uchun Amazon veb-xizmatlaridan foydalanish uchun.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "Bootstrap",
    description:
      "Ommabop CSS ramkasidan foydalangan holda tezda sezgir va jozibali veb-dizaynlarni yaratadi.",
    rating: 2,
    icon: Icons.bootstrap,
  },
  {
    name: "MySQL",
    description:
      "Ma'lumotlarga asoslangan ilovalar uchun relyatsion ma'lumotlar bazalarini samarali boshqaring va tashkil qiladi.",
    rating: 2,
    icon: Icons.mysql,
  },
  {
    name: "Netlify",
    description:
      "Ma'lumotlarga asoslangan ilovalar uchun relyatsion ma'lumotlar bazalarini samarali boshqaring va tashkil qiladi.",
    rating: 4,
    icon: Icons.netlify,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
