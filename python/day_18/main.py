import turtle as tim
from turtle import Turtle, Screen
import random
from random import randint

tim.colormode(255)
directions = [0, 90, 180, 270]
tim.pensize(16)
tim.speed('fastest')

def random_color():
    r = randint(0, 255)
    g = randint(0, 255)
    b = randint(0, 255)
    random_color = (r, g, b)
    return random_color

'''
def draw_shape(num_sides):
    angle = 360 / num_sides
    tim.color(randint(0, 255), randint(0, 255), randint(0, 255))
    for _ in range(num_sides):
        tim.forward(100)
        tim.right(angle)


for num_angles in range(3, 11):
    draw_shape(num_angles)
'''

for _ in range(200):
    tim.color(random_color())
    tim.setheading(random.choice(directions))
    tim.forward(30)

screen = Screen()
screen.exitonclick()
