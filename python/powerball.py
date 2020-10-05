"""
Modify to create a powerball game
5 balls 1-69
1 ball 1-25

"""
import random


# ticket balls
ticket_balls = 0
ticket_power_ball = 0

# lotto balls
lotto_balls = 1
power_ball = 1

# number of plays
plays = 0

# while loop to pick balls and compare tickets and lotto numbers
while ticket_balls != lotto_balls:
    # pick ticket using random.sample()
    ticket_balls= sorted(random.sample(range(1, 70), 5))
    ticket_power_ball = random.randint(1, 26)
    
    # pick lotto_balls using random.sample()
    lotto_balls = sorted(random.sample(range(1, 70), 5))
    power_ball = random.randint(1, 26)

    if ticket_balls != lotto_balls or ticket_power_ball != power_ball:
        plays += 1
    
    else:
        print("It took you this many tries to win {}".format(plays))
        print("The winning numbers are: {} {}".format(lotto_balls, power_ball))
        print("The winning ticket had these numbers: {} {}".format(ticket_balls, ticket_power_ball))