from microbit import *
import random

images = [Image.RABBIT, Image.COW, Image.DUCK, Image.GIRAFFE, Image.SNAKE, 
    Image.ROLLERSKATE, Image.DIAMOND, Image.GHOST, Image.SKULL, Image.HOUSE]

while True:
    choice = random.randint(0, 9)
    selected_image = images[choice]
    
    # display for 3s, and let guess!
    display.show(selected_image)
    sleep(3000)
    
    if choice < 5 and button_a.is_pressed():    # animal & correct guess
        display.show(Image.HAPPY)
    elif choice >= 5 and button_b.is_pressed(): # non-animal & correct guess
        display.show(Image.HAPPY)
    else:                                       # otherwise
        display.show(Image.SAD)
        
    sleep(3000)
        
    