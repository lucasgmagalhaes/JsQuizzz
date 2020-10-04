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
        localStorage.clear();
        localStorage.setItem("user", input.value);
        localStorage.setItem("number", "0");
        redirect("question.html", container);
    }
});
//navigator.serviceWorker.register("../serviceWorker.js");
//# sourceMappingURL=index.js.map