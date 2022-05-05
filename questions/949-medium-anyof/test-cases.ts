import { Equal, Expect } from '@type-challenges/utils'

// prettier-ignore
type IsTrue<T> =
  T extends false ? false :
  T extends [] ? false :
  T extends 0 ? false :
  T extends Record<string, never> ? false :
  T extends '' ? false :
  true

// prettier-ignore
type AnyOf<T extends unknown[]> = 
  T extends [infer F, ...infer R] ? (
    true extends (IsTrue<F> | AnyOf<R>) ? true : false
  ) : T extends [] ? (
    false
  ) : never

// prettier-ignore
type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], {name: 'test'}, {1: 'test'}]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {name: 'test'}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {1: 'test'}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {name: 'test'}, {1: 'test'}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]
