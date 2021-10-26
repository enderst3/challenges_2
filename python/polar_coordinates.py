"""
Conver complex numbers into polar coordinates using cmath, complex and polar

Sample Input
  1+2j
Sample Output
 2.23606797749979 
 1.1071487177940904

"""

from cmath import polar

# create varible with complex number
a = complex(input())
# use polar to get coordinates and format output
print(*polar(a), sep='\n')

# could also be on one line
# print(*polar(complex(input())), sep = '\n')
