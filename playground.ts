import { initMerge } from './projects/bi-class-merge-tailwind/src/lib/merge-class-tailwind';

const originales = 'text-center bg-white bg-clip-border bg-auto sm:text-xl';
const modificaciones = 'bg-clip-text bg-blue-500 sm:text-xs';
const mergedClasses = initMerge(originales, modificaciones);
console.log(mergedClasses);
