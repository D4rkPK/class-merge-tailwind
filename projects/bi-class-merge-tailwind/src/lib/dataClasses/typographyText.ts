import { ClassGroup } from '../types';

export const TypographyText: ClassGroup = {
  nameClassGroup: 'TypographyText',
  prefix: 'text',
  separator: '-',
  groups: [
    {
      nameGroup: 'Size',
      classes: [
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
    {
      nameGroup: 'Align',
      classes: ['left', 'center', 'right', 'justify', 'start', 'end'],
    },
    {
      nameGroup: 'Wrap',
      classes: ['wrap', 'nowrap', 'balance', 'pretty'],
    },
    {
      nameGroup: 'Color',
      classes: ['*'],
    },
  ],
};
