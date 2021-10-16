"""
Consider the following:
A string, , of length  where .
An integer, , where  is a factor of .
We can split  into  substrings where each subtring, , consists of a contiguous block of  characters in . 
Then, use each to create string  such that:
The characters in  are a subsequence of the characters in .
Any repeat occurrence of a character is removed from the string such that each character in  occurs exactly once. 
In other words, if the character at some index  in  occurs at a previous index  in , 
then do not include the character in string .
Given  and , print  lines where each line  denotes string .

Sample Input
STDIN       Function
-----       --------
AABCAAADA   s = 'AABCAAADA'
3           k = 3
Sample Output
AB
CA
AD

"""

# divide string len by k and seperate into k length substring lists
# remove duplicates from substrings
# format output

def merge_the_tools(string, k):
    # create empty string to fill with output from loop
    answer = ''
    for i in range(0,len(string),+k):
        sub_s = string[i:i+k]
        # the line below would work and be faster but the format is wrong for the problem
        # print(*sorted(set(sub_s),key=sub_s.index))
        # use set() to remove duplicates and make a list of each set by index number using sorted()
        output = sorted(set(sub_s),key=sub_s.index)
        # format the answer using .join() and creating new lines using '\n'
        answer += ''.join(output)+'\n'

    print(answer)