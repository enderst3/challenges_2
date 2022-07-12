"""
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).

Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"""

import re

# This way is is not elegent and redundent, but it gets the job done, and I was trying to avoid a loop.


def to_camel_case(text):
    print(text)
    if text == '':
        return ''

    if text[0].isupper():
        return ''.join(re.split('_|-', text.title()))
    else:
        new = re.split('-|_', text.title())
        new[0] = new[0].lower()
        print(new)
        return ''.join(new)

# This is a much better looking solution, but may be slower because of the loop


def to_camel_case(text):
    if text:
        new_text = re.split('-|_', text)
        return new_text[0] + ''.join([word.title() for word in new_text[1:]])
    else:
        return text

# Solution without a loop


def to_camel_case(text):
    if text:
        return text[0] + text.title()[1:].replace('_', '').replace('-', '')
    return text
