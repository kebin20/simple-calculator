# simple-calculator
Simple calculator app coded with HTML, CSS and Vanilla Javascript

Things of note in my Javascript code:

- I used forEach to target all of the number and operator buttons

-  In order to obtain the value from the buttons, I then specified the event being targeted which in this case is the textContent of the HTML element 

- I was struggling in how NOT to double up the inputted number onto the display screen e.g when 6 and the + button is pressed, the display screen would instantly show  6 + 6 before the second number was even pressed. 

Therefore, in order to fix this, in the operatorHandler function, valueOne will need to equal to value Two first, then valueTwo must be made as an empty string.

- In order to have the numbers properly separated by commas, I used parseInt() first to convert the valueOne string to a number, and then used toLocaleString();



THINGS TO NOTE: 

- Fiddle with the valueOne and valueTwo lengths to show correct separators and decimal separators


Attempts:

- I tried to attempt to use a switch statement for the calculation, but it didn't calculate properly.


Functions that I want to include: 

- Reset the calculator by pressing any number buttons once the calculation has been made 

- Giving the function of being able to further calculate from the result after adding an operator to the caclulated result.