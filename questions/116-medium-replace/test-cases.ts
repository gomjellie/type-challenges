import { Equal, Expect } from '@type-challenges/utils'

// prettier-ignore
type Replace<O extends string, S extends string, T extends string> =
  O extends `${infer L}${S}${infer R}` ? (
    S extends '' ? O : `${L}${T}${R}`
  ) : O

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>
]
