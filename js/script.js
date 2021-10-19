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

const array1 = ["a", "b", "c"];
let blocktest = document.getElementById("block-img");

blocktest.innerHTML += `<img class="img" src="../assets/image.jpg" alt="image" />`;

/* array1.forEach(function(currentValue, v) {
  console.log(currentValue, v)
}); */

/* 1. создать массив строк (название картинок)
2. вызвать цикл forEach 
3. создать перменую с группой картинок
 */
