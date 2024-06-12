const naButton = document.getElementById("naButton");
const euButton = document.getElementById("euButton");
const saButton = document.getElementById("saButton");
const asiaButton = document.getElementById("asiaButton");
const showAllButton = document.getElementById("allButton");
const boxes = document.querySelectorAll(".box");


const originalOrder = Array.from(boxes);

const filterBoxes = (continent) => {
    const container = document.querySelector(".container");


    if (continent === "all") {
        originalOrder.forEach((box) => {
            box.classList.remove("hidden");
            container.appendChild(box);
        });
    } else {
        const filteredBoxes = [];
        boxes.forEach((box) => {
            if (box.getAttribute("data-continent") === continent) {
                box.classList.remove("hidden");
                filteredBoxes.push(box);
            } else {
                box.classList.add("hidden");
                 container.appendChild(box);
            }
        });

      

      
    }
};

showAllButton.addEventListener("click", () => filterBoxes("all"));
euButton.addEventListener("click", () => filterBoxes("europe"));
naButton.addEventListener("click", () => filterBoxes("north-america"));
saButton.addEventListener("click", () => filterBoxes("south-america"));
asiaButton.addEventListener("click", () => filterBoxes("asia"));
