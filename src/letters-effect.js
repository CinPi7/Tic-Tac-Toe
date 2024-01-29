document.addEventListener("DOMContentLoaded", function () {
  const titleElement = document.getElementById("cool-colors");
  const titleText = "tic-tac-toe";

  for (let char of titleText) {
    const span = document.createElement("span");
    span.textContent = char;
    span.classList.add("cool-colors");
    titleElement.appendChild(span);
  }
});
