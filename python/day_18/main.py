import turtle as tim
from turtle import Turtle, Screen
import random
from random import randint

screen = Screen()
tim.colormode(255)
tim.shape("turtle")
# directions = [0, 90, 180, 270]
# tim.pensize(16)
tim.speed('fastest')



def random_color():
    r = randint(0, 255)
    g = randint(0, 255)
    b = randint(0, 255)
    color = (r, g, b)
    return color

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

# for _ in range(200):
#     tim.color(random_color())
#     tim.setheading(random.choice(directions))
#     tim.forward(30)

degrees = 360
while degrees > 0:
    tim.color(random_color())
    tim.circle(100)
    tim.right(5)
    degrees -= 5
# tim.goto(-500, -500)
# tim.dot(30, 'teal')
# tim.penup()
# tim.forward(100)
# tim.pendown()
# tim.dot(30, 'pink')
# tim.penup()
# tim.forward(100)
# tim.pendown()
# tim.dot(30, 'coral')
# print(tim.pos())



screen.exitonclick()
