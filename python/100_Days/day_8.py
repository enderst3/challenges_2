"""
Day 8
functions
"""

"""
Create a new function called greet().
Write 3 print statements inside the function.
Call greet().
"""




import math
def greet():
    print("Hello!")
    print("How are you today?")
    print("Have a good time while you are here.")


greet()

print("=" * 15)


def greet_with_name(name):
    print(f"Hello {name}!")
    print(f"How are you {name}?")
    print("Have a good time while you are here.")


greet_with_name("Jack")

print("=" * 15)

# function with more than 1 input


def greet_with(name, location):
    print(f"Hello {name}!")
    print(f"What is it like in {location}?")


greet_with("Johnny", "Alaska")

print("=" * 15)

# funciton with keyword arguments


def greet_keys(name="Johhny", location="Alaska"):
    print(f"Hello {name}!")
    print(f"What is it like in {location}?")


greet_keys()

"""
You need to write a function that checks whether if the number passed into it is a prime number or not.
e.g. 2 is a prime number because it's only divisible by 1 and 2.
But 4 is not a prime number because you can divide it by 1, 2 or 4.
"""

# Write your code below this line 👇


def prime_checker(number):
    is_prime = True
    if number <= 1:
        is_prime = False

    for i in range(2, number):
        if number % i == 0:
            is_prime = False
    if is_prime:
        print("It's a prime number.")
    else:
        print("It's not a prime number.")


# Write your code above this line 👆
# Do NOT change any of the code below👇
n = int(input("Check this number: "))
prime_checker(number=n)
