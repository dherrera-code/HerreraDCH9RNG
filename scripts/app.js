//create data elements to manipulate DOM

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let codestackEmail = document.getElementById("codeStackEmail");
let email = document.getElementById("email");
let rngBtn = document.getElementById("randomBtn");
let currentCounter = 0;
//create a list or array that holds the last five shown!

//create a function that pulls data from the json file!
function getData()
{
    return fetch("../data/studentInfo.json")
    .then((response) => response.json())
    .then((data) => {
        // console.log(data.students);
        return data.students;
    })
}
// getData();
//Need a function that will return a random data.
function randomData(students){
    let randomIndex = Math.floor(Math.random() * students.length);
    currentCounter = randomIndex;
    console.log(currentCounter);
    return students[randomIndex];
}

rngBtn.addEventListener('click' , () => {
    getData().then((students) => {
        let randomStudent = randomData(students);
        console.log(randomStudent);
        firstName.innerText = randomStudent.firstName;
        lastName.innerText = randomStudent.lastName;
        codestackEmail.innerText = randomStudent.codeStackEmail;
        email.innerText = randomStudent.email;
        //Add a function that will add new entries of the last 5.
    })
});
