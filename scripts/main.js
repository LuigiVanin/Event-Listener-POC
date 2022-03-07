let currentColor = null;
let correctCount = 0;
const colorOptions = [
    "#424242",
    "#f1bc2a",
    "#ff8a47",
    "#516dec",
    "#e03074",
    "#99d43a",
];
let interval = null;

function toggleInfoBox() {
    document.querySelector(".game-info").classList.toggle("hidden");
}

function showButton() {
    document.querySelector(".button-field button").classList.remove("hidden");
}

function selectColorBoxEffect(statement = "correct") {
    const colorBox = document.querySelector(".current-color");
    colorBox.classList.add(statement);
    setTimeout(() => {
        colorBox.classList.remove("correct");
        colorBox.classList.remove("wrong");
    }, 1500);
}
function gameOverCheck() {
    if (correctCount === 4) {
        const game = document.querySelector(".game");
        interval = setInterval(() => {
            endScreen = document.querySelector(".end-screen");
            endScreen.style.setProperty(
                "background",
                colorPicker([
                    ...colorOptions,
                    "#d6d6d6",
                    "#b456eb",
                    "#e75f5f",
                    "#ffa755",
                    "#414141",
                ])
            );
        }, 3000);
        game.classList.add("animation");
        setTimeout(() => {
            setTimeout(() => {
                game.remove();
            }, 1000);
            congratulationScreen();
        }, 2000);
    }
}

function checkColor(color, element) {
    if (element.classList.contains("select")) {
        return;
    }
    if (color !== currentColor) {
        currentColor = null;
        renderCurrentColor();
        selectColorBoxEffect("wrong");
        return;
    }
    element.classList.add("select");
    element.querySelector(".after").style.setProperty("background", color);
    correctCount++;
    selectColorBoxEffect();
    gameOverCheck();
}

function congratulationScreen() {
    document.querySelector(".end-screen").classList.add("show");
}

function setEventColor() {
    const colorBox = [...document.querySelectorAll(".event .color-box")];
    const colors = ["#ff8a47", "#f1bc2a", "#516dec", "#99d43a"];
    colorBox.forEach((item, idx) => {
        item.style.setProperty("background", colors[idx]);
    });
}

function renderCurrentColor() {
    const color = document.querySelector(".color-box");
    if (currentColor === null) {
        color.style.setProperty("background", "#e2e2e2");
        return;
    }
    color.style.setProperty("background", currentColor);
}

function selectColor(color) {
    currentColor = color;
    renderCurrentColor();
}

function startGame() {
    setEventColor();
    document.addEventListener("keypress", (event) => {
        console.log(event.key);
        if (event.key === "k") {
            currentColor = "#f1bc2a";
            renderCurrentColor();
        }
    });
    const screen = document.querySelector(".challenge");
    const nextScreen = document.querySelector(".game");
    screen.classList.add("remove");
    nextScreen.classList.add("show");
    setTimeout(() => {
        screen.remove();
    }, 2000);
}

function skipDialog() {
    const dialogs = document.querySelectorAll(".dialog p");
    if (dialogs.length === 1) {
        return;
    }
    if (dialogs.length === 2) {
        document.querySelector(".dialog span").remove();
        showButton();
    }
    dialogs[1].classList.add("show");
    dialogs[0].remove();
}

function startSecondPage() {
    const page = document.querySelector(".challenge .bob");
    const dialogs = document.querySelectorAll(".dialog p");
    dialogs[0].classList.add("show");
    page.classList.add("show");
    document.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            skipDialog();
        }
    });
}

function colorPicker(colorRollet = colorOptions) {
    return colorRollet[parseInt(Math.random() * colorRollet.length)];
}

function destroyFisrtPainel() {
    let painel = document.querySelector(".greeting");
    painel.classList.add("hidden");
    setTimeout(() => {
        painel.remove();
        startSecondPage();
    }, 500);
}

function startApp() {
    const skip = document.querySelector(".skip");
    skip.classList.toggle("hidden");
    const color = colorPicker();
    document.querySelector(".greeting").style.setProperty("background", color);
    document.querySelector(":root").style.setProperty("--shadow-color", color);
    setTimeout(() => {
        skip.addEventListener("click", destroyFisrtPainel);
    }, 500);
}

startApp();
