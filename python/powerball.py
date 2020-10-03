"""
Modify to create a powerball game

"""
import random


# ticket balls
ticket_balls_one = 0
ticket_balls_two = 0

# lotto balls
lotto_balls = 1

# number of plays
plays = 0

# while loop to pick balls and compare tickets and lotto numbers
while ticket_balls_one != lotto_balls and ticket_balls_two != lotto_balls:
    # pick ticket using random.sample()
    ticket_balls_one = sorted(random.sample(range(1, 49), 6))
    ticket_balls_two = sorted(random.sample(range(1, 49), 6))

    # pick lotto_balls using random.sample()
    lotto_balls = sorted(random.sample(range(1, 49), 6))

    if ticket_balls_one != lotto_balls and ticket_balls_two != lotto_balls:
        plays += 1
    else:
        print("It took you this many tries to win {}".format(plays))
        print("The winning numbers are: {}".format(lotto_balls))
        print("The winning ticket had these numbers: {}, {}".format(ticket_balls_one, ticket_balls_two))