interface RangeOptions {
  from: number;
  to: number;
  step?: number;
}

export const range = ({ from, to, step = 1 }: RangeOptions) => {
  if (!to || to <= from) return [];

  return Array.from({ length: Math.ceil((to - from) / step) }, (_, i) => i * step + from);
};
