import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

// prettier-ignore
type Reverse<T extends unknown[]> = 
  T extends [infer F, ...infer Rest] ? (
    [...Reverse<Rest>, F]
  ) : []

// prettier-ignore
type FlipArguments<T> = 
  T extends (...args: infer A) => infer R ? (
    A extends unknown[] ? (...args: Reverse<A>) => R : T
  ) : T

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<
    Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>
  >,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >
]
