const contactForm = document.getElementById('contactForm')
const name = document.getElementById('name')
const info = document.getElementById('info')
const comments = document.getElementById('comments')
const email = document.getElementById('email')

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(name.value);
    console.log(info.value);
    console.log(comments.value);
    console.log(email.value);
})