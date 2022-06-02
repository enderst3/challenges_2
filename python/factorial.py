"""
First Factorial

Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. 
For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, 
the range will be between 1 and 18 and the input will always be an integer.
Examples

Input: 4 
Output: 24
Input: 8 
Output: 40320
"""
import math


def FirstFactorial(num):

    # math.factorial answer
    # return math.factorial(num)

    # for loop answer
    product = 1
    for i in range(1, num+1):
        product = product*i

    return product
