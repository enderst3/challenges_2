"""
A newly opened multinational brand has decided to base their company logo on the three most common characters 
in the company name. They are now trying out various combinations of company names and logos based on this condition. 
Given a string , which is the company name in lowercase letters, 
your task is to find the top three most common characters in the string.
Print the three most common characters along with their occurrence count.
Sort in descending order of occurrence count.
If the occurrence count is the same, sort the characters in alphabetical order.


"""
# Use colletion counter most_common()
# need to know the count of each char in string
# must be alphabetical
# use unpack operator *

from collections import Counter

# sort the input alphabetically
a = sorted(input())
# Use counter and most_common(0) to count each letter and grab the 3 most common
b = Counter(a).most_common(3)
# unpack each item so it matches the output using a for loop and the unpack operator
for i in b:
    print(*i)
