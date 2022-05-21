import { Equal, Expect } from '@type-challenges/utils'

// prettier-ignore
type TupleToNestedObject<T extends PropertyKey[], U> =
  T extends [infer F, ...infer Rest] ? {
    [k in F as k extends PropertyKey ? k : never]: TupleToNestedObject<Rest extends PropertyKey[] ? Rest : never, U>
  } : U

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<
    Equal<
      TupleToNestedObject<['a', 'b', 'c'], boolean>,
      { a: { b: { c: boolean } } }
    >
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
]
