const studentContainer = document.querySelector(".student-container");
const addBtnGryffindor = document.getElementById("add-btn-gryffindor");
const addBtnRavenclaw = document.getElementById("add-btn-ravenclaw");
const addBtnSlytherin = document.getElementById("add-btn-slytherin");
const addBtnHufflepuff = document.getElementById("add-btn-hufflepuff");

let hogwartsStudents;

//Read
async function fetchStudent() {
  const hogwartsStudentRequest = await fetch(
    "https://hp-api.onrender.com/api/characters/students"
  );
  let resultHogwartsStudent = await hogwartsStudentRequest.json();
  return resultHogwartsStudent;
}

console.log(fetchStudent());

async function fetchAndShowStudentGryffindor() {
  try {
    hogwartsStudents = await fetchStudent();

    showAllGryffindor();

    console.log("Inside fetchAndShowStudent function", hogwartsStudents);
  } catch (error) {
    console.log("unable to load Hogwarts Student", error);
  }
}

async function fetchAndShowStudentRavenclaw() {
  try {
    hogwartsStudents = await fetchStudent();

    showAllRavenclaw();

    console.log("Inside fetchAndShowStudent function", hogwartsStudents);
  } catch (error) {
    console.log("unable to load Hogwarts Student", error);
  }
}

async function fetchAndShowStudentSlytherin() {
  try {
    hogwartsStudents = await fetchStudent();

    showAllSlytherin();

    console.log("Inside fetchAndShowStudent function", hogwartsStudents);
  } catch (error) {
    console.log("unable to load Hogwarts Student", error);
  }
}

async function fetchAndShowStudentHufflepuff() {
  try {
    hogwartsStudents = await fetchStudent();

    showAllHufflepuff();

    console.log("Inside fetchAndShowStudent function", hogwartsStudents);
  } catch (error) {
    console.log("unable to load Hogwarts Student", error);
  }
}

//fetchAndShowStudent();

//Read to show gryffindor students
function showAllGryffindor() {
  studentContainer.innerHTML = "";

  hogwartsStudents
    .filter((gryffindorMember) => gryffindorMember.house === "Gryffindor")
    .forEach((gryffindorMember, index) => {
      const gryffindorCard = document.createElement("div");

      //Delete functionality
      const deleteBtn = document.createElement("Button");
      deleteBtn.innerHTML = "Delete student";
      deleteBtn.style.backgroundColor = "red";
      deleteBtn.addEventListener("click", function () {
        deleteStudentGryffindor(index);
      });

      let gryffindorAge = gryffindorMember.yearOfBirth;
      if (gryffindorAge == null) {
        gryffindorAge = "Unknown";
      } else {
        gryffindorAge = 2023 - gryffindorAge;
      }

      gryffindorCard.innerHTML = `<img src="${gryffindorMember.image}" style="width: 100px"/> <h3>${gryffindorMember.name}</h3><h4>${gryffindorAge}</h4>`;
      studentContainer.appendChild(gryffindorCard);
      gryffindorCard.appendChild(deleteBtn);
      console.log(gryffindorMember.name);
    });
}

//Read to show ravenclaw Students
function showAllRavenclaw() {
  studentContainer.innerHTML = "";

  hogwartsStudents
    .filter((ravenclawMember) => ravenclawMember.house === "Ravenclaw")
    .forEach((ravenclawMember, index) => {
      const ravenclawCard = document.createElement("div");

      //Delete functionality
      const deleteBtn = document.createElement("Button");
      deleteBtn.innerHTML = "Delete student";
      deleteBtn.style.backgroundColor = "red";
      deleteBtn.addEventListener("click", function () {
        deleteStudentRavenclaw(index);
      });

      let ravenclawAge = ravenclawMember.yearOfBirth;
      if (ravenclawAge == null) {
        ravenclawAge = "Unknown";
      } else {
        ravenclawAge = 2023 - ravenclawAge;
      }

      ravenclawCard.innerHTML = `<img src="${ravenclawMember.image}" style="width: 100px"/> <h3>${ravenclawMember.name}</h3><h4>${ravenclawAge}</h4>`;
      studentContainer.appendChild(ravenclawCard);
      ravenclawCard.appendChild(deleteBtn);
      console.log(ravenclawMember.name);
    });
}

//Read to show Slytherin Students
function showAllSlytherin() {
  studentContainer.innerHTML = "";

  hogwartsStudents
    .filter((slytherinMember) => slytherinMember.house === "Slytherin")
    .forEach((slytherinMember, index) => {
      const slytherinCard = document.createElement("div");

      //Delete functionality
      const deleteBtn = document.createElement("Button");
      deleteBtn.innerHTML = "Delete student";
      deleteBtn.style.backgroundColor = "red";
      deleteBtn.addEventListener("click", function () {
        deleteStudentSlytherin(index);
      });

      let slytherinAge = slytherinMember.yearOfBirth;
      if (slytherinAge == null) {
        slytherinAge = "Unknown";
      } else {
        slytherinAge = 2023 - slytherinAge;
      }

      slytherinCard.innerHTML = `<img src="${slytherinMember.image}" style="width: 100px"/> <h3>${slytherinMember.name}</h3><h4>${slytherinAge}</h4>`;
      studentContainer.append(slytherinCard);
      slytherinCard.append(deleteBtn);
      console.log(slytherinMember.name);
    });
}

//Read to show Hufflepuff Students
function showAllHufflepuff() {
  studentContainer.innerHTML = "";

  hogwartsStudents
    .filter((hufflepuffMember) => hufflepuffMember.house === "Hufflepuff")
    .forEach((hufflepuffMember, index) => {
      const hufflepuffCard = document.createElement("div");

      //Delete functionality
      const deleteBtn = document.createElement("Button");
      deleteBtn.innerHTML = "Delete student";
      deleteBtn.style.backgroundColor = "red";
      deleteBtn.addEventListener("click", function () {
        deleteStudentHufflepuff(index);
      });

      let hufflepuffAge = hufflepuffMember.yearOfBirth;
      if (hufflepuffAge == null) {
        hufflepuffAge = "Unknown";
      } else {
        hufflepuffAge = 2023 - hufflepuffAge;
      }

      hufflepuffCard.innerHTML = `<img src="${hufflepuffMember.image}" style="width: 100px"/> <h3>${hufflepuffMember.name}</h3><h4>${hufflepuffAge}</h4>`;
      studentContainer.append(hufflepuffCard);
      hufflepuffCard.append(deleteBtn);
      console.log(hufflepuffMember.name);
    });
}

function deleteStudentGryffindor(index) {
  console.log("Inside delete function");
  hogwartsStudents.splice(index, 1);
  console.log("after deletion", hogwartsStudents);
  showAllGryffindor();
}

function deleteStudentRavenclaw(index) {
  console.log("Inside delete function");
  hogwartsStudents.splice(index, 1);
  console.log("after deletion", hogwartsStudents);
  showAllRavenclaw();
}

function deleteStudentSlytherin(index) {
  console.log("Inside delete function");
  hogwartsStudents.splice(index, 1);
  console.log("after deletion", hogwartsStudents);
  showAllSlytherin();
}

function deleteStudentHufflepuff(index) {
  console.log("Inside delete function");
  hogwartsStudents.splice(index, 1);
  console.log("after deletion", hogwartsStudents);
  showAllHufflepuff();
}

addBtnGryffindor.onclick = fetchAndShowStudentGryffindor;
addBtnRavenclaw.onclick = fetchAndShowStudentRavenclaw;
addBtnSlytherin.onclick = fetchAndShowStudentSlytherin;
addBtnHufflepuff.onclick = fetchAndShowStudentHufflepuff;
