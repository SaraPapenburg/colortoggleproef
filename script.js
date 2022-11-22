function menuShow() {
    var hamburger = document.getElementById("mainMenu");
    if (hamburger.style.display === "none") {
        hamburger.style.display = "block";
    }
    else {
        hamburger.style.display = "none";
    }
}

const Red = document.getElementById("Red");

Red.addEventListener('click', function () { document.body.style.backgroundcolor = 'red'; });
