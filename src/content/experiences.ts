export type Experience = {
  from: string;
  to: string | undefined;
  companyName: string;
  position: string | undefined;
  special?: true;
  slug?: string;
  shortDescription?: string;
};

export const experiences: Experience[] = [
  {
    from: '09/22',
    to: undefined,
    companyName: 'Bitnoise',
    position: 'Javascript Developer',
    slug: '/work/bitnoise',
    shortDescription:
      'During my tenure, I collaborated on projects for clients in Europe and the USA. These ranged from making eye-catching landing pages to building complex web and mobile apps.',
  },
  {
    from: '06/21',
    to: '08/22',
    companyName: 'Wunderman Thompson',
    position: 'UI Engineer',
    slug: '/work/wunderman-thompson',
    shortDescription:
      'Building complex and responsive UI for major companies located in UK with use of Adobe Experience Manager',
  },
  {
    from: '10/19',
    to: '10/23',
    companyName: 'Bachelor Degree',
    position: 'Computer Science',
    special: true,
  },
];
