//function that returns the height of a div
function getHeight() {
    const divElement = document.querySelector(".header");
    let elemHeight = divElement.offsetHeight;
    alert(elemHeight);
}

//change the dafault value for input tags
const background = document.querySelector("#bg");
const consoleColor = document.querySelector("#cs");
const keypadColor = document.querySelector("#kp");
const fontColor = document.querySelector("#f");
const applyButton = document.getElementById("applyButton");
const resetIcon = document.querySelector(".fa-rotate-left");

background.value = "#BDDEF2";
consoleColor.value = "#F5F5DC";
keypadColor.value = "#F5F5DC";
fontColor.value = "#000000";

// Function to update styles based on selected colors
function updateStyles() {
    const backgroundColor = background.value;
    const consoleColorValue = consoleColor.value;
    const keypadColorValue = keypadColor.value;
    const fontColorValue = fontColor.value;

    // Apply styles to corresponding elements
    const body = document.querySelector(".container");
    const consoleElement = document.querySelector(".console");
    const keypadElement = document.querySelector(".operator");
    const fontElements = document.querySelectorAll(".container, .title, .attention, .option");

    body.style.backgroundColor = backgroundColor;
    consoleElement.style.backgroundColor = consoleColorValue;
    keypadElement.style.backgroundColor = keypadColorValue;

    // Loop through font elements and update color
    fontElements.forEach(element => {
        element.style.color = fontColorValue;
    });

    // Save selected color values to localStorage
    localStorage.setItem("backgroundColor", backgroundColor);
    localStorage.setItem("consoleColor", consoleColorValue);
    localStorage.setItem("keypadColor", keypadColorValue);
    localStorage.setItem("fontColor", fontColorValue);
}

// Event listener for the "Apply" button click
applyButton.addEventListener("click", updateStyles);

// Function to apply saved color preferences from localStorage
function applySavedColors() {
    const savedBackgroundColor = localStorage.getItem("backgroundColor");
    const savedConsoleColor = localStorage.getItem("consoleColor");
    const savedKeypadColor = localStorage.getItem("keypadColor");
    const savedFontColor = localStorage.getItem("fontColor");

    if (savedBackgroundColor) background.value = savedBackgroundColor;
    if (savedConsoleColor) consoleColor.value = savedConsoleColor;
    if (savedKeypadColor) keypadColor.value = savedKeypadColor;
    if (savedFontColor) fontColor.value = savedFontColor;

    // Apply the saved color preferences
    updateStyles();
}

// Event listener for the "i" icon click to reset properties
resetIcon.addEventListener("click", () => {
    // Reset color input values
    background.value = "#BDDEF2";
    consoleColor.value = "#F5F5DC";
    keypadColor.value = "#F5F5DC";
    fontColor.value = "#000000";

    // Update styles with the default colors
    updateStyles();

    // Remove saved color preferences from localStorage
    localStorage.removeItem("backgroundColor");
    localStorage.removeItem("consoleColor");
    localStorage.removeItem("keypadColor");
    localStorage.removeItem("fontColor");
});

// Apply saved colors when the page loads
applySavedColors();

/**do the calculation here*/
