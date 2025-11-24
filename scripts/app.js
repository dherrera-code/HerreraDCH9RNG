//create data elements to manipulate DOM

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let codestackEmail = document.getElementById("codeStackEmail");
let email = document.getElementById("email");
let rngBtn = document.getElementById("randomBtn");

let firstEntry = document.getElementById("firstEntry");
let secondEntry = document.getElementById("secondEntry");
let thirdEntry = document.getElementById("thirdEntry");
let fourthEntry = document.getElementById("fourthEntry");
let fifthEntry = document.getElementById("fifthEntry");

// let currentCounter = 0;
//create a list or array that holds the last five shown!
let previousArray = [];

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
    // console.log(currentCounter);
    return students[randomIndex];
}

function addLastEntries(currentStudent){
    if (previousArray.length == 0)
    {
        previousArray[0] = currentStudent;
        console.log(previousArray[0]);
    }else if(previousArray.length < 5)
    {
        previousArray.unshift(currentStudent)
    }
    else{
        previousArray.pop();
        previousArray.unshift(currentStudent);
    }
    for(let i = 0; i < previousArray.length; i++)
    {
        console.log(previousArray[i].firstName);
    }
    firstEntry.innerText = previousArray[0].firstName;
    secondEntry.innerText = previousArray[1].firstName;
    thirdEntry.innerText = previousArray[2].firstName;
    fourthEntry.innerText = previousArray[3].firstName;
    fifthEntry.innerText =previousArray[4].firstName;
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
        addLastEntries(randomStudent);
    });
})
