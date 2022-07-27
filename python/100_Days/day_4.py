'''
Day 4 

'''

import random

# random int 1, 10
random_integer = random.randint(1, 10)
print(random_integer)

# random float between 0-5
random_float = random.random() * 5
print(random_float)


print("=" * 15)

"""
You are going to write a virtual coin toss program. It will randomly tell the user "Heads" or "Tails".
Important, the first letter should be capitalised and spelt exactly like in the example e.g. Heads, not heads.
When you run the code, just use a random number as the seed. e.g. 67346 It doesn't matter what you chose, 
it's only for our testing code to check your work.
There are many ways of doing this. But to practice what we learnt in the last lesson, 
you should generate a random number, either 0 or 1. Then use that number to print out Heads or Tails.
e.g. 1 means Heads 0 means Tails

"""

# Remember to use the random module
# Hint: Remember to import the random module here at the top of the file. 🎲
# 🚨 Don't change the code below 👇
test_seed = int(input("Create a seed number: "))
random.seed(test_seed)
# 🚨 Don't change the code above 👆 It's only for testing your code.

# Write the rest of your code below this line 👇
coin_toss = random.randint(0, 1)
if coin_toss == 0:
    print("Tails")
else:
    print("Heads")

print("=" * 15)

"""
You are going to write a program that will select a random name from a list of names. 
The person selected will have to pay for everybody's food bill.
Important: You are not allowed to use the choice() function.
Line 8 splits the string names_string into individual names and puts them inside a List called names. 
For this to work, you must enter all the names as names followed by comma then space. e.g. name, name, name
When you run the code, just use a random number as the seed. e.g. 67346 It doesn't matter what you chose, 
it's only for our testing code to check your work.
Example Input
Angela, Ben, Jenny, Michael, Chloe
Note: notice that there is a space between the comma and the next name.
Example Output
Michael is going to buy the meal today!
"""

🚨 Don't change the code below 👇
test_seed = int(input("Create a seed number: "))
random.seed(test_seed)

# Split string method
names_string = input("Give me everybody's names, separated by a comma. ")
names = names_string.split(", ")
# 🚨 Don't change the code above 👆

# Write your code below this line

loser = random.randint(0, len(names)-1)
print(f"{names[loser]} is going to buy the meal today!")

print("=" * 15)

'''
You are going to write a program that will mark a spot with an X.
In the starting code, you will find a variable called map.
This map contains a nested list. When map is printed this is what the nested list looks like:
['⬜️', '⬜️', '⬜️'],['⬜️', '⬜️', '⬜️'],['⬜️', '⬜️', '⬜️']
In the starting code, we have used new lines (\n) to format the three rows into a square, like this:
['⬜️', '⬜️', '⬜️']
['⬜️', '⬜️', '⬜️']
['⬜️', '⬜️', '⬜️']
This is to try and simulate the coordinates on a real map.

your program must take the user input and convert it to a usable format.
Next, you need to use it to update your nested list with an "x".
Example Input 1
column 2, row 3 would be entered as:
23
Example Output 1
['⬜️', '⬜️', '⬜️']
['⬜️', '⬜️', '⬜️']
['⬜️', 'X', '⬜️']
Example Input 2
column 3, row 1 would be entered as:
31
Example Output 2
['⬜️', '⬜️', 'X']
['⬜️', '⬜️', '⬜️']
['⬜️', '⬜️', '⬜️']
e.g. When you hit run, this is what should happen:

Hint
Remember that Lists start at index 0!
map is just a variable that contains a nested list. It's not related to the map function in Python.
'''

# 🚨 Don't change the code below 👇
row1 = ["⬜️", "⬜️", "⬜️"]
row2 = ["⬜️", "⬜️", "⬜️"]
row3 = ["⬜️", "⬜️", "⬜️"]
map = [row1, row2, row3]
print(f"{row1}\n{row2}\n{row3}")
position = input("Where do you want to put the treasure? ")
# 🚨 Don't change the code above 👆

# Write your code below this row 👇
map[int(position[0])-1][int(position[1])-1] = 'x'


# Write your code above this row 👆

# 🚨 Don't change the code below 👇
print(f"{row1}\n{row2}\n{row3}")
