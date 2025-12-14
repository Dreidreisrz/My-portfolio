const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

const editJobBtn = document.getElementById("editJobBtn");
const jobTitle = document.querySelector(".job-title");

editJobBtn.addEventListener("click", function () {
    const newTitle = prompt("Enter new job title:");
    if (newTitle) {
        jobTitle.textContent = newTitle;
    }
});

const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");

toggleSkillsBtn.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
});

const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.addEventListener("keyup", function () {
    counter.textContent = 200 - msgBox.value.length;
});
function validateForm() {
    const name = document.getElementById("nameField").value.trim();
    const email = document.getElementById("emailField").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in both Name and Email.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

const dateDisplay = document.getElementById("dateDisplay");
const today = new Date();
dateDisplay.textContent = "Today's date: " + today.toDateString();

function showGreeting() {
    const greetingText = document.getElementById("greetingText");
    const hour = new Date().getHours();

    if (hour < 12) {
        greetingText.textContent = "Good Morning!";
    } else if (hour < 18) {
        greetingText.textContent = "Good Afternoon!";
    } else {
        greetingText.textContent = "Good Evening!";
    }
}
showGreeting();

const changePicBtn = document.getElementById("changePicBtn");
const profileImg = document.querySelector(".profile-img");
let isOriginal = true;

changePicBtn.addEventListener("click", function () {
    if (isOriginal) {
        profileImg.src = "profile2.jpg"; // replace with second image
    } else {
        profileImg.src = "profile.jpg"; // original image
    }
    isOriginal = !isOriginal;
});