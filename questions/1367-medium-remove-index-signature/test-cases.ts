import { Equal, Expect } from '@type-challenges/utils'

// prettier-ignore
type RemoveIndexSignature<T> = 
  {
    [k in keyof T as k extends `${infer K}` ? K : never]: T[k]
  }

type Foo = {
  [key: string]: any
  foo(): void
}

type Bar = {
  [key: number]: any
  bar(): void
}

type Baz = {
  bar(): void
  baz: string
}

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>
]
