import { Equal, Expect } from '@type-challenges/utils'

type Last<T extends unknown[]> = T extends [...unknown[], infer B] ? B : never

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
]
