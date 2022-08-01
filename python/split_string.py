"""
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character,
 of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
"""


def solution(s):
    # get len of s, add _ if odd
    s + '_' if len(s) % 2 != 0:
        # list comp that takes the even index and returns that index plus the next index
    return [s[i]+s[i+1] for i, c in enumerate(s) if i % 2 == 0]
