// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//     const formMessage = document.getElementById('formMessage');
//     const prompt = document.querySelector("#pl")

//     if(name && email && message) {
//         formMessage.textContent = 'Thank you for your message, ' + name + '! I will get back to you shortly.';
//         formMessage.style.color = 'green';
//     } else {
//         prompt.classList.add(".pl")

        
//         formMessage.style.color = 'red';

//     }
// });

const submit = document.querySelector('.submit');
submit.addEventListener("click", ()=>{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const prompt = document.querySelector("#pl");
    const promp = document.querySelector(".pl");


    if(name && email && message) {
        formMessage.textContent = 'Thank you for your message, ' + name + '! I will get back to you shortly.';
        formMessage.style.color = 'green';
    } else {
        promp.textContent = prompt.classList.add("pl")
        console.log("hello")

        
        formMessage.style.color = 'red';

    }
})

