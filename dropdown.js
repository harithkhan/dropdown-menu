function handleDropDownClick(event) {
    const button = event.target.closest(".dropdown-button");
    const buttonStatus = button.dataset.status;
    const navButton = document.querySelectorAll(".nav-button");
    if (buttonStatus === "closed") {
        navButton.forEach((element) => {
            element.classList.remove("hidden");
        });
        button.dataset.status = "open";
    }
    if (buttonStatus === "open") {
        navButton.forEach((element) => {
            element.classList.add("hidden");
        });
        button.dataset.status = "closed";
    }
}

export function attachDropdownListener() {
    const dropDownButton = document.querySelector(".dropdown-button");
    dropDownButton.addEventListener("click", handleDropDownClick);
}
