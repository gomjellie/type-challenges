import { Equal, Expect } from '@type-challenges/utils'

// prettier-ignore
type Flatten<T extends unknown[]> = 
  T extends [infer F, ...infer Rest] ? (
    F extends unknown[] ? (
      [...Flatten<F>, ...Flatten<Rest>]
    ) : [F, ...Flatten<Rest>]
  ) : []

type V = Flatten<[]>
type V2 = Flatten<[1, 2, 3, 4]>
type V3 = Flatten<[1, [2]]>
type V4 = Flatten<[1, 2, [3, 4], [[[5]]]]>

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<
      Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>,
      [{ foo: 'bar'; 2: 10 }, 'foobar']
    >
  >
]
