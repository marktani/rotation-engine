export interface Table {
  id: string;
  content: TableContent;
}
export type TableContent = number[];

export type TableTransformation = (TableContent) => TableContent | null;

export type Region = Set<number>;

export type Layer = number;
export type TableWidth = number;
