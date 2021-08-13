import test from 'ava'
import caseConvert from '../caseConvert.js'

test("snake case", (t) => {
  t.is(caseConvert("snake", ["hello,", "world!"]), "hello_world")
})

test("pascal case", (t) => {
  t.is(caseConvert("pascal", ["hello,", "world!"]), "HelloWorld")
})

test("constant case", (t) => {
  t.is(caseConvert("constant", ["hello,", "world!"]), "HELLO_WORLD")
})

test("kebab case", (t) => {
  t.is(caseConvert("kebab", ["hello,", "world!"]), "hello-world")
})

test("upper case", (t) => {
  t.is(caseConvert("upper", ["hello,", "world!"]), "HELLO, WORLD!")
})

test("lower case", (t) => {
  t.is(caseConvert("lower", ["hello,", "world!"]), "hello, world!")
})