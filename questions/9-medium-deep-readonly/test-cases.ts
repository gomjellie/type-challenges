import { Equal, Expect } from '@type-challenges/utils'

type DeepReadonly<T> = T extends Record<string, unknown>
  ? {
      +readonly [k in keyof T]: DeepReadonly<T[k]>
    }
  : T

type V = DeepReadonly<X>

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>]

type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
    }
  }
}
