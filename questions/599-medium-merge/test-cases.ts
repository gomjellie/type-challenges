import { Equal, Expect } from '@type-challenges/utils'

// prettier-ignore
type Merge<T, Q> = {
  [k in keyof T | keyof Q]: k extends keyof Q ? Q[k] : (k extends keyof T ? T[k] : never)
}

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number
        b: number
        c: boolean
      }
    >
  >
]
