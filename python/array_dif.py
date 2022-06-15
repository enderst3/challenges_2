"""
Implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]

"""


def array_diff(a, b):
    # list comp that creates a new list for items in a that are not in b
    print([i for i in a if i not in b])
    return [i for i in a if i not in b]
