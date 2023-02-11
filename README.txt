This is a webpage of a form that displays input in the table
Form is created using tags <input type="radio">,<input type="text">,<input type='checkbox'>,<select> and <option> tags
The <table>, <th>, <tr> tags are used to create table for displaying inputs
Validations are added to the form using RegEx, If-else loop and in-built functions getElementById,addEventListener, match 
A red colored error message is displayed until fields are corrected
A list box is created using <select> tag, that dynamically adds checkbox using function addCheckBox() with onChange event
addCheckBox() creates customized checkboxes using getElementById,forEach,handleCheckboxChange(),createElement,appendChild methods
handleCheckboxChange() fuction displays text fields using getElementById,createElement,appendChild, removeChild methods when checkbox is checked
submitted() function uses if-else method to display table if all validations are true
showDetails() function populates the table using insertRow,insertCell,createTextNode methods and displays with inputs from relevent fields using getElementById,getElementsByName,querySelector,addEventListener,appendChild and get.value methods
