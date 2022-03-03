const skip = document.querySelector(".skip");

function startSecondPage() {
    const page = document.querySelector(".challenge .bob");
    page.classList.add("show");
}

function colorPicker() {
    const colorRollet = [
        "#424242",
        "#f1bc2a",
        "#ff8a47",
        "#516dec",
        "e03074",
        "#99d43a",
        "#424242",
        "#424242",
    ];
    return colorRollet[parseInt(Math.random() * colorRollet.length)];
}

function destroyFisrtPainel() {
    let painel = document.querySelector(".greeting");
    painel.classList.add("hidden");
    setTimeout(() => {
        painel.remove();
        startSecondPage();
    }, 1000);
}

function startApp() {
    skip.classList.toggle("hidden");
    document
        .querySelector(".greeting")
        .style.setProperty("background", colorPicker());
    setTimeout(() => {
        skip.addEventListener("click", destroyFisrtPainel);
    }, 500);
}

startApp();
