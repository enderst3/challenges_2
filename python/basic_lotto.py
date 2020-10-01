"""
Create a function that plays quick pick Oregon Megabucks lotto and keeps count.

6 balls numbered 1 - 48

"""
import random


# ticket balls
ticket_balls = 0

# lotto balls
lotto_balls = 1

# number of plays
plays = 0

# while loop to pick balls and compare tickets and lotto numbers
while ticket_balls != lotto_balls:
    # pick ticket using random.sample()
    ticket_balls = sorted(random.sample(range(1, 49), 5))

    # pick lotto_balls using random.sample()
    lotto_balls = sorted(random.sample(range(1, 49), 5))

    if ticket_balls != lotto_balls:
        plays += 1
    else:
        print("It took you this many tries to win {}".format(plays))




