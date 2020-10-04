var summary = document.getElementById("summary");
var questionsContainer = document.getElementById("options-container");
function loadResults() {
    var user = localStorage.getItem("user");
    var questions = JSON.parse(localStorage.getItem("questions"));
    var ans = JSON.parse(localStorage.getItem("ans"));
    var hits = calcHitsPercentage(questions, ans);
    summary.innerHTML = user + " voc\u00EA acertou " + hits + "% das respostas.";
    addResponseToDOM(questions, ans);
}
function calcHitsPercentage(questions, ans) {
    var hit = 0;
    questions.forEach(function (question) {
        var pickedOption = ans.find(function (answer) { return answer.questionId === question.id; });
        if (pickedOption.answerChosen === question.answerPosition) {
            hit++;
        }
    });
    return (hit * 100) / questions.length;
}
function addResponseToDOM(questions, ans) {
    questions.forEach(function (question) {
        var resultContainer = document.createElement("div");
        resultContainer.classList.add("result-question");
        var questionNameLabel = document.createElement("span");
        questionNameLabel.classList.add("question-name");
        questionNameLabel.innerText = question.name;
        resultContainer.appendChild(questionNameLabel);
        for (var i = 0; i <= question.options.length - 1; i++) {
            var optionLabel = document.createElement("span");
            optionLabel.classList.add("option");
            optionLabel.innerText = question.options[i];
            var pickedOption = ans.find(function (answer) { return answer.questionId === question.id; });
            if (pickedOption.answerChosen === question.answerPosition) {
                optionLabel.classList.add("correct");
            }
            else {
                optionLabel.classList.add("wrong");
            }
            if (pickedOption.answerChosen == i) {
                optionLabel.classList.add("picked");
            }
            resultContainer.appendChild(optionLabel);
        }
        questionsContainer.appendChild(resultContainer);
    });
}
function addRepeatTestButton() {
    var repeatTestBtn = document.createElement("button");
    repeatTestBtn.classList.add("repeat");
    repeatTestBtn.innerText = "Repetir teste";
    repeatTestBtn.addEventListener("click", function () {
        localStorage.clear();
        localStorage.setItem("question", "0");
        redirect("question.html", container);
    });
    questionsContainer.appendChild(repeatTestBtn);
}
function addBackToInitialScreenButton() {
    var backToInitialScreenBtn = document.createElement("button");
    backToInitialScreenBtn.classList.add("initialScreen");
    backToInitialScreenBtn.innerText = "Voltar para tela inicial";
    backToInitialScreenBtn.addEventListener("click", function () {
        redirect("index.html", container);
    });
    questionsContainer.appendChild(backToInitialScreenBtn);
}
loadResults();
addRepeatTestButton();
addBackToInitialScreenButton();
//# sourceMappingURL=results.js.map