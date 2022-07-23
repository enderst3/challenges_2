"""
Day 2

Write a program that adds the digits in a 2 digit number. e.g. if the input was 35, 
then the output should be 3 + 5 = 8

Warning. Do not change the code on lines 1-3. Your program should work for different inputs. 
e.g. any two-digit number.

Example Input

39
Example Output

3 + 9 = 12

12
"""
# 🚨 Don't change the code below 👇
two_digit_number = input("Type a two digit number: ")
# 🚨 Don't change the code above 👆

####################################
# Write your code below this line 👇

result = int(two_digit_number[0])+int(two_digit_number[1])

print(result)

print("=" * 15)

'''
Write a program that calculates the Body Mass Index (BMI) from a user's weight and height.
The BMI is a measure of some's weight taking into account their height. 
e.g. If a tall person and a short person both weigh the same amount, 
the short person is usually more overweight.
The BMI is calculated by dividing a person's weight (in kg) 
by the square of their height (in m):
'''

# 🚨 Don't change the code below 👇
height = input("enter your height in m: ")
weight = input("enter your weight in kg: ")
# 🚨 Don't change the code above 👆

# Write your code below this line 👇

h = float(height) ** 2
w = int(weight)
print(round(w/h))


print("=" * 15)

"""
Create a program using maths and f-Strings that tells us how many days, weeks, 
months we have left if we live until 90 years old.
It will take your current age as the input and output a message with our time left in this format:
You have x days, y weeks, and z months left.
Where x, y and z are replaced with the actual calculated numbers.
Warning your output should match the Example Output format exactly, 
even the positions of the commas and full stops.
Example Input
56
Example Output
You have 12410 days, 1768 weeks, and 408 months left.

"""

left = 90 - int(age)
months = left * 12
weeks = left * 52
days = left * 365

print(f"You have {days} days, {weeks} weeks, and {months} months left.")
