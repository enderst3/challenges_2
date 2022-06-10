"""
Create a function that takes a string and returns the number (count) of vowels contained within it.

Examples

count_vowels("Celebration") ➞ 5

count_vowels("Palm") ➞ 1

count_vowels("Prediction") ➞ 4
Notes

a, e, i, o, u are considered vowels (not y).
All test cases are one word and only contain letters.
"""

import re


def count_vowels(txt):
    # regex soulution
    return len(re.findall(r'[aeiouAEIOU]', txt))

    # simple counter loop
    # vowels = 'aeiouAEIOU'
    # count = 0
    # for i in txt:
    # 	if i in vowels:
    # 		count += 1
    # return count

    # list comp solution, returning sum of a list
    # vowels = 'aeiouAEIOU'
    # return sum([c in vowels for c in txt])
