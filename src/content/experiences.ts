export type Experience = {
  from: string;
  to: string | undefined;
  companyName: string;
  position: string | undefined;
  special?: true;
  slug?: string;
};

export const experiences: Experience[] = [
  {
    from: '09/22',
    to: undefined,
    companyName: 'Bitnoise',
    position: 'Javascript Developer',
    slug: '/work/bitnoise',
  },
  {
    from: '06/21',
    to: '08/22',
    companyName: 'Wunderman Thompson',
    position: 'UI Engineer',
    slug: '/work/wunderman-thompson',
  },
  {
    from: '10/19',
    to: '10/23',
    companyName: 'Bachelor Degree',
    position: 'Computer Science',
    special: true,
  },
];
