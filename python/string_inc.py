"""
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

"""


def increment_string(strng):
    # Seperate the ints from the letters
    # Use rstrip() to remover all numbers from the string
    alpha = strng.rstrip('0123456789')
    # Get the numbers by splicing the string using the len of the letters
    nums = strng[len(alpha):]
    # if no numbers in string add 1
    if len(nums) == 0:
        return strng + '1'
    else:
        # make new variable equal to 1 plus the numbers
        new_nums = 1 + int(nums)
        # Use zfill() to add zeros to the right of the numbers if needed
        new_nums = str(new_nums).zfill(len(nums))

        return alpha + new_nums
