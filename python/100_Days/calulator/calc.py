"""
Create a calulator
"""

from art import logo

# Add


def add(n1, n2):
    return n1 + n2

# Subtract


def subtract(n1, n2):
    return n1 - n2

# Multiply


def multiply(n1, n2):
    return n1 * n2

# Divide


def divide(n1, n2):
    return(n1, n2)


# n1 = int(input("Enter your first number: \n"))
# math_option = input("Chose what math you want to do: \n + \n - \n * \n / \n")
# n2 = int(input("Now enter your second numer: \n"))

# if math_option == "+":
#     print(add(n1, n2))
# elif math_option == "-":
#     print(subtract(n1, n2))
# elif math_option == "*":
#     print(multiply(n1, n2))
# elif math_option == "/":
#     print(divide(n1, n2))
# else:
#     print("Error.  Invalid operator.")

"""
Class version of calculator
"""

operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
}


def calculator():
    print(logo)
    num1 = float(input("Enter your first number: \n"))
    for symbol in operations:
        print(symbol)
    should_continue = True

    while should_continue:

        operation_symbol = input("Pick an operation: ")
        num2 = float(input("What's the next number?: \n"))
        calculaiton_function = operations[operation_symbol]
        answer = calculaiton_function(num1, num2)

        print(f"{num1} {operation_symbol} {num2} = {answer}")

        if input(f"Type 'y' to continue calculating with {answer}, or type 'n' to start a new calculation: ") == 'y':
            num1 = answer
        else:
            should_continue = False
            calculator()


calculator()
