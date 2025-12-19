let screen = document.getElementById("screen");
let buttons = document.querySelectorAll(".btn");

screen.addEventListener("input", () => {
    screen.value = screen.value.replace(/[^0-9+\-*/.]/g, "");
  });

function calculate(params) {
  buttons.forEach((btn) => {
    let btnValue = btn.textContent;
    btn.addEventListener("click", () => {
      if (btnValue === "Clear All") {
        screen.value = "";
      } else if (btnValue === "=") {
        if (screen.value === '') return
        screen.value = eval(screen.value);
      } else {
        screen.value += btnValue;
      }
    });
  });
}
calculate();
