"""
Given two arrays of strings a1 and a2 return a sorted array r, 
in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:

Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.

"""


def in_array(array1, array2):
    # create and empty set for the results of the loops
    yes = set()
    # nested loops with conditional to check if a in b then add to set if it is
    for a in array1:
        for b in array2:
            if a in b:
                yes.add(a)
    # return a sorted dict
    return sorted(yes)

    # Single line comprehension solution using any()
    # return sorted(set(s1 for s1 in a1 if any(s1 in s2 for s2 in a2)))
