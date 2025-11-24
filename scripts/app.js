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

//create a list or array that holds the last five shown!
let previousArray = [];
let mySameIndexBool = false;

//create a function that pulls data from the json file!
function getData() {
    return fetch("../data/studentInfo.json")
        .then((response) => response.json())
        .then((data) => {
            return data.students;
        })
}
// getData();
//Need a function that will return a random data.
function randomData(students) {
    let randomIndex = Math.floor(Math.random() * students.length);
    do {
        mySameIndexBool = false;
        randomIndex = Math.floor(Math.random() * students.length);
        console.log("Return current length from RNG: " + previousArray.length);
        for (let i = 0; i < previousArray.length; i++) {
            console.log(previousArray[i].firstName + " : " + students[randomIndex].firstName)
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
        firstEntry.innerText = previousArray[1].firstName;
        secondEntry.innerText = previousArray[2].firstName;
        thirdEntry.innerText = previousArray[3].firstName;
        fourthEntry.innerText = previousArray[4].firstName;
        fifthEntry.innerText = previousArray[5].firstName;
    }
    else if (previousArray.length >= 5) {
        firstEntry.innerText = previousArray[1].firstName;
        secondEntry.innerText = previousArray[2].firstName;
        thirdEntry.innerText = previousArray[3].firstName;
        fourthEntry.innerText = previousArray[4].firstName;
    }
    else if (previousArray.length == 4) {
        firstEntry.innerText = previousArray[1].firstName;
        secondEntry.innerText = previousArray[2].firstName;
        thirdEntry.innerText = previousArray[3].firstName;
    }
    else if (previousArray.length == 3) {
        firstEntry.innerText = previousArray[1].firstName;
        secondEntry.innerText = previousArray[2].firstName;
    }
    else {
        firstEntry.innerText = previousArray[1].firstName;
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
