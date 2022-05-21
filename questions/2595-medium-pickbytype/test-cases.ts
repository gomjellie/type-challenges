import { Equal, Expect } from '@type-challenges/utils'

// prettier-ignore
type PickByType<T extends Model, U> = 
  T extends unknown ? {
    [k in keyof T as T[k] extends U ? k : never]: T[k]
  } : never

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<
    Equal<
      PickByType<Model, boolean>,
      { isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>
]
