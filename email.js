function sendMail(){
    var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message")
    }

    const serviceID = "service_wrvk1gn";
    const templateID = "template_104aaz8"
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams).then(
        (response) => {
        console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
        console.log('FAILED...', error);
        },
    );
}