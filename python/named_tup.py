'''
Namedtuples are easy to create, lightweight object types. 
They turn tuples into convenient containers for simple tasks. 
With namedtuples, you don’t have to use integer indices for accessing members of a tuple.


Sample Input
TESTCASE 01
5
ID         MARKS      NAME       CLASS     
1          97         Raymond    7         
2          50         Steven     4         
3          91         Adrian     9         
4          72         Stewart    5         
5          80         Peter      6   
TESTCASE 02
5
MARKS      CLASS      NAME       ID        
92         2          Calum      1         
82         5          Scott      2         
94         2          Jason      3         
55         8          Glenn      4         
82         2          Fergus     5
Sample Output
TESTCASE 01
78.00
TESTCASE 02
81.00

'''

from collections import namedtuple

n = int(input())
a = input()
total = 0
Student = namedtuple('Student', a)
for i in range(n):
    student = Student(*input().split())
    total += int(student.MARKS)
print('{:.2f}'.format(total/n))