emailjs.init('J6vsPMsWw9ZkNQX10');
document.getElementById('ContactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('fstName').value.trim();
    const lastName = document.getElementById('lstName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('number').value.trim();
    const message = document.getElementById('msg').value.trim();

    const name = firstName + " " + lastName;

    const templateParams = {
        name: name,
        email: email,
        number: phoneNumber,
        message: message
    };

    emailjs.send(
        "service_24peva7",
        "contact_form",
        templateParams
    )
        .then(function (response) {
            alert("Message sent successfully!");
            console.log("SUCCESS", response.status, response.text);
        })
        .catch(function (error) {
            alert("Failed to send message.");
            console.log("FAILED", error);
        });
});