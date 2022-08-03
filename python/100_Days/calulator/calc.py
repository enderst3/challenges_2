"""
Create a calulator
"""

from art import logo


def add(a, b):
    return a + b


def subtract(a, b):
    return a - b


def multiply(a, b):
    return a * b


def divide(a, b):
    return(a, b)


a = int(input("Enter your first number: \n"))
math_option = input("Chose what math you want to do: \n + \n - \n * \n / \n")
b = int(input("Now enter your second numer: \n"))

if math_option == "+":
    print(add(a, b))
elif math_option == "-":
    print(subtract(a, b))
elif math_option == "*":
    print(multiply(a, b))
elif math_option == "/":
    print(divide(a, b))
else:
    print("Error.  Invalid operator.")
