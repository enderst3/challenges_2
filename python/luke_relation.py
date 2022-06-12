"""
Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

Person	Relation
Darth Vader	father
Leia	sister
Han	brother in law
R2D2	droid
Examples

relation_to_luke("Darth Vader") ➞ "Luke, I am your father."

relation_to_luke("Leia") ➞ "Luke, I am your sister."

relation_to_luke("Han") ➞ "Luke, I am your brother in law."

"""


def relation_to_luke(name):
    # Create dictionary of names and relations
    names = {"Darth Vader": "father", "Leia": "sister",
             "Han": "brother in law", "R2D2": "droid"}
    # print(names[name])
    # return string format needed using names[name] to get the relation from the dictionary
    return "Luke, I am your {}.".format(names[name])
