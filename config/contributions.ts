export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Quiz-app",
    contibutionDescription:
      "Quiz-app bu barcha turdagi qurilmalar uchun test ishlash ilovasi",
    repoOwner: "aslnuriddinov",
    link: "https://github.com/namanbarkiya/minimal-next-portfolio",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
