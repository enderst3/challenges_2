import random
from art import logo

print(logo)
# set variables.
attempts = 0
random_number = random.randint(1, 100)

# Intro to game, getting random number, and input for difficulty level
print("Welcome to the Number Guessing Game!")
print("I'm thinking of a number between 1 and 100.")
print(f"The correct number is {random_number}")
difficulty = input("Choose a difficulty.  Type 'easy' or 'hard': ")

# if statement to set attempt
if difficulty == 'hard':
    attempts = 5
else:
    attempts = 10

# While loop will run until attempts is 0
while attempts != 0:
    print(f"You have {attempts} attempts remaining to guess the number.")
    guess = int(input("Make a guess: "))
    # If statment to check guess and respond
    if guess < random_number:
        print("Too Low. \nGuess again")
        attempts -= 1
    elif guess > random_number:
        print("Too High. \nGuess again.")
        attempts -= 1
    else:
        print("You Win!")
        attempts = 0
