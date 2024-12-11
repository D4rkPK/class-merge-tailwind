import { ClassGroup } from '../types';

export const TypographyDecorationColor: ClassGroup = {
  nameClassGroup: 'TypographyDecoration',
  prefix: 'decoration',
  separator: '-',
  groups: [
    {
      nameGroup: 'Thickness',
      classes: ['auto', 'from-font', '0', '1', '2', '4', '8'],
    },
    {
      nameGroup: 'Style',
      classes: ['solid', 'double', 'dotted', 'dashed', 'wavy'],
    },
    {
      nameGroup: 'Color',
      classes: ['*'],
    },
  ],
};
