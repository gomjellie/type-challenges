import { Equal, Expect } from '@type-challenges/utils'

type Concat<T extends unknown[], Q extends unknown[]> = [...T, ...Q]

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<['1', 2, '3'], [false, boolean, '4']>,
      ['1', 2, '3', false, boolean, '4']
    >
  >
]
