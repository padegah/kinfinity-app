const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const menuItem = document.querySelectorAll(".menu-item");

menuBtn.addEventListener("click", () => {
    toggle();
});

menuItem.forEach(item => {
    item.addEventListener("click", () => {
        if(menuBtn.classList.contains("open")){
            toggle();
        }
    });
});

function toggle(){
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
}

const submit = document.getElementById("fcf-button");
let formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const formNumber = document.getElementById("number");
const formMessage = document.getElementById("message");

let userName;
let userEmail;
let userNumber;
let userMessage;
// let status = false;

submit.addEventListener("click", formValidation);

function formValidation(e) {
    e.preventDefault();
    
    // name validation
    // console.log(formName.value);
    userName = formName.value;
    let reName = /^[A-Za-z]+$/;

    if(!userName) {
        alert("Name field cannot be blank");
        return;
    }

    if(!reName.test(userName)) {
        alert("Name is invalid.");
        return;
    }


    // email validation
    userEmail = formEmail.value;
    let reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(!userEmail) {
        alert("Email field cannot be blank");
        return;
    }

    if(!reEmail.test(userEmail)) {
        alert("Email is invalid");
        return;
    }


    // number validation
    userNumber = formNumber.value;
    let reNumber = /^\d{10}$/;
    let prefix = ['020','050', '023', '024', '054', '055', '027', '057', '026', '028']
    let mobPrefix = userNumber.substring(0,3);

    // console.log(userNumber);
    // console.log(mobPrefix);

    if(!userNumber) {
        alert("Number field cannot be blank");
        return;
    }

    if(!reNumber.test(userNumber)) {
        alert("Mobile number is not valid.");
        return;
    }

    if(!prefix.includes(mobPrefix)) {
        alert("Mobile prefix is invalid");
        return;
    }


    // message validation
    userMessage = formMessage.value;

    if(!userMessage) {
        alert("Message field cannot be blank");
        return;
    }

    let feedback = "";

    feedback = `Hello ${userName},  thank you for contacting us. Your meesage "${userMessage}" is very important to us. We will look into it and contact you on ${userNumber} as well as ${userEmail}. Have a nice day!`;

    alert(feedback);

    clearFields();

}

function clearFields() {
    formName.value = '';
    formEmail.value = '';
    formNumber.value = '';
    formMessage.value = '';
}