let boxes = document.querySelectorAll(".prep-checklist input");
let progress = document.querySelector("#progress");

function showProgress() {
    let total = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            total = total + 1;
        }
    }

    progress.textContent = total + " of 5 tasks complete.";
}

if (progress !== null) {
    showProgress();

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("change", showProgress);
    }
}
// Update the footer year
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector("#year").textContent = currentYear;