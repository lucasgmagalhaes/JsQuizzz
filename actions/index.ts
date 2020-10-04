const btn = document.getElementById("iniciar") as HTMLButtonElement;
const input = document.getElementById("playerName") as HTMLInputElement;
const container = document.getElementById("container") as HTMLDivElement;

btn.disabled = true;

input.addEventListener("input", () => {
  if (!input.value || input.value.trim() === "") {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
});

btn.addEventListener("click", () => {
  if (input.value) {
    localStorage.clear();
    localStorage.setItem("user", input.value);
    localStorage.setItem("number", "0");
    redirect("question.html", container);
  }
});

//navigator.serviceWorker.register("../serviceWorker.js");
