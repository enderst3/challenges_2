"""
Task
You are given a string s. 
Your task is to print all possible size k replacement combinations of the string in lexicographic sorted order.

Input Format
A single line containing the string s and integer value k separated by a space.

The string contains only UPPERCASE characters.
Output Format
Print the combinations with their replacements of string s on separate lines.
Sample Input
HACK 2
Sample Output
AA
AC
AH
AK
CC
CH
CK
HH
HK
KK
"""

from itertools import combinations_with_replacement

# seperate input into s, k
s, k = input().split()
# for loop to create combinations of sorted s, and int(k)
for i in combinations_with_replacement(sorted(s), int(k)):
    # print and format
    print(''.join(i))