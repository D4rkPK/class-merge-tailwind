import { ClassGroup } from '../types';

export const TypographyList: ClassGroup = {
  nameClassGroup: 'TypographyList',
  prefix: 'list',
  separator: '-',
  groups: [
    {
      nameGroup: 'StyleImage',
      classes: ['image-none'],
    },
    {
      nameGroup: 'StylePosition',
      classes: ['inside', 'outside'],
    },
    {
      nameGroup: 'StyleType',
      classes: ['none', 'disc', 'decimal'],
    },
  ],
};
