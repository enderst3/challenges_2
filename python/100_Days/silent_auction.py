import os
from auction_art import logo
# HINT: You can call clear() to clear the output in the console.

print(logo)
auction_bids = {}
winning_bid = 0
more_bids = True

while more_bids:
    name = input("What is your name?\n")
    bid = int(input("How much would you like to bid?\n$"))

    auction_bids[name] = bid

    another_bid = input("Is there another person that wants to bid? (y/n) \n")

    if another_bid == "n":
        more_bids = False
        for bid in auction_bids:
            bid_amount = auction_bids[bid]
            if bid_amount > winning_bid:
                winning_bid = bid_amount
    else:
        os.system("clear")
for name, bid in auction_bids.items():
    if bid == winning_bid:
        print(f"{name} won with the winning bid of ${bid}!!")
