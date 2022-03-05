const skip = document.querySelector(".skip");

function showButton() {
    document.querySelector(".button-field button").classList.remove("hidden");
}

function startGame() {
    const screen = document.querySelector(".challenge");
    screen.classList.add("remove");
    setTimeout(screen.remove, 1000);
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

function colorPicker() {
    const colorRollet = [
        "#424242",
        "#f1bc2a",
        "#ff8a47",
        "#516dec",
        "e03074",
        "#99d43a",
    ];
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
    skip.classList.toggle("hidden");
    const color = colorPicker();
    document.querySelector(".greeting").style.setProperty("background", color);
    document.querySelector(":root").style.setProperty("--shadow-color", color);
    setTimeout(() => {
        skip.addEventListener("click", destroyFisrtPainel);
    }, 500);
}

startApp();
