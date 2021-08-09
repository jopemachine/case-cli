# Case-cli [![Build Status](https://travis-ci.com/jopemachine/case-cli.svg?branch=main)](https://travis-ci.com/jopemachine/case-cli)

[![NPM download total](https://img.shields.io/npm/dt/case-cli)](http://badge.fury.io/js/case-cli)

> cli wrapper for [Case](https://github.com/nbubna/Case)

## Usage

```
    Outline

        String case utility for converting
        Tip: result string is copied to your clipboard automatically

    Usage

        To convert case,
            $ case-cli [option] input

        To set default case,
            $ case-cli set [option]

    Possible options

        upper      /    STRING CASE UTILITY FOR CONVERTING
        lower      /    string case utility for converting
        snake      /    string_case_utility_for_converting
        kebab      /    string-case-utility-for-converting
        header     /    String-Case-Utility-For-Converting
        camel      /    stringCaseUtilityForConverting
        constant   /    STRING_CASE_UTILITY_FOR_CONVERTING
        pascal     /    StringCaseUtilityForConverting
        title      /    String Case Utility for Converting
        sentence   /    String case utility for converting
        random     /    random!

    Examples

        case-cli snake hello, world!
        > hello_world

        case-cli pascal hello, world!
        > HelloWorld

        case-cli s hello, world!
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
