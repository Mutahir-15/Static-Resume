var toggleButton = document.getElementById("toggleButton");
var interestslist = document.getElementById("interestslist");
toggleButton.addEventListener("click", function () {
    if (interestslist.style.display === "none") {
        interestslist.style.display = "block";
        toggleButton.textContent = "Hide Interests";
    }
    else {
        interestslist.style.display = "none";
        toggleButton.textContent = "Show Interests";
    }
});
