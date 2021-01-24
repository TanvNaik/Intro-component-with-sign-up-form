"use strict";

const submit = document.querySelector(".submit");

const firstName = document.querySelector("#firstname");

const lastName = document.querySelector("#lastname");

const email = document.querySelector("#email");

const password = document.querySelector("#password");

submit.addEventListener("click", (e) => {
	let errors = 0;

	//first name validation
	if (firstName.value === "") {
		e.preventDefault();
		const err = `<br><span><i><b>First Name cannot be empty!</b></i></span>`;
		error(firstName, err);
		errors += 1;
	}

	//last name validation
	if (lastName.value === "") {
		e.preventDefault();
		const err = `<br><span><i><b>Last Name cannot be empty!</b></i></span>`;
		error(lastName, err);
		errors += 1;
	}

	//email validation
	var email_re = /\S+@\S+\.\S+/; //regular expression for email address
	if (email.value === "") {
		e.preventDefault();
		const err = `<br><span><i><b>Email cannot be empty!</b></i></span>`;
		error(email, err);
		errors += 1;
	} else if (!email_re.test(email)) {
		e.preventDefault();
		const err = `<br><span><i><b>Looks like this is not an email</b></i></span>`;
		email.value = "";
		email.placeholder = "name@host.tld";
		error(email, err);
		errors += 1;
	}

	//password validation
	if (password.value === "") {
		e.preventDefault();
		const err = `<br><span><i><b>Password cannot be empty!</i></b></span>`;
		error(password, err);
		errors += 1;
	}

	if (errors === 0) {
		alert("Thank you for joining us");
	}
});

const error = (element, msg) => {
	element.parentNode.classList.add("error");
	element.insertAdjacentHTML("afterend", msg);
	if (window.matchMedia("(max-width:1080px)").matches) {
		document.querySelector(".section2").style.paddingBottom = "30%";
	} else {
		document.querySelector(".section2").style.paddingBottom = "12%";
	}

	element.style.border = "2px solid hsl(0, 100%, 74%) ";
};
