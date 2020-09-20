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
    localStorage.setItem("user", input.value);
    const splitUrl = location.href.split("/");
    splitUrl[splitUrl.length - 1] = "question.html";
    container.classList.add("slide-out-left");
    location.replace(splitUrl.join("/"));
  }
});
