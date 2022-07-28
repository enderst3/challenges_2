import random
from re import U

"""
Make a rock, paper, scissors game. 

Inside the `main.py` file, 
you'll find the ASCII art for the hand signals already saved to a corresponding variable: 
`rock`, `paper`, and `scissors`. This will make it easy to print them out to the console. 

Start the game by asking the player:

*"What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors."*

From there you will need to figure out: 
* How you will store the user's input.
* How you will generate a random choice for the computer.
* How you will compare the user's and the computer's choice to determine the winner (or a draw).
* And also how you will give feedback to the player. 

You can find the "official" rules of the game on [
    the World Rock Paper Scissors Association website.]
    (https://wrpsa.com/the-official-rules-of-rock-paper-scissors/)

"""


rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

# Write your code below this line 👇

print("Welcome to Rock, Paper, Scissors!")
print("Do you think have what it takes to be the computer?")

user_choice = int(input(
    "What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors.\n"))

choices = [rock, paper, scissors]


win = "Congratulaitons you won!!!"
tie = "You tied!"
lose = "Sorry you are a loser!  You didn't have what it takes to beat the computer!"

# print(f"You Chose: \n {choices[int(user_choice)]}")
# print(f"The computer chose: \n {computer_choice}")

# if user_choice == '0':
#     if computer_choice == choices[2]:
#         print(win)
#     elif computer_choice == choices[0]:
#         print(tie)
#     else:
#         print(lose)
# elif user_choice == '1':
#     if computer_choice == choices[0]:
#         print(win)
#     elif computer_choice == choices[1]:
#         print(tie)
#     else:
#         print(lose)
# elif user_choice == '2':
#     if computer_choice == choices[1]:
#         print(win)
#     elif computer_choice == choices[2]:
#         print(tie)
#     else:
#         print(lose)

# this logic is better and less cumbersom
if user_choice >= 3 or user_choice < 0:
    print("You chose an invalid number, you lose!")
else:
    print(f"You Chose: \n {choices[user_choice]}")
    computer_choice = random.randint(0, 2)
    print(f"The computer chose: \n {choices[computer_choice]}")

    if user_choice == 0 and computer_choice == 2:
        print(win)
    elif computer_choice == 0 and user_choice == 2:
        print(lose)
    elif computer_choice > user_choice:
        print(lose)
    elif user_choice > computer_choice:
        print(win)
    elif computer_choice == user_choice:
        print(tie)
