export const excludeNull = <T>(hasNullArray: (T | null | undefined)[]) =>
  hasNullArray.filter((item) => !!item) as T[];
