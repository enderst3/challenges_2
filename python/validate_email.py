"""
Output Format
Print the space-separated name and email address pairs containing valid email addresses only. 
Each pair must be printed on a new line in the following format:
name <user@email.com>
You must print each valid email address in the same order as it was received as input.

Sample Input
2  
DEXTER <dexter@hotmail.com>
VIRUS <virus!@variable.:p>

Sample Output
DEXTER <dexter@hotmail.com>

Explanation
dexter@hotmail.com is a valid email address, 
so we print the name and email address pair received as input on a new line. 
virus!@variable.:p is not a valid email address because the username contains an 
exclamation point (!) and the extension contains a colon (:). As this email is not valid, we print nothing.
"""

# import regex
import re
# for loop to go through all emails in input
for i in range(int(input())):
    # seperate the name from the email address
    x, y = input().split(' ')
    # Check to see if its a valid email using regex based on parameters
    match = re.match(r'<[A-Za-z](\w|-|\.|_)+@[A-Za-z]+\.[A-Za-z]{1,3}>', y)
    # if its valid print the name and email.
    if match:
        print(x,y)