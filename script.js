const gryffindorContainer = document.querySelector(".gryffindor-container");
const addBtnGryffindor = document.getElementById("add-btn-gryffindor");

const ravenclawContainer = document.querySelector(".ravenclaw-container");
const addBtnRavenclaw = document.getElementById("add-btn-ravenclaw");

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

async function fetchAndShowStudent() {
  try {
    hogwartsStudents = await fetchStudent();

    showAllGryffindor();
    showAllRavenclaw();

    console.log("Inside fetchAndShowStudent function", hogwartsStudents);
  } catch (error) {
    console.log("unable to load Hogwarts Student", error);
  }
}

//fetchAndShowStudent();

//Read to show gryffindor students
function showAllGryffindor() {
  gryffindorContainer.innerHTML = "";

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

      gryffindorCard.innerHTML = `<img src="${gryffindorMember.image}" style="width: 100px"/> <h3>${gryffindorMember.name}</h3>`;
      gryffindorContainer.append(gryffindorCard);
      gryffindorCard.append(deleteBtn);
      console.log(gryffindorMember.name);
    });
}

//Read to show ravenclaw Students
function showAllRavenclaw() {
  ravenclawContainer.innerHTML = "";

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

      ravenclawCard.innerHTML = `<img src="${ravenclawMember.image}" style="width: 100px"/> <h3>${ravenclawMember.name}</h3>`;
      ravenclawContainer.append(ravenclawCard);
      ravenclawCard.append(deleteBtn);
      console.log(ravenclawMember.name);
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

addBtnGryffindor.onclick = fetchAndShowStudent;
addBtnRavenclaw.onclick = fetchAndShowStudent;
