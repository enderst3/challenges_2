"""
Create a function that takes two numbers and a mathematical operator + - / * 
and will perform a calculation with the given numbers.

Examples

calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes

If the input tries to divide by 0, return: "Can't divide by 0!"
"""


def calculator(num1, operator, num2):
    # Basic easy to understand solution using if statements
    # if operator == "/" and num2 == 0:
    # 	return "Can't divide by 0!"
    # if operator == '-':
    # 	return num1 - num2
    # if operator == '+':
    # 	return num1 + num2
    # if operator == '*':
    # 	return num1 * num2
    # return num1 / num2

    # Solution using eval() so a string can be evaluated as python code for the operator variable
    # the ints need to be turned into strings for eval
    # if operator == '/' and num2 == 0:
    #     return "Can't divide by 0!"
    # return eval(str(num1)+operator+str(num2))

    # Try except soulution using eval() and ZeroDivisionError
    try:
        return eval(str(num1)+operator+str(num2))
    except ZeroDivisionError:
        return "Can't divide by 0!"
