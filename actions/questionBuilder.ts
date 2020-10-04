const questionNumberLabel = getElementById("question-number");
const questionNameLabel = getElementById("question-name");
const QUESTIONS_AMOUNT_NECESSARY = 5;

function generateQuestion() {
  let picked = pickQuestions();
  let questionNumber = getActualQuestionNumber();
  let question = getActualQuestion(picked, questionNumber);
  const inputContainer = getElementById("options-container");

  questionNumberLabel.innerText = `Pergunta ${questionNumber + 1}`;
  questionNameLabel.innerText = question.name;

  if (question.code) {
    const codeSpan = document.createElement("span");
    codeSpan.classList.add("code");
    codeSpan.innerText = question.code;
    inputContainer.appendChild(codeSpan);
  }

  generateButtons(question.options, inputContainer);
}

function getActualQuestion(picked: Question[], questionNumber: number) {
  return picked[
    questionNumber > QUESTIONS_AMOUNT_NECESSARY
      ? picked.length - 1
      : questionNumber
  ];
}

function pickQuestions(): Question[] {
  const pickedQuestionsJSON = localStorage.getItem("questions");

  if (pickedQuestionsJSON) {
    return JSON.parse(pickedQuestionsJSON);
  }

  let hasRequiredAmount = false;
  let pickedQuestions = [];

  while (!hasRequiredAmount) {
    const picked = questions[Math.floor(Math.random() * questions.length)];
    if (!pickedQuestions.some((pq) => pq.id === picked.id)) {
      pickedQuestions.push(picked);
      if (pickedQuestions.length === QUESTIONS_AMOUNT_NECESSARY) {
        hasRequiredAmount = true;
      }
    }
  }

  localStorage.setItem("questions", JSON.stringify(pickedQuestions));
  return pickedQuestions;
}

function getActualQuestionNumber() {
  const question = localStorage.getItem("number");
  if (question) {
    return +question;
  }
  return 1;
}

function generateButtons(options: string[], container: HTMLElement) {
  if (options) {
    for (let i = 0; i < options.length; i++) {
      const newButton = document.createElement("button");
      newButton.classList.add("questionary-button");
      newButton.id = `op${i}`;
      newButton.textContent = options[i];
      newButton.addEventListener("click", () => optionClickRedirect(i));
      container.appendChild(newButton);
    }
  }
}

function optionClickRedirect(optionIndex: number) {
  let questionNumber = getActualQuestionNumber();
  let answers = getAnswers();
  let picked = pickQuestions();
  let question = getActualQuestion(picked, questionNumber);

  localStorage.setItem("number", `${questionNumber + 1}`);

  const questionToAnswer = answers.find((q) => q.questionId === question.id);
  if (questionToAnswer) {
    questionToAnswer.answerChosen = optionIndex;
  } else {
    answers.push({ questionId: question.id, answerChosen: optionIndex });
  }

  updateAnswers(answers);

  if (questionNumber + 1 === QUESTIONS_AMOUNT_NECESSARY) {
    redirect("results.html", getElementById("form-container"));
  } else {
    redirect("question.html", getElementById("form-container"));
  }
}

function getElementById<T extends HTMLElement>(id: string) {
  return document.getElementById(id) as T;
}

generateQuestion();
