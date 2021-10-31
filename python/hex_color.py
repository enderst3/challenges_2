'''
Find the hex color codes in the css code.

Output Format
Output the color codes with '#' symbols on separate lines.
Sample Input
11
#BED
{
    color: #FfFdF8; background-color:#aef;
    font-size: 123px;
    background: -webkit-linear-gradient(top, #f9f9f9, #fff);
}
#Cab
{
    background-color: #ABC;
    border: 2px dashed #fff;
}   

Sample Output
#FfFdF8
#aef
#f9f9f9
#fff
#ABC
#fff
Explanation

#BED and #Cab satisfy the Hex Color Code criteria, 
# but they are used as selectors and not as color codes in the given CSS. 
Hence, the valid color codes are:
#FfFdF8
#aef
#f9f9f9
#fff
#ABC
#fff
'''

import re

# define the pattern for the hexcode we are looking for
hex_code = r'(#[0-9a-fA-F]{3,6}){1,2}[^\n ]'
# Loop through inputs and find pattern then print
for i in range(int(input())):
    for x in re.findall(hex_code,input()):
        print(x)