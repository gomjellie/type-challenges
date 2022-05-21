import { Equal, Expect } from '@type-challenges/utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

// prettier-ignore
type Mutable<T> = {
  -readonly [k in keyof T]: T[k]
}

type cases = [Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>]
