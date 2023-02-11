// function addCheckBox(){
//     let list=document.getElementById("drinks").value
//     document.getElementById('info').innerHTML = list + " -Large is $1 extra"
//     // display()
// }
// function addCheckBox() {
//     var selectBox = document.getElementById("drinks");
//     var selectedOption = selectBox.options[selectBox.selectedIndex].value;

//     var checkBoxContainer = document.getElementById("checkboxContainer");
//     checkBoxContainer.innerHTML = "";
//     switch(selectedOption) {
//         case "HotBlackTea":
//           var hotBlackTeaOptions = ["With Sugar", "With Honey", "With Lemon"];
//           hotBlackTeaOptions.forEach(function(option) {
//             var checkbox = document.createElement("input");
//             checkbox.type = "checkbox";
//             checkbox.value = option;
//             checkbox.name = "hotBlackTeaOption";
//             checkbox.id = option;
  
//             var label = document.createElement("label");
//             label.htmlFor = option;
//             label.innerHTML = option;
  
//             checkBoxContainer.appendChild(checkbox);
//             checkBoxContainer.appendChild(label);
//           });
//           break;
//           case "ColdCoffee":
//             var coldCoffeeOptions = ["With Milk", "With Cream", "With Sugar"];
//             coldCoffeeOptions.forEach(function(option) {
//               var checkbox = document.createElement("input");
//               checkbox.type = "checkbox";
//               checkbox.value = option;
//               checkbox.name = "coldCoffeeOption";
//               checkbox.id = option;
    
//               var label = document.createElement("label");
//               label.htmlFor = option;
//               label.innerHTML = option;
    
//               checkBoxContainer.appendChild(checkbox);
//               checkBoxContainer.appendChild(label);
//             });
//             break;
//             case "LemonIceTea":
//         var lemonIceTeaOptions = ["With Sugar", "With Honey", "With Mint"];
//         lemonIceTeaOptions.forEach(function(option) {
//           var checkbox = document.createElement("input");
//           checkbox.type = "checkbox";
//           checkbox.value = option;
//           checkbox.name = "lemonIceTeaOption";
//           checkbox.id = option;

//           var label = document.createElement("label");
//           label.htmlFor = option;
//           label.innerHTML = option;

//           checkBoxContainer.appendChild(checkbox);
//           checkBoxContainer.appendChild(label);
//         });
//         break;
//         case "Espresso":
//         var espressoOptions = ["Single shot", "Double shot", "With Cream"];
//         espressoOptions.forEach(function(option) {
//           var checkbox = document.createElement("input");
//           checkbox.type = "checkbox";
//           checkbox.value = option;
//           checkbox.name = "espressoOption";
//           checkbox.id = option;

//           var label = document.createElement("label");
//           label.htmlFor = option;
//           label.innerHTML = option;

//           checkBoxContainer.appendChild(checkbox);
//           checkBoxContainer.appendChild(label);
//         });
//         break;
//         case "Latte":
//         var latteOptions = ["With Vanilla", "With Cinnamon", "With Hazelnut"];
//         latteOptions.forEach(function(option) {
//         var checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         checkbox.value = option;
//         checkbox.name = "latteOption";
//         checkbox.id = option;

//         var label = document.createElement("label");
//       label.htmlFor = option;
//       label.innerHTML = option;

//       checkBoxContainer.appendChild(checkbox);
//       checkBoxContainer.appendChild(label);
//     });
//     break;
//   default:
//     break;
// }
// }

// function handleCheckboxChange(checkbox) {
//     var textFieldContainer = document.getElementById("textFieldContainer");
//     if (checkbox.checked) {
//       var textField = document.createElement("input");
//       textField.type = "text";
//       textField.required = true;
//       textFieldContainer.appendChild(textField);
//     } else {
//       textFieldContainer.innerHTML = "";
//     }
//   }
// function handleCheckboxChange(checkbox) {
//     var textFieldContainer = document.getElementById("textFieldContainer");
//     if (checkbox.checked) {
//       var textField = document.createElement("input");
//       textField.type = "text";
//       textField.id = "anyAddition";
//       textField.name = "anyAddition";
//       textField.placeholder = "Comments";
//       textField.required = true;
//       textFieldContainer.appendChild(textField);
//     } else {
//       textFieldContainer.innerHTML = "";
//     }
//   }
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    setup();
  });

// initially we are setting to false
var validName = false;
var validEmail = false;
var validPhone = false;
var validAddress = false;
var validZipcode = false;

// regular expressions for name, email and phone
var regExName = /^[a-zA-Z]+$/;
var regExEmail = /([\w\.]+)@northeastern.edu/;
var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
var regexAddress = /[,#-\/\s\!\@\$.....]/;
var regExZipcode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

//values
var firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate);

var lastName = document.getElementById("lastName");
lastName.addEventListener("input", validate);

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);

var streetAddress1 = document.getElementById("streetAddress1");
streetAddress1.addEventListener("input", validate);

var streetAddress2 = document.getElementById("streetAddress2");
streetAddress2.addEventListener("input", validate);

var city = document.getElementById("city");
city.addEventListener("input", validate);

var state = document.getElementById("state");
state.addEventListener("input", validate);

var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", validate);

// write a function for validate
function validate(e) {
  var value = e.target.value;
  var type = this.id; // we are getting ID of the field
  var em = "error_" + type;

  switch (type) {
    case "firstName":
    case "lastName":
    case "city":
    case "state":
      if (!value.trim().match(regExName)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validName = false;
        console.log("validname", validName);
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validName = true;
        console.log("validname", validName);
      }
      break;

    case "emailId":
      if (!value.trim().match(regExEmail)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validEmail = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validEmail = true;
      }
      break;

    case "phoneNumber":
      if (!value.trim().match(regExPhone)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validPhone = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validPhone = true;
      }
      break;

    case "streetAddress1":
    // case "streetAddress2":
      if (!value.trim().match(regexAddress)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validAddress = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validAddress = true;
      }
      break;

    case "zipcode":
      if (!value.trim().match(regExZipcode)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validZipcode = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validZipcode = true;
      }
      break;
  }
}

// Reset a function
function resetFunction() {
  var element = document.getElementById("myForm");
  element.reset();
}

function showDetail(el) {
  var selectedString = el.options[el.selectedIndex].value;

  if (selectedString == 1) {
    document.getElementById("hotBlackTea").style.display = "block";
  } else {
    document.getElementById("hotBlackTea").style.display = "none";
  }

  if (selectedString == 2) {
    document.getElementById("coldCoffee").style.display = "block";
  } else {
    document.getElementById("coldCoffee").style.display = "none";
  }

  if (selectedString == 3) {
    document.getElementById("lemonIcedTea").style.display = "block";
  } else {
    document.getElementById("lemonIcedTea").style.display = "none";
  }

  if (selectedString == 4) {
    document.getElementById("espresso").style.display = "block";
  } else {
    document.getElementById("espresso").style.display = "none";
  }

  if (selectedString == 5) {
    document.getElementById("latte").style.display = "block";
  } else {
    document.getElementById("latte").style.display = "none";
  }
}
function showQuantity(e) {
  var hotBlackteaCB = document.getElementById("cb_hotBlackTea");
  var coldCoffeeCB = document.getElementById("cb_coldCoffee");
  var lemonIcedteaCB = document.getElementById("cb_lemonIcedTea");
  var espressoCB = document.getElementById("cb_espresso");
  var latteCB = document.getElementById("cb_latte");

  var text = document.getElementById("additionalComments");

  if (
    hotBlackteaCB.checked == true ||
    coldCoffeeCB.checked == true ||
    lemonIcedteaCB.checked == true ||
    espressoCB.checked == true ||
    latteCB.checked == true
  ) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}



////////////////////////////////// New table ////////////////////////////////
function setup() {
    //"use strict";
    console.log("Function called")
var myForm = document.getElementById("myForm");
var title = document.getElementsByName("title");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("emailId");
var phone = document.getElementById("phoneNumber");
var streetAddress1 = document.getElementById("streetAddress1");
var streetAddress2 = document.getElementById("streetAddress2");
var city = document.getElementById("city");
var state = document.getElementById("state");
var zipcode = document.getElementById("zipcode");
var source = document.getElementsByName("source");    
var comments = document.getElementById("comments");
var drinks = document.getElementById("drinks");
var drink = document.getElementsByName("drink");
var select = document.getElementById("drinks");
var additionalComments = document.getElementById("addcom");
var table = document.getElementById("myTable");

var selectedTitle = '';
var selectedSource = [];
var selectedDrink = [];
var result ='';

const selectedIndex = select.selectedIndex;
const selectedValue = select.value;
const selectedText = select.options[selectedIndex].text;

var selection = document.querySelector('select');
selection.addEventListener('change', () => {
    result = selection.options[selection.selectedIndex].text;
});    

//document.getElementById("submit").addEventListener("click", function() {
    for(var i = 0; i < title.length; i++) {
        if(title[i].checked)
          selectedTitle = title[i].value;
     }
     
     for(var i = 0; i < source.length; i++) {
        if(source[i].checked)
          selectedSource.push(source[i].value);
     }

     for(var i = 0; i < drink.length; i++) {
        if(drink[i].checked)
        selectedDrink=drink[i].value;
     }


    var newRow = table.insertRow(-1);
    var newCell = newRow.insertCell(0);
    var newText = document.createTextNode(selectedTitle);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(1);
    newText = document.createTextNode(firstName.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(2);
    newText = document.createTextNode(lastName.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(3);
    newText = document.createTextNode(email.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(4);
    newText = document.createTextNode(phone.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(5);
    newText = document.createTextNode(streetAddress1.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(6);
    newText = document.createTextNode(streetAddress2.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(7);
    newText = document.createTextNode(city.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(8);
    newText = document.createTextNode(state.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(9);
    newText = document.createTextNode(zipcode.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(10);
    newText = document.createTextNode(selectedSource.toString());
    newCell.appendChild(newText);
    newCell = newRow.insertCell(11);
    newText = document.createTextNode(comments.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(12);
    newText = document.createTextNode(selectedText.toString());
    newCell.appendChild(newText);
    newCell = newRow.insertCell(13);
    newText = document.createTextNode(selectedDrink.toString());
    newCell.appendChild(newText);
    newCell = newRow.insertCell(14);
    newText = document.createTextNode(additionalComments.value);
    newCell.appendChild(newText);
    
    myForm.reset();
    // additionalComments.style.display="none";
    //coffee.style.display="none";
    selectedTitle = "";
    selectedSource = [];
    
//  });
}
//setup();

// write a function submitted
function submitted(e) {
    //e.preventDefault();
    //console.log("validname", validName);
    console.log(validName, validEmail, validPhone, validAddress, validZipcode);
    if (validName && validEmail && validPhone && validZipcode) {
      setup();
      alert("Data entered succesfull");
      //window.location.href = "FeedbackComplete.html";
    } else {
      alert("Please enter valid details");
    }
    return false;
  }












    
    