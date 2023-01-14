"""
Magic trick based on card trick.

1 - Ask for a number
2 - put numbers into in 3 groups
3 - ask group #
4- make new list of numbers and put into 3 groups
5 - ask group number again
6 - make new list of numbers and put into groups
7 - guess number(the 4th number in group 2 will be the number)
8 - refactor basic code after making sure it works
"""

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
           12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

print("Chose a number between 1-21.")

group_1 = numbers[0::3]
group_2 = numbers[1::3]
group_3 = numbers[2::3]

print(f"Group 1 - {group_1}")
print(f"Group 2 - {group_2}")
print(f"Group 3 - {group_3}")

pick = input("Enter then enter the group your number is in (1, 2, 3): ")

print(pick)

if pick == "1":
    numbers = group_2 + group_1 + group_3
elif pick == "2":
    numbers = group_1 + group_2 + group_3
elif pick == "3":
    numbers = group_1 + group_3 + group_2

print(numbers)

group_1 = numbers[0::3]
group_2 = numbers[1::3]
group_3 = numbers[2::3]

print(f"Group 1 - {group_1}")
print(f"Group 2 - {group_2}")
print(f"Group 3 - {group_3}")

pick = input("Enter then enter the group your number is in (1, 2, 3): ")

print(pick)

if pick == "1":
    numbers = group_2 + group_1 + group_3
elif pick == "2":
    numbers = group_1 + group_2 + group_3
elif pick == "3":
    numbers = group_1 + group_3 + group_2

print(numbers)

group_1 = numbers[0::3]
group_2 = numbers[1::3]
group_3 = numbers[2::3]

print(f"Group 1 - {group_1}")
print(f"Group 2 - {group_2}")
print(f"Group 3 - {group_3}")

pick = input("Enter then enter the group your number is in (1, 2, 3): ")

print(pick)

if pick == "1":
    numbers = group_2 + group_1 + group_3
elif pick == "2":
    numbers = group_1 + group_2 + group_3
elif pick == "3":
    numbers = group_1 + group_3 + group_2

print(numbers)

group_1 = numbers[0::3]
group_2 = numbers[1::3]
group_3 = numbers[2::3]

print(f"Group 1 - {group_1}")
print(f"Group 2 - {group_2}")
print(f"Group 3 - {group_3}")

number_guessed = group_2[3]

print(f"The number you picked was {number_guessed}")
