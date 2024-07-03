const coursesDiv = document.getElementById("courses");
const techSpan = document.getElementById("technologies");
const roleSpan = document.getElementById("role");
const description = document.getElementById("description")

const persoanlDescription = "I am Mohamed Ismail Fazil. I am instructor, developer, motivator and content creator. I love education people and educational materials. In January 2019, I also created a teaching material Javascript For Everyone. In December 2019, I created 30 Days Of Python challenge and in January 2020 30 Days Of Javascript challenge.";
description.innerText = persoanlDescription

const courses = [
  "javascript for everyone",
  "30days of python",
  "30days of javascript",
];

courses.map((x) => {
  const course = document.createElement("div");
  course.className = "course";
  course.innerText = x.toUpperCase();
  coursesDiv.appendChild(course);
});

const technologies = [
  { name: "html", color: "lightcoral" },
  { name: "css", color: "lightsalmon" },
  { name: "javascript", color: "lightseagreen" },
  { name: "react", color: "lightgreen" },
  { name: "redux", color: "lightpink" },
];
let techIndex = 0;
function updateTechnology() {
  techSpan.style.opacity = 0;

  setTimeout(() => {
    techSpan.innerText = technologies[techIndex].name.toUpperCase();
    techSpan.style.color = technologies[techIndex].color;
    techSpan.style.opacity = 1;

    techIndex = (techIndex + 1) % technologies.length;
  }, 500);
}

updateTechnology();
setInterval(updateTechnology, 2000);

const myRoles = [
  "🔥 Engineer",
  "💻 Programmer",
  "📖 Instructor",
  "🏏 Cricketer",
];
let roleIndex = 0;
roleSpan.innerText = myRoles[0];
function updateMyRole() {
  roleSpan.style.opacity = 0;

  setTimeout(() => {
    roleSpan.innerText = myRoles[roleIndex];
    roleSpan.style.opacity = 1;
    roleIndex = (roleIndex + 1) % myRoles.length;
  }, 500);
}

updateMyRole();
setInterval(updateMyRole, 2000);
