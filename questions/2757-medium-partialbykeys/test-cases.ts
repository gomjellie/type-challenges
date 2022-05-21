import { Equal, Expect } from '@type-challenges/utils'

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}

type VisionMap<T> = T extends unknown
  ? {
      [k in keyof T]: T[k]
    }
  : never

// prettier-ignore
type PartialByKeys<T, K=never> = 
  [K] extends [never] ? Partial<T> : 
  VisionMap<{
    [k in keyof T as k extends K ? k : never]+?: T[k]
  } & Omit<T, K extends keyof T ? K : never>>

type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>
]
