export interface Criteria<T> {
  filter?: Array<Partial<Record<keyof T, unknown>>>;
  sort?: Partial<Record<keyof T, 'asc' | 'desc'>>;
  limit?: number;
}
