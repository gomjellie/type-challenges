import { Equal, Expect } from '@type-challenges/utils'

type TupleToUnion<T extends unknown[]> = T extends [infer Q, ...infer P]
  ? Q | TupleToUnion<P>
  : never

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
]
