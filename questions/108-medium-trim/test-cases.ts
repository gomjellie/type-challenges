import { Equal, Expect } from '@type-challenges/utils'

type WhiteSpace = ' ' | '\n' | '\t'

// prettier-ignore
type Trim<S extends string> = 
  S extends `${WhiteSpace}${infer M}`
    ? Trim<M>
    : S extends `${infer M}${WhiteSpace}`
      ? Trim<M>
      : S

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>
]
