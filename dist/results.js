/**
 * @type HTMLButtonElement
 */
var btnRepeat = document.getElementById("repeatTest");
/**
 * @type HTMLButtonElement
 */
var btnIndexPage = document.getElementById("initialScreen");
/**
 * @type HTMLSpanElement
 */
var summary = document.getElementById("summary");
if (btnRepeat) {
    btnRepeat.addEventListener("click", function () {
        localStorage.clear();
        localStorage.setItem("question", "0");
        redirect("question.html", container);
    });
}
if (btnIndexPage) {
    btnIndexPage.addEventListener("click", function () {
        redirect("index.html", container);
    });
}
function loadResults() {
    var user = localStorage.getItem("user");
    var questions = JSON.parse(localStorage.getItem("questions"));
    var ans = JSON.parse(localStorage.getItem("ans"));
    calcHitsPercentage(questions, ans);
    summary.innerHTML = user + " voc\u00EA acertou {valor}% das respostas.";
}
function calcHitsPercentage(questions, ans) {
}
//# sourceMappingURL=results.js.map