import { Equal, Expect } from '@type-challenges/utils'

// prettier-ignore
type MyCapitalize<T> =
  T extends `${infer F}${infer Rest}` ? (
    F extends 'a' ? `A${Rest}` :
    F extends 'b' ? `B${Rest}` :
    F extends 'c' ? `C${Rest}` :
    F extends 'd' ? `D${Rest}` :
    F extends 'e' ? `E${Rest}` :
    F extends 'f' ? `F${Rest}` :
    F extends 'g' ? `G${Rest}` :
    F extends 'h' ? `H${Rest}` :
    F extends 'i' ? `I${Rest}` :
    F extends 'j' ? `J${Rest}` :
    F extends 'k' ? `K${Rest}` :
    F extends 'l' ? `L${Rest}` :
    F extends 'm' ? `M${Rest}` :
    F extends 'n' ? `N${Rest}` :
    F extends 'o' ? `O${Rest}` :
    F extends 'p' ? `P${Rest}` :
    F extends 'q' ? `Q${Rest}` :
    F extends 'r' ? `R${Rest}` :
    F extends 's' ? `S${Rest}` :
    F extends 't' ? `T${Rest}` :
    F extends 'u' ? `U${Rest}` :
    F extends 'v' ? `V${Rest}` :
    F extends 'w' ? `W${Rest}` :
    F extends 'x' ? `X${Rest}` :
    F extends 'y' ? `Y${Rest}` :
    F extends 'z' ? `Z${Rest}` : T
  ) :
  T

type cases = [
  Expect<Equal<MyCapitalize<'foobar'>, 'Foobar'>>,
  Expect<Equal<MyCapitalize<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<MyCapitalize<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<MyCapitalize<''>, ''>>,
  Expect<Equal<MyCapitalize<'a'>, 'A'>>,
  Expect<Equal<MyCapitalize<'b'>, 'B'>>,
  Expect<Equal<MyCapitalize<'c'>, 'C'>>,
  Expect<Equal<MyCapitalize<'d'>, 'D'>>,
  Expect<Equal<MyCapitalize<'e'>, 'E'>>,
  Expect<Equal<MyCapitalize<'f'>, 'F'>>,
  Expect<Equal<MyCapitalize<'g'>, 'G'>>,
  Expect<Equal<MyCapitalize<'h'>, 'H'>>,
  Expect<Equal<MyCapitalize<'i'>, 'I'>>,
  Expect<Equal<MyCapitalize<'j'>, 'J'>>,
  Expect<Equal<MyCapitalize<'k'>, 'K'>>,
  Expect<Equal<MyCapitalize<'l'>, 'L'>>,
  Expect<Equal<MyCapitalize<'m'>, 'M'>>,
  Expect<Equal<MyCapitalize<'n'>, 'N'>>,
  Expect<Equal<MyCapitalize<'o'>, 'O'>>,
  Expect<Equal<MyCapitalize<'p'>, 'P'>>,
  Expect<Equal<MyCapitalize<'q'>, 'Q'>>,
  Expect<Equal<MyCapitalize<'r'>, 'R'>>,
  Expect<Equal<MyCapitalize<'s'>, 'S'>>,
  Expect<Equal<MyCapitalize<'t'>, 'T'>>,
  Expect<Equal<MyCapitalize<'u'>, 'U'>>,
  Expect<Equal<MyCapitalize<'v'>, 'V'>>,
  Expect<Equal<MyCapitalize<'w'>, 'W'>>,
  Expect<Equal<MyCapitalize<'x'>, 'X'>>,
  Expect<Equal<MyCapitalize<'y'>, 'Y'>>,
  Expect<Equal<MyCapitalize<'z'>, 'Z'>>
]
