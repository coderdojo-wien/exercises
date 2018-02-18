# Coding in Python on micro:bit

## What is micro:bit?

In a nutshell it is a small computer, of half a credit card in size. It is mainly used for educational purposes. Although small, and somewhat limited, it is possible to create some cool creations on it in a very easy way. Code could be written in Block, Python and JavaScript among other programming languages.

## Let's create a simple game in Python

### The idea

Using a 5x5 LED grid, we can display different pre-defined images. For this game, two groups will be composed, with 5 images in each:

- Animals
- Non-animals

Each play will consist of showing a random image, and giving the player 3 seconds to guess whether it's an animal or not, which is depicted. Pressing 'A' button for animal, 'B' for non-animal. If the player is right, a happy face will be shown. Otherwise, a sad face will be shown. After 3 seconds another play will start.

### Code

The solution here will consist of less than 20 lines of code!


First, we'll import the libraries we need:
```python
from microbit import *
import random
```

An array of 10 images will be created. The first 5 are animals, and the rest are not:
```python
images = [Image.RABBIT, Image.COW, Image.DUCK, Image.GIRAFFE, Image.SNAKE, 
    Image.ROLLERSKATE, Image.DIAMOND, Image.GHOST, Image.SKULL, Image.HOUSE]
```

Next, we will have an endless loop, in which all the game logic will occur.

- First, we randomize a number between 0 to 9, and select the place in the array accordingly.
- We display the image for 3 seconds.
- We check whether it's an animal and 'A' is pressed, and if so, happy face will be displayed.
- Otherwise, we check if it's a non-animal and 'B' is pressed, and if so, happy face will be displayed.
- Otherwise, a sad face will show up.
- 3 seconds of 'sleep' until the next round.

The result of it in Python will look as follows:

```python
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
```

That's it! Converting it to a .hex file could be done [online](https://python.microbit.org/). And then, it has to be copied to the device, and it could be used right away.

### Exercise

- Can you spot any bugs in the code? (Hint: what happens if both buttons are pressed)
- How to improve the gameplay?



