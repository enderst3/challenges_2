"""
Task
You are given a string s. 
Your task is to print all possible combinations, up to size k,
of the string in lexicographic sorted order.

Input Format
A single line containing the string  and integer value  separated by a space.

The string contains only UPPERCASE characters.
Output Format
Print the different combinations of string  on separate lines.
Sample Input
HACK 2
Sample Output
A
C
H
K
AC
AH
AK
CH
CK
HK

"""

# import combinations
# split input and convert k to int
# get combinations for k indicies
# format output to match answers

from itertools import combinations

# split input
s, k = input().split(' ')
# loop through indexes 1 - k, including k
for i in range(1, int(k)+1):
    # loop through indexes create sorted combinations then print to the format needed
    for combo in combinations(sorted(s), i):
        print(''.join(combo))