import { Equal, Expect } from '@type-challenges/utils'

type If<B extends boolean, T, Q> = B extends true ? T : Q

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>
]

// @ts-expect-error
type error = If<null, 'a', 'b'>
