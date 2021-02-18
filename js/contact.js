const contactForm = document.getElementById('contactForm')
const name = document.getElementById('name')
const info = document.getElementById('info')
const comments = document.getElementById('comments')
const email = document.getElementById('email')

contactForm.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values from the input and trim to remove the whitespaces from the string
        const nameValue = name.value.trim();
        const info = info.value.trim();
        const comments = comments.value.trim();
        const emailValue = email.value.trim();


        if (nameValue === '') {
            alert(nameValue, 'Name cannot be blank');
        } else {
            console.log(nameValue);
        }

        if (emailValue === '') {
            alert(emailValue, 'Email cannot be blank');
        } else if (!isEmail(emailValue)) {
            alert(emailValue, 'Not a valid email');
        } else {
            console.log(emailValue);
        }
    }

// Check if email is valid
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

