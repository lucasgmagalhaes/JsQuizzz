var btn = document.getElementById("iniciar");
var input = document.getElementById("playerName");
var container = document.getElementById("container");
var ANSWERS_KEY = "ans";
function redirect(page, containerElement) {
    var splitUrl = location.href.split("/");
    splitUrl[splitUrl.length - 1] = page;
    containerElement.classList.add("slide-out-left");
    location.replace(splitUrl.join("/"));
}
function getAnswers() {
    var answers = localStorage.getItem(ANSWERS_KEY);
    if (answers) {
        return JSON.parse(answers);
    }
    return [];
}
function updateAnswers(answers) {
    if (answers) {
        localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
    }
}
function getElementById(id) {
    return document.getElementById(id);
}
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
        localStorage.setItem("question", "1");
        redirect("question.html", container);
    }
});
var questionNumberLabel = getElementById("question-number");
var questionNameLabel = getElementById("question-name");
var QUESTIONS_AMOUNT_NECESSARY = 5;
var picked = pickQuestions();
var questionNumber = getActualQuestion();
var answers = getAnswers();
var question = picked[questionNumber > QUESTIONS_AMOUNT_NECESSARY
    ? questionNumber - 1
    : picked.length - 1];
questionNumberLabel.innerText = "Pergunta " + questionNumber;
questionNameLabel.innerText = question.name;
generateButtons(question.options);
function pickQuestions() {
    var pickedQuestionsJSON = localStorage.getItem("questions");
    if (pickedQuestionsJSON) {
        return JSON.parse(pickedQuestionsJSON);
    }
    var hasRequiredAmount = false;
    var pickedQuestions = [];
    var _loop_1 = function () {
        var picked_1 = questions[Math.floor(Math.random() * questions.length)];
        if (!pickedQuestions.some(function (pq) { return pq.id === picked_1.id; })) {
            pickedQuestions.push(picked_1);
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
function getActualQuestion() {
    var question = localStorage.getItem("number");
    if (question) {
        return +question;
    }
    return 1;
}
function generateButtons(options) {
    var inputContainer = getElementById("options-container");
    if (options) {
        var _loop_2 = function (i) {
            var newButton = document.createElement("button");
            newButton.classList.add("questionary-button");
            newButton.id = "op" + i;
            newButton.textContent = options[i];
            newButton.addEventListener("click", function () { return optionClickRedirect(i); });
            inputContainer.appendChild(newButton);
        };
        for (var i = 0; i < options.length; i++) {
            _loop_2(i);
        }
    }
}
function optionClickRedirect(optionIndex) {
    localStorage.setItem("number", "" + ++questionNumber);
    var questionToAnswer = answers.find(function (q) { return q.questionId === question.id; });
    if (questionToAnswer) {
        questionToAnswer.answerChosen = optionIndex;
    }
    else {
        answers.push({ questionId: question.id, answerChosen: optionIndex });
    }
    updateAnswers(answers);
    if (questionNumber === QUESTIONS_AMOUNT_NECESSARY) {
        redirect("results.html", getElementById("form-container"));
    }
    else {
        redirect("question.html", getElementById("form-container"));
    }
}
var repeatBtn = getElementById("repeatTests");
if (repeatBtn) {
    repeatBtn.addEventListener("click", function () {
        localStorage.clear();
        localStorage.setItem("question", "1");
        redirect("question.html", container);
    });
}
//# sourceMappingURL=index.js.map