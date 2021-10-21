'''
You are given a string .s Suppose a character 'c' occurs consecutively x times in the string. 
Replace these consecutive occurrences of the character 'c' with (x, c) in the string.
For a better understanding of the problem, check the explanation.
Input Format
A single line of input consisting of the string .
Output Format
A single line of output consisting of the modified string.

Sample Input
1222311
Sample Output
(1, 1) (3, 2) (1, 3) (2, 1)

'''

from itertools import groupby

# take input and use groupby to get the group object
s = input()
new = groupby(s)
# loop through the key and value of the object and find how many of each int there is
# format output to match the tuples needed
for k, v in new:
    print((len(list(v)), int(k)), end=" ")