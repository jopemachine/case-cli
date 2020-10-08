## Case-cli

cli wrapper for [Case](https://github.com/nbubna/Case) 

## Usage

```
    Outline

        String case utility for converting

    Usage

        case-cli [option] input
    
    Examples

        case-cli snake hello, world!
        >> hello_world

        case-cli pascal hello, world!
        >> HelloWorld

        case-cli s hello, world!
        >> hello_world
```

The first argument is `option`, and the remaining strings are recognized as one string value.

## Options

```console
case-cli snake 'Foo bar!'   -> 'foo_bar'
case-cli pascal 'foo.bar'   -> 'FooBar'
case-cli camel 'foo, bar'     -> 'fooBar'
case-cli kebab 'Foo? Bar.'    -> 'foo-bar'
case-cli header 'fooBar='     -> 'Foo-Bar'
case-cli constant 'Foo-Bar'   -> 'FOO_BAR'
case-cli upper 'foo_bar'       -> 'FOO BAR'
case-cli lower 'fooBar'        -> 'foo bar'
case-cli capital 'foo_v_bar'   -> 'Foo V Bar'
case-cli title 'foo v. bar'                      -> 'Foo v. Bar'
case-cli sentence '"foo!" said bar', ['Bar']     -> '"Foo!" said Bar'
case-cli sentence 'the 12 oz. can', null, ['oz']     -> 'The 12 oz. can'
```
