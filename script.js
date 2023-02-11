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
function handleCheckboxChange(checkbox) {
    var textFieldContainer = document.getElementById("textFieldContainer");
    if (checkbox.checked) {
     var br=document.createElement("br");
      var textField = document.createElement("input");
      textField.type = "text";
      textField.id = "anyAddition";
      textField.name = "anyAddition";
      textField.placeholder = "Comments";
      textField.required = true;
      textField.style.display = "block";
      textFieldContainer.appendChild(textField);
      
      var label = document.createElement("label");
      label.htmlFor = "anyAddition";
      label.innerHTML = "Any Additional Instruction?*";
      
      textFieldContainer.appendChild(label);
      textFieldContainer.appendChild(br);
    } else {
      textFieldContainer.removeChild(document.getElementById("anyAddition"));
      textFieldContainer.removeChild(document.getElementById("label-anyAddition"));
    }
  }

  function addCheckBox() {
    var checkBoxContainer = document.getElementById("checkboxContainer");
    checkBoxContainer.innerHTML = "";
    var drink = document.getElementById("drinks").value;
    switch (drink) {
      case "HotBlackTea":

        var hotBlackTeaOptions = ["Large Hot Black Tea -Extra $1 "];
        hotBlackTeaOptions.forEach(function(option) {
          var checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.value = option;
          checkbox.name = "hotBlackTeaOption";
          checkbox.id = option;
          checkbox.onchange = function() { handleCheckboxChange(this) };

          var label = document.createElement("label");
          label.htmlFor = option;
          label.innerHTML = option;

          checkBoxContainer.appendChild(checkbox);
          checkBoxContainer.appendChild(label);
        });
        break;
        case "ColdCoffee":
        var coldCoffeeOptions = ["Large Cold Coffee - Extra $1 "];
        coldCoffeeOptions.forEach(function(option) {
          var checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.value = option;
          checkbox.name = "coldCoffeeOption";
          checkbox.id = option;
          checkbox.onchange = function() { handleCheckboxChange(this) };

          var label = document.createElement("label");
          label.htmlFor = option;
          label.innerHTML = option;

          checkBoxContainer.appendChild(checkbox);
          checkBoxContainer.appendChild(label);
        });
        break;
        case "LemonIceTea":
        var lemonIceTeaOptions = ["Large Lemon Ice Tea - Extra $1 "];
        lemonIceTeaOptions.forEach(function(option) {
          var checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.value = option;
          checkbox.name = "lemonIceTeaOption";
          checkbox.id = option;
          checkbox.onchange = function() { handleCheckboxChange(this) };

          var label = document.createElement("label");
          label.htmlFor = option;
          label.innerHTML = option;

          checkBoxContainer.appendChild(checkbox);
          checkBoxContainer.appendChild(label);
        });
        break;
        case "Espresso":
        var espressoOptions =["Large Espresso - Extra $1"];
        espressoOptions.forEach(function(option) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = option;
        checkbox.name = "espressoOption";
        checkbox.id = option;
        checkbox.onchange = function() { handleCheckboxChange(this) };

        var label = document.createElement("label");
        label.htmlFor = option;
        label.innerHTML = option;

        checkBoxContainer.appendChild(checkbox);
        checkBoxContainer.appendChild(label);
    });
    break;
    case "Latte":
    var latteOptions = ["Large Latte - Extra $1"];
    latteOptions.forEach(function(option) {
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = option;
      checkbox.name = "latteOption";
      checkbox.id = option;
      checkbox.onchange = function() { handleCheckboxChange(this) };

      var label = document.createElement("label");
      label.htmlFor = option;
      label.innerHTML = option;

      checkBoxContainer.appendChild(checkbox);
      checkBoxContainer.appendChild(label);
    });
    break;
}
}

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    showDetails();
  });
// var form = document.getElementById("myForm");
// 	form.addEventListener("submit",submitted);

	var validFirstName=false;
    var validLastName=false;
	var validEmail=false;
	var validPhone=false;
    var validZipCode=false;
    var validAddress=false;
    var validCity=false;
    var validState=false;

	var regExFirstName = /^[a-zA-Z]+$/;
    var regExLastName = /^[a-zA-Z]+$/;
	var regExEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
	var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
    var regExAddress = /[,#-\/\s\!\@\$.....]/;
    var regExZipcode = /^[0-9]{5}(?:-[0-9]{4})?$/;
    var regExCity = /^[a-zA-Z]+$/;
    var regExState = /^[a-zA-Z]+$/;


	var firstName= document.getElementById("firstName");
	firstName.addEventListener("input",validate);

    var lastName= document.getElementById("lastName");
	lastName.addEventListener("input",validate);

	var emailId = document.getElementById("emailId");
	emailId.addEventListener("input",validate);

	var phoneNumber= document.getElementById("phoneNumber");
	phoneNumber.addEventListener("input",validate);

    var streetAddress1= document.getElementById("streetAddress1");
    streetAddress1.addEventListener("input",validate);

    var zipcode= document.getElementById("zipcode");
    zipcode.addEventListener("input",validate);

    var city= document.getElementById("city");
    city.addEventListener("input",validate);

    var state= document.getElementById("state");
    state.addEventListener("input",validate);

	function validate(e){
    console.log(e);
    
    var value=e.target.value;
    var type=this.id;
    var em="error_"+type;

    switch(type){
        case "firstName":
                    if(!value.trim().match(regExFirstName)){
                        console.log("em",em);
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validFirstName = false;
                        console.log("validFirstName",validFirstName)
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validFirstName = true;
                        console.log("validFirstName",validFirstName)
                    }
                    break;

        case "lastName":
                    if(!value.trim().match(regExLastName)){
                        console.log("em",em);
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validLastName = false;
                        console.log("validLastName",validLastName)
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validLastName = true;
                        console.log("validLastName",validLastName)
                    }
                    break;

        case "emailId":
                    if(!value.trim().match(regExEmail)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validEmail = false;
                        console.log("validEmail",validEmail)
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validEmail = true;
                        console.log("validEmail",validEmail)
                    }
                    break;
                    
        case "phoneNumber":
                    if(!value.trim().match(regExPhone)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validPhone = false;
                        console.log("validPhone",validPhone)
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validPhone = true;
                        console.log("validPhone",validPhone)
                    }
                    break;

        case "streetAddress1":
                    if(!value.trim().match(regExAddress)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validAddress = false;
                        console.log("validAddress",validAddress)
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validAddress = true;
                        console.log("validAddress",validAddress)
                    }
                    break;

        case "zipcode":
                    if(!value.trim().match(regExZipcode)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validZipCode = false;
                        console.log("validZipCode",validZipCode)
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validZipCode = true;
                        console.log("validZipCode",validZipCode)
                    }
                    break;

        case "city":
                    if(!value.trim().match(regExCity)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validCity = false;
                        console.log("validCity",validCity)
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validAddress = true;
                        console.log("validCity",validCity)
                    }
                    break;

        case "state":
                    if(!value.trim().match(regExState)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validState = false;
                        console.log("validState",validState)
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validState = true;
                        console.log("validState",validState)
                    }
                    break;

    }
}

function submitted(e){
    console.log(validFirstName,validLastName,validEmail,validPhone,validAddress,validZipCode,validState);
    if(validFirstName && validEmail && validPhone && validLastName && validAddress && validState && validZipCode){
        showDetails();
        alert("Data entered successfully");
        // window.open("./table.html");
    }
    else{
        alert("Please enter Valid details");
    }
    return false;
}

function showDetails(){
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
var channel = document.getElementsByName("channel");    
var comments = document.getElementById("comments");
var drinks = document.getElementById("drinks");
var option = document.getElementById("option");
// var drink = document.getElementsByName("drink");
var select = document.getElementById("drinks");
var anyAddition = document.getElementById("anyAddition");
var table = document.getElementById("myTable");

var selectedTitle = '';
var selectedChannel = [];
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
     
     for(var i = 0; i < channel.length; i++) {
        if(channel[i].checked)
          selectedChannel.push(channel[i].value);
     }

     for(var i = 0; i < drinks.length; i++) {
        if(drinks[i].checked)
        selectedDrink=drinks[i].value;
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
    newText = document.createTextNode(selectedChannel.toString());
    newCell.appendChild(newText);
    newCell = newRow.insertCell(11);
    newText = document.createTextNode(comments.value);
    newCell.appendChild(newText);
    newCell = newRow.insertCell(12);
    newText = document.createTextNode(selectedText.toString());
    newCell.appendChild(newText);
    newCell = newRow.insertCell(13);
    newText = document.createTextNode(anyAddition.value);
    newCell.appendChild(newText);
    //newCell = newRow.insertCell(14);
    //newText = document.createTextNode();
    //newCell.appendChild(newText);
    // newCell = newRow.insertCell(15);
    // newText = document.createTextNode(option.value);
    // newCell.appendChild(newText);
    
    myForm.reset();
    //textFieldContainer.style.display="none";
    //checkboxContainer.style.display="none";
    
    selectedTitle = "";
    selectedChannel = [];


}











    
    