import { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type ZV = MyAwaited<Z>

type MyAwaited<T> = T extends Promise<infer Q>
  ? Q extends Promise<unknown>
    ? MyAwaited<Q>
    : Q
  : never

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>
]

// @ts-expect-error
type error = MyAwaited<number>
