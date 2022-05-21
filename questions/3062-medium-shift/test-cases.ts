import { Equal, Expect } from '@type-challenges/utils'

// prettier-ignore
type Shift<T extends unknown[]> = 
  T extends [infer _, ...infer Rest] ? Rest : never

type cases = [
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>
]
