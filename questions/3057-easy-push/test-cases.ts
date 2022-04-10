import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type Push<P extends unknown[], Q> = [...P, Q]

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>
]
