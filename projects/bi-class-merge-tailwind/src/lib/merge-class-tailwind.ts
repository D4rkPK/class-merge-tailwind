import { classesTailwind } from './data';
import { ClassGroup, Group } from './types';

export function initMerge(baseClass: string, classToMerge: string) {
  const listToMerge = classToMerge.split(/\s+/);
  const listBaseClass = baseClass.split(/\s+/);

  const categorizedBaseClasses = new Map<string, string>();
  const resultClasses = new Set<string>();

  for (const cls of listBaseClass) {
    const category = categorizeClass(cls);
    if (category) {
      categorizedBaseClasses.set(category, cls);
    } else {
      resultClasses.add(cls);
    }
  }

  for (const cls of listToMerge) {
    const category = categorizeClass(cls);
    if (category) {
      categorizedBaseClasses.set(category, cls);
    } else {
      resultClasses.add(cls);
    }
  }

   categorizedBaseClasses.forEach((value) => resultClasses.add(value));

  return Array.from(resultClasses).join(' ');
}

function categorizeClass(cls: string): string {
  for (const classGroup of classesTailwind) {
    if (cls.startsWith(classGroup.prefix + classGroup.separator)) {
      for (const group of classGroup.groups) {
        if (cls.match(buildRegex(classGroup, group))) {
          return `${classGroup.nameClassGroup}${classGroup.separator}${group.nameGroup}`;
        }
      }
    }
  }

  return '';
}

function buildRegex(classGroup: ClassGroup, group: Group): RegExp {
  const classPattern = group.classes.includes('*')
    ? '\\S+'
    : group.classes.join('|');
  return new RegExp(
    `^${classGroup.prefix}${classGroup.separator}(${classPattern})`
  );
}
