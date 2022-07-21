"""
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
The function should return true if the string is valid, and false if it's invalid.

Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints

0 <= input.length <= 100

Along with opening (() and closing ()) parenthesis, input may contain any valid ASCII characters. 
Furthermore, the input string may be empty and/or not contain any parentheses at all. 
Do not treat other forms of brackets as parentheses (e.g. [], {}, <>).

"""


def valid_parentheses(string):
    # Set full par to 0
    full_par = 0
    # Loop through string to find par.  Add for opening and subtract for closing.
    # Adding the the final if will catch if the last par is '('
    for c in string:
        if c == '(':
            full_par += 1
        elif c == ')':
            full_par -= 1
            if full_par < 0:
                return False
    return full_par == 0

    # could also use regex compile() to test if there is an error compliling the string.
    # if there is an error return false
    # import re

    # def valid_parentheses(s):
    #     try:
    #         re.compile(s)
    #     except:
    #         return False
    #     return True
