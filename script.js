const checkbox = document.getElementById("checkbox");
const cellular = document.getElementById("cellular");
const professional2 = document.getElementById("professional2");
const professional1 = document.getElementById("professional1");

checkbox.addEventListener("click", () => {
  professional1.textContent = professional1.textContent === "$199.99" ? "$19.99" : "$199.99";
  cellular.textContent =
    cellular.textContent === "$249.99" ? "$24.99 " : "$249.99";
  professional2.textContent = professional2.textContent === "$399.99" ? "$39.99" : "$399.99";
});
