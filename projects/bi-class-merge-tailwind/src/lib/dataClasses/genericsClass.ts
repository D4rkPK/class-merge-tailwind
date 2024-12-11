import { ClassGroup } from '../types';

export const GenericsClass: ClassGroup = {
  nameClassGroup: 'Generic',
  prefix: '',
  separator: '',
  groups: [
    {
      nameGroup: 'Font Smoothing',
      classes: ['antialiased', 'subpixel-antialiased'],
    },
    { nameGroup: 'Font Style', classes: ['italic', 'not-italic'] },
    {
      nameGroup: 'Font Variant Numeric',
      classes: [
        'normal-nums',
        'ordinal',
        'slashed-zero',
        'lining-nums',
        'oldstyle-nums',
        'proportional-nums',
        'tabular-nums',
        'diagonal-fractions',
        'stacked-fractions',
      ],
    },
    {
      nameGroup: 'Letter Spacing',
      classes: [
        'tracking-tighter',
        'tracking-tight',
        'tracking-normal',
        'tracking-wide',
        'tracking-wider',
        'tracking-widest',
      ],
    },
    {
      nameGroup: 'Line Height',
      classes: ['leading-*'],
    },
    {
      nameGroup: 'Text Decoration',
      classes: ['underline', 'overline', 'line-through', 'no-underline'],
    },
    {
      nameGroup: 'Text Transform',
      classes: ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
    },
    {
      nameGroup: 'Text Overflow',
      classes: ['truncate', 'text-ellipsis', 'text-clip'],
    },
  ],
};
