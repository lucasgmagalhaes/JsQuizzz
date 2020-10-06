const btn = document.getElementById("iniciar") as HTMLButtonElement;
const input = document.getElementById("playerName") as HTMLInputElement;
const container = document.getElementById("container") as HTMLDivElement;

if (btn) {
  btn.disabled = true;
  btn.addEventListener("click", () => {
    if (input.value) {
      localStorage.clear();
      localStorage.setItem("user", input.value);
      localStorage.setItem("number", "0");
      redirect("question.html", container);
    }
  });
}

if (input) {
  input.addEventListener("input", () => {
    if (!input.value || input.value.trim() === "") {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  });
}

navigator.serviceWorker.register("../serviceWorker.js");
