"""
create list from input
map through input to create ints
use product create caresian products from intput lists
use * to unpack list
"""

from itertools import product

# Create lists a, b for ints from cleaned input
a = list(map(int, input().split()))
b = list(map(int, input().split()))

# Print output using * to exctract from the list.
print(*product(a, b))
