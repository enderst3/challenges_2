"""
How to add to an existing class.

"""
# Parent class
class Animal:
    def __init__(self):
        self.num_eyes = 2

    def breathe(self):
        print("Inhale, exhale.")

# Child Class
class Fish(Animal):
    def __init__(self):
        # Using super class - super() along with initializing allows fish to inherit attributes of parent
        super(). __init__()

    # Use super class to inherit, then modify the breathe attribute
    def breathe(self):
        super().breathe()
        print("While under water. ")

    def swim(self):
        print("Moving in water.")


nemo = Fish()
nemo.swim()
nemo.breathe()
print(nemo.num_eyes)