import { Equal, Expect } from '@type-challenges/utils'

// prettier-ignore
type Common<T extends Record<string, unknown>, U extends Record<string, unknown>> = 
  T extends unknown ? {
    [k in keyof T & keyof U]: (
      k extends keyof T ? (
        T[k]
      ) : k extends keyof U ? (
        U[k]
      ) : never
    )
  } : never

// prettier-ignore
type Diff<T extends Record<string, unknown>, U extends Record<string, unknown>> =
  (Common<T, U>) extends infer R ? (
    Omit<T & U, keyof R> extends infer S ? {
      [k in keyof S]: (k extends keyof T ? T[k] : (
        k extends keyof U ? U[k]: never
      ))
    } : never
  ) : never

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>
]
