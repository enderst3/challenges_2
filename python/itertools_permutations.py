"""
You are given a string s. 
Your task is to print all possible permutations of size k of the string in lexicographic sorted order.
Input Format
A single line containing the space separated string s and the integer value k.
 
The string contains only UPPERCASE characters.
Output Format
Print the permutations of the string  on separate lines.
Sample Input
HACK 2
Sample Output
AC
AH
AK
CA
CH
CK
HA
HC
HK
KA
KC
KH
Explanation
All possible size  permutations of the string "HACK" are printed in lexicographic sorted order.

"""

# inport itertools permutations
# use permutations for string and int in input
# seperate the input
# sort the permutations alphabetically
# format output

from itertools import permutations

from itertools import permutations
# split the input into s, k
s, k = input().split()
# create permutations change k into int
out = list(permutations(s, int(k)))
# make list alphabetical, and print formatted output 
for i in sorted(out):
    print(''.join(i))
