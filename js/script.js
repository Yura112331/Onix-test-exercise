let allNavItems = document.querySelectorAll(".link");
allNavItems.forEach(function (currentValue) {
  return currentValue.addEventListener("click", makeActive);
});
function makeActive(e) {
  let currentElement = e.target;
  let currentActive = document.querySelector(".activity");
  if (currentActive) {
    currentActive.classList.remove("activity");
    currentElement.classList.add("activity");
  }
}

let completedTasks = document.getElementById("completed");
completedTasks.onclick = function () {
  let openTasks = document.getElementById("number2");

  if (Number(openTasks.innerHTML) > 0) {
    if (confirm("Are you sure you want to change the number of tasks?")) {
      document.getElementById("number1");
      let namenumber = document.getElementById("number1");
      namenumber.innerHTML = Number(namenumber.innerHTML) + 1;
      openTasks.innerHTML = Number(openTasks.innerHTML) - 1;
    }
  }
};

const images = ["image.jpg", "img1.png", "img2.png", "img3.png"];
let blocktest = document.getElementById("block-img");
images.forEach(function(value) {
  blocktest.innerHTML += `<img class="img" src="../assets/` + value + `" alt="image" />`;

 
})

let img = blocktest.querySelectorAll("img");
img.forEach(function(value, index) {
 value.addEventListener("click", function(){
  let notificationNumber = document.getElementById("notification");
  notificationNumber.innerHTML = index;
 })
})