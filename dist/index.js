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
        var splitUrl = location.href.split("/");
        splitUrl[splitUrl.length - 1] = "question.html";
        container.classList.add("slide-out-left");
        location.replace(splitUrl.join("/"));
    }
});
