"""
For this challenge, you are supposed to find the sum of the digits of a two-digit number. 
Sounds easy, right? But for this challenge, I expect you to find the sum of the digits mathematically.

Sure, you can convert the number into a string and then manipulate it so it returns the sum of the digits, 
but the point of this challenge is to see if you know how to return the sum of the digits of a two-digit 
number mathematically.

Examples

two_digit_sum(45) ➞ 9

two_digit_sum(38) ➞ 11

two_digit_sum(67) ➞ 13

"""


def two_digit_sum(n):
    # While loop mathmatic solution that will work for any number of digits
    # create sum variable
    # sum = 0
    # while loop that will run until n equals 0
    # while (n != 0):
    # get the digit on the right by using modulo of 10 to get the remander
    # sum = sum + (n % 10)
    # Use floor math to get the left number and run it through the loop to add it to the sum
    # n = n // 10
    # return the sum when loop ends
    # return sum

    # for just 2 digits it could be a one line solution returning n%10 + n//10
    return (n % 10) + (n//10)
