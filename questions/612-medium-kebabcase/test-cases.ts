import { Equal, Expect } from '@type-challenges/utils'

// prettier-ignore
type StringToUnion<T extends string> = 
  T extends `${infer F}${infer Rest}` ? (
    F | StringToUnion<Rest>
  ) : never

const 대문자들 = 'ABCDEFGHIJKLMNOPQRSTUV'
type 대문자집합 = StringToUnion<typeof 대문자들>

// prettier-ignore
type IsUpperCase<T extends string> =
  T extends 대문자집합 ? true : false

// prettier-ignore
type KebabCase<T extends string, P extends boolean = true> = 
  T extends `${infer F}${infer Rest}` ? (
    P extends true ? (
      IsUpperCase<F> extends true ? `${Lowercase<F>}${KebabCase<Rest, false>}` : `${F}${KebabCase<Rest, false>}`
    ) : IsUpperCase<F> extends true ? `-${Lowercase<F>}${KebabCase<Rest, false>}` : `${F}${KebabCase<Rest, false>}`
  ) : T

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>
]
