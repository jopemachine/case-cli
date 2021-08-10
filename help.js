module.exports = `
Outline

    String case utility for converting

    Tip: 1 - Result string is copied to your clipboard automatically.
         2 - If you don't give any input, input would be your clipboard string automatically.

Usage

    To convert case,
        $ case-cli input --case=[option]

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
    random     /    Random!

Examples

    $ case-cli snake hello, world!
    > hello_world

    $ case-cli pascal hello, world!
    > HelloWorld

    $ case-cli s hello, world!
    > hello_world
`
