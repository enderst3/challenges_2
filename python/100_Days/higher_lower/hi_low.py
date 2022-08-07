import random
import os
from art import logo, vs
from game_data import data

print(logo)

# os.system('clear')
# pick random account


def get_random_account():
    return random.choice(data)

# format account


def format_data(account):
    name = account["name"]
    description = account["description"]
    country = account["country"]
    followers = account['follower_count']
    return f"{name}, a {description}, from {country} \n{followers}"

# check answers


account_a = get_random_account()
print(format_data(account_a))
print(vs)
account_b = get_random_account()
print(format_data(account_b))
# put everything in a function
# display logo
# get 2 random items from data
# ask user to pick
# compare the two to see if user is right
# if right the person guessed stays and display a new one
# keep score
