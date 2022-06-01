import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

// prettier-ignore
type Reverse<T extends unknown[]> = 
  T extends [infer F, ...infer Rest] ? (
    [...Reverse<Rest>, F]
  ) : []

type cases = [
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>
]
