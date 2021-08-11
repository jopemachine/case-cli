# Case-cli [![Build Status](https://travis-ci.com/jopemachine/case-cli.svg?branch=main)](https://travis-ci.com/jopemachine/case-cli)

[![NPM download total](https://img.shields.io/npm/dt/case-cli)](http://badge.fury.io/js/case-cli)

> Cli wrapper for [Case](https://github.com/nbubna/Case)

## Usage

```
    Outline

        String case utility for converting

        Tip: 1 - Result string is copied to your clipboard automatically.
             2 - If you don't give any input, input would be your clipboard string automatically.
             (This feature not works in headless environment.)

    Usage

        To convert case,
            $ case-cli input --case=[option]

        To set default case,
            $ case-cli set [option]

    Possible options

        upper      u     /    STRING CASE UTILITY FOR CONVERTING
        lower      l     /    string case utility for converting
        snake      s     /    string_case_utility_for_converting
        kebab      k     /    string-case-utility-for-converting
        header     h     /    String-Case-Utility-For-Converting
        camel      c     /    stringCaseUtilityForConverting
        pascal     p     /    StringCaseUtilityForConverting
        title      t     /    String Case Utility for Converting
        random     r     /    Random!
        constant         /    STRING_CASE_UTILITY_FOR_CONVERTING
        sentence         /    String case utility for converting

    Examples

        case-cli hello, world! --case=snake
        > hello_world

        case-cli --case=pascal hello, world!
        > HelloWorld

        case-cli -c=snake hello, world!
        > hello_world

        case-cli -c=s hello, world!
        > hello_world
```

The first argument is `option`, and the remaining strings are recognized as one string value.

> **Tip: result string is copied to your clipboard automatically.**

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
