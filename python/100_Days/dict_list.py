"""
Day 9
"""

# Nesting
capitals = {
    "France": "Paris",
    "Germany": "Berlin"
}

# Nesting a list in a ditionary

travel_log = {
    "France":  ["Paris", "Lille", "Dijon"],
    "Germany": ["Berlin", "Hamburg", "Stuttgart"]
}

# Nesting Dictionary in a dictionary

travel_log = {
    "France": {"cities_visited": ["Paris", "Lille", "Dijon"], "total_visits": 12, },
    "Germany": {"cities_visitie": ["Berlin", "Hamburg", "Stuttgart"], "total_visits": 5}
}

# Nesting Dictionary in list

travel_log = [
    {
        "country": "France",
        "cities_visited": [
            "Paris", "Lille", "Dijon"],
        "total_visits": 12,
    },
    {
        "country": "Germany",
        "cities_visited": [
            "Berlin", "Hamburg", "Stuttgart"],
        "total_visits": 5
    }
]
"""
You are going to write a program that adds to a travel_log. 
You can see a travel_log which is a List that contains 2 Dictionaries.
Write a function that will work with the following line of code on line 21,
 to add the entry for Russia to the travel_log.
add_new_country("Russia", 2, ["Moscow", "Saint Petersburg"])
You've visited Russia 2 times.
You've been to Moscow and Saint Petersburg.
DO NOT modify the travel_log directly. You need to create a function that modifies it.
Hint
Look at the function call above to see what the name of the function should be.
The inputs for the function are positional arguments. The order is very important.
Feel free to choose your own parameter names.

"""
travel_log = [
    {
        "country": "France",
        "visits": 12,
        "cities": ["Paris", "Lille", "Dijon"]
    },
    {
        "country": "Germany",
        "visits": 5,
        "cities": ["Berlin", "Hamburg", "Stuttgart"]
    },
]
# 🚨 Do NOT change the code above

# TODO: Write the function that will allow new countries
# to be added to the travel_log. 👇


def add_new_country(country, visits, cities):
    new_entry = {}
    new_entry["country"] = country
    new_entry["visits"] = visits
    new_entry["cities"] = cities
    travel_log.append(new_entry)


# 🚨 Do not change the code below
add_new_country("Russia", 2, ["Moscow", "Saint Petersburg"])
print(travel_log)
