import { classesTailwind } from './dataClasses/_data';
import { ClassGroup, ClassProcess, Group } from './types';

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
  let groupName = '';
  if (cls.includes(':')) {
    const categoria = categorizePseudoClass(cls);
    cls = categoria.class;
    groupName += categoria.groupName;
  }

  for (const classGroup of classesTailwind) {
    if (cls.startsWith(classGroup.prefix + classGroup.separator)) {
      for (const group of classGroup.groups) {
        if (cls.match(buildRegex(classGroup, group))) {
          groupName += `${classGroup.nameClassGroup}${classGroup.separator}${group.nameGroup}`;
          return groupName;
        }
      }
    }
  }

  return groupName;
}

function categorizePseudoClass(cls: string): ClassProcess {
  const clases = cls.split(':');
  const baseClass = clases.pop();
  const clasesOrdenadas = clases.sort();
  return {
    class: baseClass ?? cls,
    groupName: clasesOrdenadas.toString().toUpperCase(),
  };
}

function buildRegex(classGroup: ClassGroup, group: Group): RegExp {
  const classPattern = group.classes.includes('*')
    ? '\\S+'
    : group.classes.join('|');
  return new RegExp(
    `^${classGroup.prefix}${classGroup.separator}(${classPattern})`
  );
}
