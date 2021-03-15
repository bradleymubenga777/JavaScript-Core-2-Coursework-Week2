//PART ONE ---------------------------------------------------

//Store Buttons As Variables
let blueBtn = document.getElementById('blueBtn');
let orangeBtn = document.getElementById('orangeBtn');
let greenBtn = document.getElementById('greenBtn');

//Store Elements You Want To Change
let jumbotron = document.getElementById('jumbotron');
let donateBtn = document.getElementById('donBtn');
let volunteerBtn = document.getElementById('vonBtn');

//Blue Button Event
blueBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = '#588fbd';
    donateBtn.style.backgroundColor = '#ffa500';
    volunteerBtn.style.backgroundColor = 'black'
    volunteerBtn.style.color = 'white';
});

//Orange Button Event
orangeBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = '#f0ad4e';
    donateBtn.style.backgroundColor = '#5751fd';
    volunteerBtn.style.backgroundColor = '#31b0d5'
    volunteerBtn.style.color = 'white';
});

//Green Button Event
greenBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = '#87ca8a';
    donateBtn.style.backgroundColor = 'black';
    volunteerBtn.style.backgroundColor = '#8c9c08'
/*     volunteerBtn.style.color = 'white'; */
});

//PART TWO ---------------------------------------------------

//Declaring Our Input Values
let emailInput = document.getElementById('exampleInputEmail1');
let nameInput = document.getElementById('example-text-input');
let textArea = document.getElementById('exampleTextarea');
let submitBtn = document.getElementById('submitBtn');
let alert = document.getElementById('alertThing');

//Check If Email, Name & Description Values Are Not Empty.
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (emailInput.value.length > 0 && nameInput.value.length > 0 && textArea.value.length > 0) {
        alert.classList.toggle('d-none');
    }
    
    else {
        emailInput.style.backgroundColor = 'red';
        nameInput.style.backgroundColor = 'red';
        textArea.style.backgroundColor = 'red';
    }
})