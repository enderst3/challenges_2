import turtle as tim
from turtle import Turtle, Screen
from random import randint

tim.colormode(255)

def draw_shape(num_sides):
    angle = 360 / num_sides
    tim.color(randint(0, 255), randint(0, 255), randint(0, 255))
    for _ in range(num_sides):
        tim.forward(100)
        tim.right(angle)


for num_angles in range(3, 11):
    draw_shape(num_angles)

screen = Screen()
screen.exitonclick()
