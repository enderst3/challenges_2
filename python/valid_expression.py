"""
Take a string and determine if it is a valed expression using regex, and try except

The input will come with an int to say how many expressions, and the expressions
"""

# import regex
import re

# create a for loop to loop through the number of expressions in the input
for i in range(int(input())):
    # try except to handle exeptions
    try:
        # re.compile to see if expression is valid or not.  Then print true or flase
        re.compile(input())
        print(True)
    except:
        print(False)
