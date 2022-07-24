print('''
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     `"=.|                  |
|___________________|__"=._o`"-._        `"=.______________|___________________
          |                `"=._o`"=._      _`"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
          |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
 _________|___________| ;`-.o`"=._; ." ` '`."\` . "-._ /_______________|_______
|                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
|___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/_____ /
*******************************************************************************
''')
print("Welcome to Treasure Island.")
print("Your mission is to find the treasure.")

d_1 = input("Would you like to go left or right? (l/r): ").lower()
if d_1 == 'r':
    print('You turn right and take 3 steps before falling into a hole.  Game over.')
else:
    print("You go to your left and you come across fast moving water.")
    print("You can either cross now, our keep walking to find a better place to cross.")

    d_2 = input("Do you want to cross now? (y/n): ").lower()
    if d_2 == 'y':
        print("The water is moving too fast.  You are pulled under and drown.  Game over.")
    else:
        print("You walk down river and come across a cabin.")

        d_3 = input("Do you want to enter the cabin? (y/n): ").lower()
        if d_3 == 'n':
            print('A bear comes out of the trees and mauls you to death.  Game over.')
        else:
            print("You enter the cabin, and you are in a small room with 3 doors.")
            d_4 = input("Do you want to enter door 1, 2 or 3? ")
            if d_4 == "2":
                print(
                    "You open the door and find a huge treasure.  Congratulations!  You Win!!")
            else:
                print(
                    "As you place your hand on the door handle to open the door you are bitten by a snake and die.  Game over.")
