var btn = document.getElementById("iniciar");
var input = document.getElementById("playerName");
var container = document.getElementById("container");
if (btn) {
    btn.disabled = true;
    btn.addEventListener("click", function () {
        if (input.value) {
            localStorage.clear();
            localStorage.setItem("user", input.value);
            localStorage.setItem("number", "0");
            redirect("question.html", container);
        }
    });
}
if (input) {
    input.addEventListener("input", function () {
        if (!input.value || input.value.trim() === "") {
            btn.disabled = true;
        }
        else {
            btn.disabled = false;
        }
    });
}
console.log("É possível ver todas as respostas no source do código.");
console.log("As perguntas foram tiradas do repositório: https://github.com/lydiahallie/javascript-questions/blob/master/pt-BR/README_pt_BR.md");
navigator.serviceWorker.register("../serviceWorker.js");
//# sourceMappingURL=index.js.map