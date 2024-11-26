import { ClassGroup } from '../types';

export const Background: ClassGroup = {
  nameClassGroup: 'Background',
  prefix: 'bg',
  separator: '-',
  groups: [
    {
      nameGroup: 'Attachment',
      classes: ['fixed', 'local', 'scroll'],
    },
    {
      nameGroup: 'Clip',
      classes: ['clip'],
    },
    {
      nameGroup: 'Origin',
      classes: ['origin'],
    },
    {
      nameGroup: 'Position',
      classes: ['bottom', 'center', 'left', 'right', 'top'],
    },
    {
      nameGroup: 'Repeat',
      classes: ['repeat', 'no-repeat'],
    },
    {
      nameGroup: 'Size',
      classes: ['auto', 'cover', 'contain'],
    },
    {
      nameGroup: 'Image',
      classes: ['none', 'gradient', ''],
    },
    {
      nameGroup: 'Color',
      classes: ['*'],
    },
  ],
};
