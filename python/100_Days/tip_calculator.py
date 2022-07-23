"""
Welcome to the tip calculator!
What was the total bill? $124.56
How much tip would you like to give? 10, 12, or 15? 12
How many people to split the bill? 7

Each person should pay: $19.93
"""

# If the bill was $150.00, split between 5 people, with 12% tip.

# Each person should pay (150.00 / 5) * 1.12 = 33.6
# Format the result to 2 decimal places = 33.60

# Tip: There are 2 ways to round a number. You might have to do some Googling to solve this.💪

# Write your code below this line 👇

bill = float(input("What was the total bill? "))
tip = int(input("What would you like to tip? 10, 12, or 15? "))
split = int(input("How many people are splitting the bill? "))
bill_plus_tip = (tip / 100 * bill) + bill
bill_per_person = bill_plus_tip/split
# format result to add 0 if the result has one or zero digits after decimal
result = "{:.2f}".format(bill_per_person)

print(f"Each person should pay: ${result}")
