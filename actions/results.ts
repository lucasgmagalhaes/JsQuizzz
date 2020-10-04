/**
 * @type HTMLButtonElement
 */
const btnRepeat = document.getElementById("repeatTest");
/**
 * @type HTMLButtonElement
 */
const btnIndexPage = document.getElementById("initialScreen");
/**
 * @type HTMLSpanElement
 */
const summary = document.getElementById("summary");

if (btnRepeat) {
  btnRepeat.addEventListener("click", () => {
    localStorage.clear();
    localStorage.setItem("question", "0");
    redirect("question.html", container);
  });
}

if (btnIndexPage) {
  btnIndexPage.addEventListener("click", () => {
    redirect("index.html", container);
  });
}

function loadResults() {
    const user = localStorage.getItem("user");
    const questions = JSON.parse(localStorage.getItem("questions")) as Question[];
    const ans = JSON.parse(localStorage.getItem("ans"));
    calcHitsPercentage(questions, ans);
    summary.innerHTML = `${user} você acertou {valor}% das respostas.`;
}

function calcHitsPercentage(questions: Question[], ans: PickedAnswer[]) {

}