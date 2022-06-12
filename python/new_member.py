"""
Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input

Input will consist of a list of pairs. Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.

Output

Output will consist of a list of string values (in Haskell and C: Open or Senior) 
stating whether the respective member is to be placed in the senior or open category.

Example

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
"""


def open_or_senior(data):
    # Basic easy to read solution

    # # Create empty list to append to
    # output = []
    # # For loop to iterate through data list
    # for t in data:
    #     # if 55 or older but 7 or over handicap they are a senior
    #     if t[0] >= 55 and t[1] > 7:
    #             output.append('Senior')
    #     # everyone else will be in the open class
    #     else:
    #         output.append('Open')
    # print(output)
    # return output

    # List comp soulution
    return ['Senior' if (t[0] >= 55) and (t[1] > 7) else 'Open' for t in data]
