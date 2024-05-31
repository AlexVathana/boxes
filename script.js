
    const naButton = document.getElementById("naButton");
    const euButton = document.getElementById("euButton");
    const saButton = document.getElementById("saButton");
    const asiaButton = document.getElementById("asiaButton");
    const showAllButton = document.getElementById("allButton");
    const boxes = document.querySelectorAll(".box");


    const filterBoxes = (continent) => {
        boxes.forEach((box) => {
            if (continent === "all" || box.getAttribute("data-continent") === continent) {
                box.classList.remove("hidden");
            } else {
                box.classList.add("hidden");
            }
        });
    };

    allButton.addEventListener("click", () => filterBoxes("all"));
    euButton.addEventListener("click", () => filterBoxes("europe"));
    naButton.addEventListener("click", () => filterBoxes("north-america"));
    saButton.addEventListener("click", () => filterBoxes("south-america"));
    asiaButton.addEventListener("click", () => filterBoxes("asia"));