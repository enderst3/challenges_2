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

'''
Write a program that interprets the Body Mass Index (BMI) based on a user's weight and height.
It should tell them the interpretation of their BMI based on the BMI value.
Under 18.5 they are underweight
Over 18.5 but below 25 they have a normal weight
Over 25 but below 30 they are slightly overweight
Over 30 but below 35 they are obese
Above 35 they are clinically obese.
'''

# 🚨 Don't change the code below 👇
height = float(input("enter your height in m: "))
weight = float(input("enter your weight in kg: "))
# 🚨 Don't change the code above 👆

# Write your code below this line 👇
bmi = round(weight/(height**2))
output = ''

if bmi < 18.5:
    output = ' are underweight'

elif bmi < 25:
    output = 'have a normal weight'

elif bmi < 30:
    output = 'are slightly overweight'
elif bmi < 35:
    output = 'are obese'
else:
    output = 'are clinically obese'
print(f"Your BMI is {bmi}, you {output}.")

print("=" * 15)

"""
Write a program that works out whether if a given year is a leap year. 
A normal year has 365 days, leap years have 366, with an extra day in February. 

This is how you work out whether if a particular year is a leap year.
on every year that is evenly divisible by 4 
**except** every year that is evenly divisible by 100 
**unless** the year is also evenly divisible by 400
"""

# 🚨 Don't change the code below 👇
year = int(input("Which year do you want to check? "))
# 🚨 Don't change the code above 👆

# Write your code below this line 👇

if year % 4 == 0:
    if year % 100 == 0:
        if year % 400 == 0:
            print('Leap year.')
        else:
            print('Not leap year.')
    else:
        print('Leap year.')
else:
    print('Not leap year.')


print("=" * 15)

"""
Congratulations, you've got a job at Python Pizza. 
Your first job is to build an automatic pizza order program.
Based on a user's order, work out their final bill.
Small Pizza: $15
Medium Pizza: $20
Large Pizza: $25
Pepperoni for Small Pizza: +$2
Pepperoni for Medium or Large Pizza: +$3
Extra cheese for any size pizza: + $1
Example Input
size = "L"
add_pepperoni = "Y"
extra_cheese = "N"
Example Output
Your final bill is: $28.
"""

# 🚨 Don't change the code below 👇
print("Welcome to Python Pizza Deliveries!")
size = input("What size pizza do you want? S, M, or L ")
add_pepperoni = input("Do you want pepperoni? Y or N ")
extra_cheese = input("Do you want extra cheese? Y or N ")
# 🚨 Don't change the code above 👆

# Write your code below this line 👇
price = 0

if size == "S":
    price += 15
elif size == 'M':
    price += 20
else:
    price += 25

if add_pepperoni == "Y":
    if size == "S":
        price += 2
    else:
        price += 3
if extra_cheese == 'Y':
    price += 1

print(f"Your final bill is: ${price}")

print("=" * 15)

"""
You are going to write a program that tests the compatibility between two people.
To work out the love score between two people:
Take both people's names and check for the number of times the letters in the word TRUE occurs. 
Then check for the number of times the letters in the word LOVE occurs. 
Then combine these numbers to make a 2 digit number.
For Love Scores less than 10 or greater than 90, the message should be:
"Your score is **x**, you go together like coke and mentos."
For Love Scores between 40 and 50, the message should be:
"Your score is **y**, you are alright together."
Otherwise, the message will just be their score. e.g.:
"Your score is **z**."
e.g.
name1 = "Angela Yu"
name2 = "Jack Bauer"
T occurs 0 times
R occurs 1 time
U occurs 2 times
E occurs 2 times
Total = 5
L occurs 1 time
O occurs 0 times
V occurs 0 times
E occurs 2 times
Total = 3
Love Score = 53
Print: "Your score is 53."
"""

# 🚨 Don't change the code below 👇
print("Welcome to the Love Calculator!")
name1 = input("What is your name? \n")
name2 = input("What is their name? \n")
# 🚨 Don't change the code above 👆

# Write your code below this line 👇
true = ['t', 'r', 'u', 'e']
love = ['l', 'o', 'v', 'e']

t_count = 0
l_count = 0

for c in name1.lower()+name2.lower():
    if c in true:
        t_count += 1
    if c in love:
        l_count += 1

total = (t_count*10)+l_count

if total < 10 or total > 90:
    print(f"Your score is {total}, you go together like coke and mentos.")
elif total >= 40 and total <= 50:
    print(f"Your score is {total}, you are alright together.")
else:
    print(f"Your score is {total}.")
