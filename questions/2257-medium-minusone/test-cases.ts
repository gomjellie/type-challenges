import { Equal, Expect } from '@type-challenges/utils'

// prettier-ignore
type 한자리수배열생성<T extends string> = 
  T extends '0' ? []
  : T extends '1' ? [unknown]
  : T extends '2' ? [unknown, unknown]
  : T extends '3' ? [unknown, unknown, unknown]
  : T extends '4' ? [unknown, unknown, unknown, unknown]
  : T extends '5' ? [unknown, unknown, unknown, unknown, unknown]
  : T extends '6' ? [unknown, unknown, unknown, unknown, unknown, unknown]
  : T extends '7' ? [unknown, unknown, unknown, unknown, unknown, unknown, unknown]
  : T extends '8' ? [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
  : T extends '9' ? [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
  : never

// prettier-ignore
type GenerateArrayOfLength<L extends string, Arr extends unknown[] = []> = 
  L extends `${infer F}${infer Rest}` ? (
    GenerateArrayOfLength<
      Rest, [
        ...Arr,
        ...Arr,
        ...Arr,
        ...Arr,
        ...Arr,
        ...Arr,
        ...Arr,
        ...Arr,
        ...Arr,
        ...Arr,
        ...한자리수배열생성<F>
      ]
    >
  ) : Arr

// prettier-ignore
type MinusOne<T extends number> = 
  GenerateArrayOfLength<`${T}`> extends [
    infer _,
    ...infer Arr,
  ] ? Arr['length'] : never

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>
]
