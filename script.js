document.addEventListener("DOMContentLoaded", function() {
    const firstButton = document.getElementById("first_button");
    const secondButton = document.getElementById("second_button");
    const thirdButton = document.getElementById("third_button");
    const fourthButton = document.getElementById("fourth_button");

    const firstContainer = document.querySelector(".first_container");
    const secondContainer = document.querySelector(".second_container");
    const thirdContainer = document.querySelector(".third_container");

    // Scroll smoothly to the second container
    firstButton.addEventListener("click", () => {
        secondContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // Scroll smoothly back to the first container
    secondButton.addEventListener("click", () => {
        firstContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // Scroll smoothly to the third container
    thirdButton.addEventListener("click", () => {
        thirdContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // Scroll smoothly back to the second container
    fourthButton.addEventListener("click", () => {
        secondContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});
