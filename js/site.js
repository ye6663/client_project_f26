
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector("#year").textContent = currentYear;


function showProgress() {
    let boxes = document.querySelectorAll(".prep-checklist input");
    let total = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            total = total + 1;
        }
    }

    document.querySelector("#progress").textContent =
        total + " of 5 tasks complete.";
}

// Show the count
if (document.querySelector("#progress") !== null) {
    showProgress();
}