var allNavItems = document.querySelectorAll(".link");
allNavItems.forEach(function (currentValue) {
    return currentValue.addEventListener("click", makeActive);
});
function makeActive(e) {
    var currentElement = e.target;
    var currentActive = document.querySelector(".activity");
    if (currentActive) {
        currentActive.classList.remove("activity");
        currentElement.classList.add("activity");
    }
}