import { Equal, Expect } from '@type-challenges/utils'

interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}

type VisionMap<T> = {
  [k in keyof T]: T[k]
}

// prettier-ignore
type RequiredByKeys<T, K=never> = 
  [K] extends [never] ? Required<T> : (
      VisionMap<{
        [k in keyof T as k extends K ? k : never]-?: T[k]
      } & Omit<T, K extends keyof T ? K : never>
    >
  )

type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>
]
