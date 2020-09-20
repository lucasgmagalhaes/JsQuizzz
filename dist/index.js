var btn = document.getElementById("iniciar");
var input = document.getElementById("playerName");
var container = document.getElementById("container");
btn.disabled = true;
input.addEventListener("input", function () {
    if (!input.value || input.value.trim() === "") {
        btn.disabled = true;
    }
    else {
        btn.disabled = false;
    }
});
btn.addEventListener("click", function () {
    if (input.value) {
        localStorage.setItem("user", input.value);
        redirect("question.html", container);
    }
});
