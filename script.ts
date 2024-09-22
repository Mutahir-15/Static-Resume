const toggleButton = document.getElementById ("toggleButton") as HTMLButtonElement;
const interestslist = document.getElementById ("interestslist") as HTMLUListElement;

toggleButton.addEventListener("click", () => {
    if (interestslist.style.display === "none") {
        interestslist.style.display = "block";
        toggleButton.textContent = "Hide Interests";
    } else {
        interestslist.style.display = "none";
        toggleButton.textContent = "Show Interests";
    }
});