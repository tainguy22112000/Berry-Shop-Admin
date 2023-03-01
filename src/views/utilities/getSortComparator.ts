import { Order } from '@/types';

import { descendingComparator } from './descendingComparator';

export function getSortComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string | boolean | string[] | any },
  b: { [key in Key]: number | string | boolean | string[] | any },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
