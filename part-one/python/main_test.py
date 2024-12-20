import unittest
from main import one, two, three, four, cities


class TestFunctions(unittest.TestCase):

    def test_one(self):
        # Short strings
        self.assertEqual(one("str"), "short")
        self.assertEqual(one(""), "short")

        # Medium strings
        self.assertEqual(one("mid!"), "medium")

        # Long strings
        self.assertEqual(one("longstr!"), "long")

        # Invalid inputs
        self.assertEqual(one(None), "unknown")
        self.assertEqual(one(False), "unknown")
        self.assertEqual(one(1), "unknown")
        self.assertEqual(one([]), "unknown")
        self.assertEqual(one({}), "unknown")

    def test_two(self):
        # Happy path
        self.assertEqual(two([1, 2, 3, 4, 5]), [2, 4, 6, 8, 10])

        # Invalid inputs
        self.assertEqual(two([1, None, [], {}, False]), [2, 0, 0, 0, 0])

    def test_three(self):
        # Happy path
        input_obj = {
            "id": "chris",
            "first_name": "Chris",
            "last_name": "Bell",
            "age": 35,
        }

        expected_output = {
            "id": "chris",
            "name": "Chris Bell",
            "age": 35,
        }

        self.assertEqual(three(input_obj), expected_output)

        # Invalid inputs
        self.assertEqual(three([]), [])
        self.assertEqual(three(None), None)

    def test_four(self):
        # Input fewer than 2 chars
        self.assertEqual(four("V"), [])

        # Matching city names
        self.assertEqual(four("Va"), ["Valencia", "Vancouver"])

        # Matching city names (case insensitive)
        self.assertEqual(four("va"), ["Valencia", "Vancouver"])

        # "*" returns all cities
        self.assertEqual(four("*"), cities)

        # Fuzzy matching
        self.assertEqual(four("ape"), ["Budapest"])


if __name__ == "__main__":
    unittest.main()
