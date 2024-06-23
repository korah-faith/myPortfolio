document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if(name && email && message) {
        formMessage.textContent = 'Thank you for your message, ' + name + '! I will get back to you shortly.';
        formMessage.style.color = 'green';
    } else {
        formMessage.textContent = 'Please fill out all fields.';

        
        formMessage.style.color = 'red';

    }
});
