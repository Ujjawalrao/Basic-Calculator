let screen = document.getElementById("screen");
let buttons = document.querySelectorAll(".btn");
// This code for not print alphabets on screen ;
screen.addEventListener("input", () => {
  screen.value = screen.value.replace(/[^0-9+\-*/.]/g, "");
});

function calculate() {
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let btnValue = btn.textContent;
      let current = screen.value;

      if (btnValue === "Clear All") {
        screen.value = "";
        return;
      }

      if (btnValue === "=") {
        if (current === "") return;
        screen.value = eval(current);
        return;
      }

      // Block operator if no number before ;
      if (/^[+\-*/]$/.test(btnValue) && current === "") return;
      // Block double operators (++ -- ** //) ;
      if (/^[+\-*/]$/.test(btnValue) && /[+\-*/]$/.test(current)) return;

      screen.value += btnValue;
    });
  });
}

calculate();
