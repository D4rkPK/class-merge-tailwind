import { ClassGroup } from '../types';
import { TypographyText } from './typographyText';
import { TypographyFont } from './typographyFont';
import { Background } from './background';
import { GenericsClass } from './genericsClass';
import { TypographyContent } from './typographyContent';
import { TypographyDecorationColor } from './typographyDecorationColor';
import { TypographyHyphens } from './typographyHyphens';
import { TypographyIndent } from './typographyIndent';
import { TypographyLine } from './typographyLine';
import { TypographyList } from './typographyList';
import { TypographyUnderline } from './typographyUnderline';
import { TypographyVerticalAlign } from './typographyVerticalAlign';
import { TypographyWhitespace } from './typographyWhitespace';
import { TypographyWordBreak } from './typographyWordBreak';

export const classesTailwind: ClassGroup[] = [
  TypographyText,
  TypographyFont,
  Background,
  TypographyContent,
  TypographyDecorationColor,
  TypographyHyphens,
  TypographyIndent,
  TypographyLine,
  TypographyList,
  TypographyUnderline,
  TypographyVerticalAlign,
  TypographyWhitespace,
  TypographyWordBreak,
  GenericsClass,
];
