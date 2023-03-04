PART-A:
It is a 2 page Calculator web application using JQuery

Page 1: 
HTML form is created using <label> and <input> field tags for username, password and emailID. And a submit button is created to redirect to Page 2.
JQuery library is used to define an event listener that listens for the submission of a form with an id of "login-form".
e.preventDefault(); is used to prevent default behavior of submission to reload page before validation.
$() selector and val() method is used to retrieve values entered in the input fields.
If, else if and else method is used to validate input fields by checking if field is not empty and matches RegEx . If not, it displays error message stored in respective Error variable.
The $("#login-form").submit(function(e)) function redirects the user to the "calculator2.html" page and stores the username in local storage if all the input fields are valid.

Page 2:
Selector $().text().getItem() is used to get text stored in localStorage and display username.
$("#add").click(), $("#subtract").click(), $("#multiply").click(), and $("#divide").click() functions all handle the click events of the corresponding buttons on the calculator form.
validateNumber(), a ARROW function that takes single parameter "number" is called when buttons are clicked and runs the if, else loop to check if input is empty or does not match RegEx and displays error message.
calculate(), a ARROW function is called after validation and takes 3 parameters - operator, number1, number2 and performs the arithmetic operation based on the value of the "operator" parameter. The result of the operation is returned as a number.



PART-B:
It is a Single Page Stop Watch Web Application.
HTML page is created to display Stopwatch in HH:MM:SS format using <label> and <button> tag is used to perform events.
In JavaScript variables are declared to store the initial values for hour, minute, and second, the interval for the timer, and a promise.
Selector $("#").click(async function() {...}): is called when the buttona are clicked.
'Promise', 'async', and 'await' functions are used to ensure that the timer interval does not start immediately when the start button is clicked
The 'setInterval' and 'clearInterval' functions are used to update the timer label every second and to stop the timer when needed, respectively.
updateTimerLabel() function updates the timer label with the current hour, minute, and second values
padZero(num) function adds a leading zero to a number if it is less than 10.