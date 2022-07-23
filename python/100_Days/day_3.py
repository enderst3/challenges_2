"""
Day 3

Write a program that works out whether if a given number is an odd or even number.
Even numbers can be divided by 2 with no remainder.
e.g. 86 is even because 86 ÷ 2 = 43
43 does not have any decimal places. Therefore the division is clean.
e.g. 59 is odd because 59 ÷ 2 = 29.5
29.5 is not a whole number, it has decimal places. Therefore there is a remainder of 0.5, 
so the division is not clean.
The modulo is written as a percentage sign (%) in Python. 
It gives you the remainder after a division.
e.g.
6 ÷ 2 = 3 with no remainder.
therefore: 6 % 2 = 0
5 ÷ 2 = 2 x 2 + 1, remainder is 1.
therefore: 5 % 2 = 1
14 ÷ 4 = 3 x 4 + 2, remainder is 2.
therefore: 14 % 4 = 2
Warning your output should match the Example Output format exactly, 
even the positions of the commas and full stops.
Example Input 1
43
Example Output 1
This is an odd number.
Example Input 2
94
Example Output 2
This is an even number.
"""

if number % 2 != 0:
    print("This is an odd number")
else:
    print("This is an even number")


print("=" * 15)

'''
Check Height
'''

print("Welcome to the rollercoaster!")
height = int(input("What is your height in inches? "))

if height >= 48:
    print("You can ride the rollercoaster!")
else:
    print("Sorry you need to grow a taller before you can ride this ride.")

print("=" * 15)

# 🚨 Don't change the code below 👇
height = float(input("enter your height in m: "))
weight = float(input("enter your weight in kg: "))
# 🚨 Don't change the code above 👆

# Write your code below this line 👇
bmi = round(weight/(height**2))
output = ''
if bmi < 35:
    if bmi <= 18.5:
        output = ' are underweight'

    elif bmi < 25:
        output = 'have a normal weight'

    elif bmi < 30:
        output = 'are slightly overweight'
    else:
        output = 'are obese'
else:
    output = 'are clinically obese'
print(f"Your BMI is {bmi}, you {output}.")
