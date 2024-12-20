# 1: Write a function that takes a string and returns:
#
# - "short" if the string is less than 4 characters
# - "medium": if the string is 4 or more characters
# - "long": if the string is 8 or more characters
# - "unknown" if the input is not a string
#
def one(input_str):
    return ""


# 2: Write a function that accepts a list of integers and multiplies each integer in the list by 2.
# If the item in the list is not an integer, then 0 should be returned.
#
def two(input_list):
    return []


# 3: Write a function that takes a dict  with `first_name` and `last_name` keys and returns a dict
# that omits those keys and instead adds a `name` key that has a concatenated first and last name.
#
# All other keys in the dict should be preserved.
#
# If the input is not an dict, the input should be returned.
#
def three(input_obj):
    return input_obj


# 4: Implement a city search functionality. The function takes a string (search text) as input and returns the found cities which corresponds to the search text.
#
# Requirements:
#
# - If the search text is fewer than 2 characters, then should return no results. (It is an optimization feature of the search functionality.)
#
# - If the search text is equal to or more than 2 characters, then it should return all the city names starting with the exact search text. Example: `va` should return Valencia and Vancouver
#
# - The search functionality should be case insensitive
#
# - If the search text is a “*” (asterisk), then it should return all the city names.
#
# - (Stretch) The search functionality should work also when the search text is just a part of a city name
#
cities = [
    "Paris",
    "Budapest",
    "Skopje",
    "Rotterdam",
    "Valencia",
    "Vancouver",
    "Amsterdam",
    "Vienna",
    "Sydney",
    "New York City",
    "London",
    "Bangkok",
    "Hong Kong",
    "Dubai",
    "Rome",
    "Istanbul",
]


def four(search_text):
    return []
