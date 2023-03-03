$(document).ready(function() {
	// Page 1
	$("#login-form").submit(function(e) {
		e.preventDefault();
		
		let email = $("#email").val();
		let username = $("#username").val();
		let password = $("#password").val();
		
		let emailRegex = /^[A-Za-z0-9._%+-]+@(northeastern)+\.(edu)$/;
		let usernameRegex = /^[A-Za-z0-9_]{3,20}$/;
		let passwordRegex = /^(?=.*[A-Z])(?=.*[0-9!@#$%^&*()_+-=])(?=.{6,20})/;
		
		let emailError = "";
		let usernameError = "";
		let passwordError = "";
		
        if (email === "") {
			emailError = "Email is required.";
		} else if (!emailRegex.test(email)) {
			emailError = "Invalid email. Only Northeastern emails are allowed.";
		}
		
		if (username === "") {
			usernameError ="Username is required.";
        } else if (!usernameRegex.test(username)) {
        usernameError = "Invalid username. Username must be between 3 and 20 characters and can only contain letters, numbers, and underscores.";
        }
        if (password === "") {
            passwordError = "Password is required.";
        } else if (!passwordRegex.test(password)) {
            passwordError = "Invalid password. Password must be between 6 and 20 characters and must contain atleast one uppercase and, numbers or the following special characters: !@#$%^&*()_";
        }
        
        $("#email-error").text(emailError);
        $("#username-error").text(usernameError);
        $("#password-error").text(passwordError);
        
        if (emailError === "" && usernameError === "" && passwordError === "") {
            // Redirect to Page 2
            window.location.href = "calculator2.html";
            localStorage.setItem("username", username);
        }
    });
    // Page 2
$("#username").text(localStorage.getItem("username"));

$("#calculator-form").submit(function(e) {
	e.preventDefault();
});

let validateNumber = (number) => {
	let numberRegex = /^[0-9]+$/;
	
	if (number === "") {
		return "Number is required.";
	} else if (!numberRegex.test(number)) {
		return "Invalid number. Only numbers are allowed.";
	}
	
	return "";
}
let calculate = (operator, number1, number2) => {
	let result = 0;
	
	switch (operator) {
		case "add":
			result = parseInt(number1) + parseInt(number2);
			break;
		case "subtract":
			result = parseInt(number1) - parseInt(number2);
			break;
		case "multiply":
			result = parseInt(number1) * parseInt(number2);
			break;
		case "divide":
			result = parseInt(number1) / parseInt(number2);
			break;
	}
	
	return result;
}
$("#add").click(() => {
	let number1 = $("#number1").val();
	let number2 = $("#number2").val();
	
	let number1Error = validateNumber(number1);
	let number2Error = validateNumber(number2);
	
	$("#number1-error").text(number1Error);
	$("#number2-error").text(number2Error);
	
	if (number1Error === "" && number2Error === "") {
		let result = calculate("add", number1, number2);
		$("#result").val(result);
	} else {
		$("#result").val("");
	}
});

$("#subtract").click(() => {
	let number1 = $("#number1").val();
	let number2 = $("#number2").val();
	
	let number1Error = validateNumber(number1);
	let number2Error = validateNumber(number2);
	
	$("#number1-error").text(number1Error);
	$("#number2-error").text(number2Error);
	
	if (number1Error === "" && number2Error === "") {
		let result = calculate("subtract", number1, number2);
		$("#result").val(result);
	} else {
		$("#result").val("");
	}
});
$("#multiply").click(() => {
	let number1 = $("#number1").val();
	let number2 = $("#number2").val();
	
	let number1Error = validateNumber(number1);
	let number2Error = validateNumber(number2);
	
	$("#number1-error").text(number1Error);
	$("#number2-error").text(number2Error);
    if (number1Error === "" && number2Error === "") {
		let result = calculate("multiply", number1, number2);
		$("#result").val(result);
	} else {
		$("#result").val("");
	}
});
$("#divide").click(() => {
	let number1 = $("#number1").val();
	let number2 = $("#number2").val();
	
	let number1Error = validateNumber(number1);
	let number2Error = validateNumber(number2);
	
	$("#number1-error").text(number1Error);
	$("#number2-error").text(number2Error);
	
	if (number1Error === "" && number2Error === "" && number2 !== "0") {
		let result = calculate("divide", number1, number2);
		$("#result").val(result);
	} else {
		$("#result").val("");
	}
});
});
const calculate = (operation, num1, num2) => {
	switch (operation) {
		case "add":
			return parseFloat(num1) + parseFloat(num2);
		case "subtract":
			return parseFloat(num1) - parseFloat(num2);
		case "multiply":
			return parseFloat(num1) * parseFloat(num2);
		case "divide":
			return parseFloat(num1) / parseFloat(num2);
		default:
			return 0;
	}
};
        
        