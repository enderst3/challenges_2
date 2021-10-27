'''
Handle exceptions with trying to divide 1 inputs, zero, and value error

Sample Input
3
1 0
2 $
3 1

Sample Output
Error Code: integer division or modulo by zero
Error Code: invalid literal for int() with base 10: '$'
3

'''

# Use for loop to loop through input
for i in range(int(input())):
    # assign varibales to split input
    a, b = input().split()
    # try except printing a floor divided by b as ints
    try:
        print(int(a)//int(b))
    # raise expception for any error
    except Exception as e:
        print("Error Code:", e)
    