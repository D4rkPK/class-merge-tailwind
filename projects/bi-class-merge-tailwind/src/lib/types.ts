export type ClassGroup = {
  nameClassGroup: string;
  prefix: string;
  separator: string;
  groups: Group[];
};

export type Group = {
  nameGroup: string;
  classes: string[];
};
