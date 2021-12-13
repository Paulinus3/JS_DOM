const submitForm = (event) => {
    event.preventDefault();

    let firstName = document.querySelector('[name="fname"');
    let lastName = document.querySelector('[name="lname"');
    console.log(firstName.value + ' ' + lastName.value);
}

let form = document.getElementById('form');

form.addEventListener('submit', submitForm);