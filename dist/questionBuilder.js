var questionNumberLabel = getElementById("question-number");
var questionNameLabel = getElementById("question-name");
var QUESTIONS_AMOUNT_NECESSARY = 5;
function generateQuestion() {
    var picked = pickQuestions();
    var questionNumber = getActualQuestionNumber();
    var question = getActualQuestion(picked, questionNumber);
    var inputContainer = getElementById("options-container");
    questionNumberLabel.innerText = "Pergunta " + (questionNumber + 1);
    questionNameLabel.innerText = question.name;
    if (question.code) {
        var codeSpan = document.createElement("span");
        codeSpan.classList.add("code");
        codeSpan.innerText = question.code;
        inputContainer.appendChild(codeSpan);
    }
    generateButtons(question.options, inputContainer);
}
function getActualQuestion(picked, questionNumber) {
    return picked[questionNumber > QUESTIONS_AMOUNT_NECESSARY
        ? picked.length - 1
        : questionNumber];
}
function pickQuestions() {
    var pickedQuestionsJSON = localStorage.getItem("questions");
    if (pickedQuestionsJSON) {
        return JSON.parse(pickedQuestionsJSON);
    }
    var hasRequiredAmount = false;
    var pickedQuestions = [];
    var _loop_1 = function () {
        var picked = questions[Math.floor(Math.random() * questions.length)];
        if (!pickedQuestions.some(function (pq) { return pq.id === picked.id; })) {
            pickedQuestions.push(picked);
            if (pickedQuestions.length === QUESTIONS_AMOUNT_NECESSARY) {
                hasRequiredAmount = true;
            }
        }
    };
    while (!hasRequiredAmount) {
        _loop_1();
    }
    localStorage.setItem("questions", JSON.stringify(pickedQuestions));
    return pickedQuestions;
}
function getActualQuestionNumber() {
    var question = localStorage.getItem("number");
    if (question) {
        return +question;
    }
    return 1;
}
function generateButtons(options, container) {
    if (options) {
        var _loop_2 = function (i) {
            var newButton = document.createElement("button");
            newButton.classList.add("questionary-button");
            newButton.id = "op" + i;
            newButton.textContent = options[i];
            newButton.addEventListener("click", function () { return optionClickRedirect(i); });
            container.appendChild(newButton);
        };
        for (var i = 0; i < options.length; i++) {
            _loop_2(i);
        }
    }
}
function optionClickRedirect(optionIndex) {
    var questionNumber = getActualQuestionNumber();
    var answers = getAnswers();
    var picked = pickQuestions();
    var question = getActualQuestion(picked, questionNumber);
    localStorage.setItem("number", "" + (questionNumber + 1));
    var questionToAnswer = answers.find(function (q) { return q.questionId === question.id; });
    if (questionToAnswer) {
        questionToAnswer.answerChosen = optionIndex;
    }
    else {
        answers.push({ questionId: question.id, answerChosen: optionIndex });
    }
    updateAnswers(answers);
    if (questionNumber + 1 === QUESTIONS_AMOUNT_NECESSARY) {
        redirect("results.html", getElementById("form-container"));
    }
    else {
        redirect("question.html", getElementById("form-container"));
    }
}
function getElementById(id) {
    return document.getElementById(id);
}
generateQuestion();
//# sourceMappingURL=questionBuilder.js.map