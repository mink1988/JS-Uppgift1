import user from "./models/user.js"
import { validateEmail, validateRequired } from "./helpers/functions.js"


const main = () => {
  const button = document.getElementById('submit');
  const regForm = document.getElementById('regForm');
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const emailAddress = document.getElementById('emailAddress');
  const phoneNumber = document.getElementById('phoneNumber');
  const deliveryAddress = document.getElementById('deliveryAddress');
  const zipCode = document.getElementById('zipCode');
  const postalCity = document.getElementById('postalCity');


  let firstNameValid = false;
  let lastNameValid = false;
  let emailAddressValid = false;
  let phoneNumberValid = false;
  let deliveryAddressValid = false;
  let zipCodeValid = false;
  let postalCityValid = false;


  firstName.oninput = event => {
    firstNameValid = validateRequired(event.target.value);
    toggleClass(firstName, firstNameValid);
  }

  lastName.oninput = event => {
    lastNameValid = validateRequired(event.target.value);
    toggleClass(lastName, lastNameValid);
  }

  emailAddress.oninput = event => {
    emailAddressValid = validateEmail(event.target.value);
    toggleClass(emailAddress, emailAddressValid);
  }

  phoneNumber.oninput = event => {
    phoneNumberValid = validateRequired(event.target.value);
    toggleClass(phoneNumber, phoneNumberValid);
  }

  deliveryAddress.oninput = event => {
    deliveryAddressValid = validateRequired(event.target.value);
    toggleClass(deliveryAddress, deliveryAddressValid)
  }

  zipCode.oninput = event => {
    zipCodeValid = validateRequired(event.target.value);
    toggleClass(zipCode, zipCodeValid);
  }

  postalCity.oninput = event => {
    postalCityValid = validateRequired(event.target.value);
    toggleClass(postalCity, postalCityValid);
  }

  regForm.oninput = () => {
    button.disabled = !firstNameValid || !lastNameValid || !emailAddressValid || !phoneNumberValid || !deliveryAddressValid || !zipCodeValid || !postalCityValid;
  };
};


const toggleClass = (input, valid) => {
  if (!valid) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
  } else {
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
  }
}


document.getElementById('regForm').addEventListener('submit', (e) => {
  e.preventDefault()

  const users = []
  const userdata = new user(firstName.value, lastName.value, emailAddress.value, phoneNumber.value, deliveryAddress.value, zipCode.value, postalCity.value)

  users.push(userdata)


  for (let user of users) {
    const userElement = createUserElement(user);
    $('#user-container').append(userElement);
  }

  let inputs = document.getElementsByTagName('input')
  for (let input of inputs) {
    input.classList.remove('is-valid');

  }
  document.getElementById('regForm').reset();
})

const createUserElement = (user) => {
  const userElement = document.createElement('div');

  const userFlipElement = document.createElement('div');
  userFlipElement.innerHTML = user.fullName;

  const userPanelElement = document.createElement('div');

  userFlipElement.className = "flip"
  userPanelElement.className = "panel"


  userPanelElement.innerHTML = `Id: ${user.id} Email: ${user.emailAddress} Telefon: ${user.phoneNumber} Adress: ${user.deliveryAddress} ${user.zipCode} ${user.postalCity}`;

  $(userFlipElement).click(() => $(userPanelElement).slideToggle('slow'));

  userElement.appendChild(userFlipElement);
  userElement.appendChild(userPanelElement);

  return userElement;

}

main();

