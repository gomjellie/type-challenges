import { Equal, Expect } from '@type-challenges/utils'

type MyReadonly<T> = {
  +readonly [t in keyof T]: T[t]
}

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
