var summary = document.getElementById("summary");
var questionsContainer = document.getElementById("options-container");
function loadResults() {
    var user = localStorage.getItem("user");
    var questions = JSON.parse(localStorage.getItem("questions"));
    var ans = JSON.parse(localStorage.getItem("ans"));
    var hits = calcHitsPercentage(questions, ans);
    summary.innerHTML = getSummaryTestBasedOnHits(hits, user);
    addResponseToDOM(questions, ans);
}
function getSummaryTestBasedOnHits(hits, user) {
    if (hits === 0) {
        return user + ", voc\u00EA conseguiu acertar um total de 0 (ZERO) respostas \uD83D\uDE25.";
    }
    if (hits === 100) {
        return user + ", voc\u00EA acertou todas as respostas. Uau.";
    }
    return user + ", voc\u00EA acertou " + hits + "% das respostas.";
}
function calcHitsPercentage(questions, ans) {
    var hit = 0;
    questions.forEach(function (question) {
        var pickedOption = ans.find(function (answer) { return answer.questionId === question.id; });
        if (!pickedOption) {
            alert("Ocorreu um erro na montagem do relatório de resultado. Por favor, começe o teste novamente");
            return;
        }
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
        createQuestionNameLabel(question, resultContainer);
        for (var i = 0; i <= question.options.length - 1; i++) {
            var optionLabel = createOptionLabel(question, i, ans);
            resultContainer.appendChild(optionLabel);
        }
        questionsContainer.appendChild(resultContainer);
    });
}
function createQuestionNameLabel(question, resultContainer) {
    var questionNameLabel = document.createElement("span");
    questionNameLabel.classList.add("question-name");
    questionNameLabel.innerText = question.name;
    resultContainer.appendChild(questionNameLabel);
}
function createOptionLabel(question, i, ans) {
    var optionLabel = document.createElement("span");
    optionLabel.classList.add("option");
    optionLabel.innerText = question.options[i];
    var pickedOption = ans.find(function (answer) { return answer.questionId === question.id; });
    if (question.answerPosition === i) {
        optionLabel.classList.add("correct");
    }
    else {
        optionLabel.classList.add("wrong");
    }
    if (pickedOption.answerChosen == i) {
        optionLabel.classList.add("picked");
    }
    return optionLabel;
}
function addRepeatTestButton() {
    var repeatTestBtn = document.createElement("button");
    repeatTestBtn.classList.add("repeat");
    repeatTestBtn.innerText = "Repetir teste";
    repeatTestBtn.addEventListener("click", function () {
        localStorage.removeItem("questions");
        localStorage.removeItem("ans");
        localStorage.setItem("number", "0");
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