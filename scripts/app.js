//create data elements to manipulate DOM
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let codestackEmail = document.getElementById("codeStackEmail");
let email = document.getElementById("email");
let rngBtn = document.getElementById("randomBtn");
//Created Data elements to hold the list of previous 5 entries
let firstEntry = document.getElementById("firstEntry");
let secondEntry = document.getElementById("secondEntry");
let thirdEntry = document.getElementById("thirdEntry");
let fourthEntry = document.getElementById("fourthEntry");
let fifthEntry = document.getElementById("fifthEntry");

//create a list or array that holds the last five shown!
let previousArray = [];
//Used bool to test if random index is equal to current and previous 5!
let mySameIndexBool = false;

//create a function that pulls data from the json file!
function getData() {
    return fetch("../data/studentInfo.json")
        .then((response) => response.json())
        .then((data) => {
            return data.students;
        })
}
//Need a function that will return a random data.
function randomData(students) {
    let randomIndex = Math.floor(Math.random() * students.length);
    do {
        mySameIndexBool = false;
        randomIndex = Math.floor(Math.random() * students.length);
        for (let i = 0; i < previousArray.length; i++) {
            if (previousArray[i].firstName === students[randomIndex].firstName) {
                mySameIndexBool = true;
            }
        }
    } while (mySameIndexBool)
    return students[randomIndex];
}

function addLastEntries(currentStudent) {
    if (previousArray.length == 0) {
        previousArray[0] = currentStudent;
        return;
    } else if (previousArray.length < 6) {
        previousArray.unshift(currentStudent)
    }
    else {
        previousArray.pop();
        previousArray.unshift(currentStudent);
    }
    //display previous entries with no errors within console!
    if (previousArray.length >= 6) {
        firstEntry.innerText = previousArray[1].firstName + " " + previousArray[1].lastName + " : " + previousArray[1].codeStackEmail + " : " + previousArray[1].email;
        secondEntry.innerText = previousArray[2].firstName + " " + previousArray[2].lastName + " : " + previousArray[2].codeStackEmail + " : " + previousArray[2].email;
        thirdEntry.innerText = previousArray[3].firstName + " " + previousArray[3].lastName + " : " + previousArray[3].codeStackEmail + " : " + previousArray[3].email;
        fourthEntry.innerText = previousArray[4].firstName+ " " + previousArray[4].lastName + " : " + previousArray[4].codeStackEmail + " : " + previousArray[4].email;
        fifthEntry.innerText = previousArray[5].firstName + " " + previousArray[5].lastName + " : " + previousArray[5].codeStackEmail + " : " + previousArray[5].email;
    }
    else if (previousArray.length >= 5) {
        firstEntry.innerText = previousArray[1].firstName + " " + previousArray[1].lastName + " : " + previousArray[1].codeStackEmail + " : " + previousArray[1].email;
        secondEntry.innerText = previousArray[2].firstName + " " + previousArray[2].lastName + " : " + previousArray[2].codeStackEmail + " : " + previousArray[2].email;
        thirdEntry.innerText = previousArray[3].firstName + " " + previousArray[3].lastName + " : " + previousArray[3].codeStackEmail + " : " + previousArray[3].email;
        fourthEntry.innerText = previousArray[4].firstName+ " " + previousArray[4].lastName + " : " + previousArray[4].codeStackEmail + " : " + previousArray[4].email;
    }
    else if (previousArray.length == 4) {
        firstEntry.innerText = previousArray[1].firstName + " " + previousArray[1].lastName + " : " + previousArray[1].codeStackEmail + " : " + previousArray[1].email;
        secondEntry.innerText = previousArray[2].firstName + " " + previousArray[2].lastName + " : " + previousArray[2].codeStackEmail + " : " + previousArray[2].email;
        thirdEntry.innerText = previousArray[3].firstName + " " + previousArray[3].lastName + " : " + previousArray[3].codeStackEmail + " : " + previousArray[3].email;
    }
    else if (previousArray.length == 3) {
        firstEntry.innerText = previousArray[1].firstName + " " + previousArray[1].lastName + " : " + previousArray[1].codeStackEmail + " : " + previousArray[1].email;
        secondEntry.innerText = previousArray[2].firstName + " " + previousArray[2].lastName + " : " + previousArray[2].codeStackEmail + " : " + previousArray[2].email;
    }
    else {
        firstEntry.innerText = previousArray[1].firstName + " " + previousArray[1].lastName + " : " + previousArray[1].codeStackEmail + " : " + previousArray[1].email;
    }

}

rngBtn.addEventListener('click', () => {
    getData().then((students) => {
        let randomStudent = randomData(students);
        firstName.innerText = randomStudent.firstName;
        lastName.innerText = randomStudent.lastName;
        codestackEmail.innerText = randomStudent.codeStackEmail;
        email.innerText = randomStudent.email;
        //Add a function that will add new entries of the last 5.
        addLastEntries(randomStudent);
    });
})
