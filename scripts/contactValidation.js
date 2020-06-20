let nameRegex = /((^|^([A-Z][A-Za-z\-]*\s*)*)[A-Z][A-Za-z\-]*\s*)+$/
let emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
let messageRegex = /.+/;

let name = new String();
let email = new String();
let message = new String();

let properName;
let properEmail;
let properMessage;

const button = document.querySelector("button");
button.disabled = true;

function nameProvided() {
	name = document.getElementById("name").value;
}

function emailProvided() {
	email = document.getElementById("email").value;
}

function messageProvided() {
	message = document.getElementById("textarea").value;
}

function disableButton() {
	if (name.length > 0 &&  email.length > 0 && message.length > 0) {
		button.disabled = false;
	} else {
		button.disabled = true;
	}
}

function validate() {
	if (inputsValidationSuccess()) {
		alert("Message sent!");
		cleanForm();
		removeErrorFromHtmlIfExist();
		clearInputsBackgroundColor();
		disableButton();
	} else {
		changeWrongInputsBackgroundColor();
		addErrorToHtml();
	}
}

function inputsValidationSuccess() {
	properName = nameRegex.test(name);
	properEmail = emailRegex.test(email);
	properMessage = messageRegex.test(message);
	return properName && properEmail && properMessage;
}

function cleanForm() {
	name = "";
	email = "";
	message = "";
	document.getElementById("name").value = name;
	document.getElementById("email").value = email;
	document.getElementById("textarea").value = message;
}

function addErrorToHtml() {
	if (document.getElementById("error") !== null) {
		return;
	}
	let paragraph = document.createElement("p");
	paragraph.setAttribute("id", "error")
	paragraph.appendChild(document.createTextNode("Please enter appropriate data!"));
	let element = document.getElementsByTagName("div")[0];
	let child = document.getElementById("form");
	element.appendChild(paragraph);
}

function removeErrorFromHtmlIfExist() {
	if (document.getElementById("error") === null) {
		return;
	}
	document.getElementById("error").remove();
}

function changeWrongInputsBackgroundColor() {
	if (!properName) {
		document.getElementById("name").style.background = "yellow";
	}
	if (!properEmail) {
		document.getElementById("email").style.background = "yellow";
	}
	if (!properMessage) {
		document.getElementById("textarea").style.background = "yellow";
	}
}

function clearInputsBackgroundColor() {
	document.getElementById("name").style.background = "white";
	document.getElementById("email").style.background = "white";
	document.getElementById("textarea").style.background = "white";
}
