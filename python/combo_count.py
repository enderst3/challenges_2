"""
count the number of combinations that contain "a" is in, then determine the probability.


"""

from itertools import combinations

# seperate the imputs
n = input()
s = input()
k = input()

# create combinations using s, and k
combos = list(combinations(s.split(), int(k)))
# Use count to keep track of how many times "a" is in the combos
count = 0
# for loop to go through the combos and count 'a'
for i in combos:
    if "a" in i:
        count += 1

# do the math to the 3rd decimal and print probability
print(round(count/len(combos), 3))
