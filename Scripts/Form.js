emailjs.init('J6vsPMsWw9ZkNQX10');

function validatePhone(number) {
    const re = /^(\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4})$/;

    if (re.test(String(number).toLowerCase()) === false) {
        document.getElementById("errorNbr").style.display = "block";
        throw new Error("Please input a valid Phone Number");
    } else {
        document.getElementById("errorNbr").style.display = "none";
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length === 0) return 1;

    if (re.test(String(email).toLowerCase()) === false) {
        document.getElementById("errorEm").style.display = "block";
        throw new Error("Please input a valid Email Address");
    } else {
        document.getElementById("errorEm").style.display = "none";
    }
}

function checkContactMethod(checked) {
    if (checked.length === 0) {
        document.getElementById("error").style.display = "block";
        throw new Error("Please provide at least one Contact Method")
    } else {
        document.getElementById("error").style.display = "none";
        console.log(checked)
    }
}

document.getElementById('ContactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('fstName').value.trim();
    const lastName = document.getElementById('lstName').value.trim();
    const email = document.getElementById('emailAdr').value.trim();
    const phoneNumber = document.getElementById('number').value.trim();
    const checked = document.querySelectorAll('input[name="contactMethod"]:checked');
    const message = document.getElementById('msg').value.trim();

    const name = firstName + " " + lastName;

    try {
        validatePhone(phoneNumber);
        validateEmail(email);
        checkContactMethod(checked);

        const contactMethod =
            "My preferred Contact Method(s) are: " +
            Array.from(checked)
                .map(el => el.id)
                .join(', ');

        const templateParams = {
            name: name,
            email: email,
            number: phoneNumber,
            contactMethod: contactMethod,
            message: message
        };

        emailjs.send(
            "service_24peva7",
            "contact_form",
            templateParams
        ).then(function (response) {
            alert("Thank you! I will get in contact with you as soon as possible!");
            console.log("SUCCESS", response.status, response.text);
        })

        console.log("Form Submission Finished");
    } catch (error) {
        alert(error);
        console.log(error);
    }
});