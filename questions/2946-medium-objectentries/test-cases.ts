import { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries =
  | ['name', string]
  | ['age', number]
  | ['locations', string[] | null]

// prettier-ignore
type RemoveUndefined<T> = 
  [T] extends [undefined] ? undefined : (
    T extends undefined ? never : T
  )

type ObjectEntries<T> = keyof T extends infer K
  ? K extends unknown
    ? [K, RemoveUndefined<T[K extends keyof T ? K : never]>]
    : never
  : never

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>
]
