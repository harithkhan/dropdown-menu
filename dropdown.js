function handleDropDownClick(event) {
    const button = event.target.closest(".dropdown-button");
    const buttonStatus = button.dataset.status;
    const buttonName = button.dataset.name;
    const dropDownItems = document.querySelectorAll(
        `.dropdown-item[data-name="${buttonName}"]`
    );
    if (buttonStatus === "closed") {
        dropDownItems.forEach((element) => {
            element.classList.remove("hidden");
        });
        button.dataset.status = "open";
    }
    if (buttonStatus === "open") {
        dropDownItems.forEach((element) => {
            element.classList.add("hidden");
        });
        button.dataset.status = "closed";
    }
}

export function attachDropdownListener() {
    const dropDownButton = document.querySelectorAll(".dropdown-button");
    dropDownButton.forEach((button) => {
        button.addEventListener("click", handleDropDownClick);
    });
}
