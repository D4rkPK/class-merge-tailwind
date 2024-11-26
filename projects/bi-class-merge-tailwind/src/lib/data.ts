import { ClassGroup } from './types';

export const classesTailwind: ClassGroup[] = [
  {
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
  },
  {
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
  },
  {
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
  },
];
