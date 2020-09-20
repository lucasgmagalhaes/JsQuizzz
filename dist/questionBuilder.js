var questionNumberLabel = getElementById("question-number");
var questionNameLabel = getElementById("question-name");
var picked = pickQuestions();
var questionNumber = getActualQuestion();
var question = picked[questionNumber];
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
    var QUESTIONS_AMOUNT_NECESSARY = 5;
    var _loop_1 = function () {
        var picked_1 = questions[Math.floor(Math.random() * questions.length)];
        if (!pickedQuestions.some(function (pq) { return pq.name === picked_1.name; })) {
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
    var question = localStorage.getItem("question");
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
    localStorage.setItem("question", "" + (optionIndex + 1));
    redirect("question.html", getElementById("form-container"));
}
function getElementById(id) {
    return document.getElementById(id);
}
