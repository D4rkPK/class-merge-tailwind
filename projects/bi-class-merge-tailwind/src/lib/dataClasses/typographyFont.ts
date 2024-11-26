import { ClassGroup } from '../types';

export const TypographyFont: ClassGroup = {
  nameClassGroup: 'TypographyFont',
  prefix: 'font',
  separator: '-',
  groups: [
    {
      nameGroup: 'Family',
      classes: ['sans', 'serif', 'mono'],
    },
    {
      nameGroup: 'Weight',
      classes: [
        'thin',
        'extralight',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ],
    },
  ],
};
