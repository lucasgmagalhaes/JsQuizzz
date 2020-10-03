const btn = document.getElementById("iniciar") as HTMLButtonElement;
const input = document.getElementById("playerName") as HTMLInputElement;
const container = document.getElementById("container") as HTMLDivElement;
const ANSWERS_KEY = "ans";

function redirect(page: string, containerElement: HTMLElement) {
  const splitUrl = location.href.split("/");
  splitUrl[splitUrl.length - 1] = page;
  containerElement.classList.add("slide-out-left");
  location.replace(splitUrl.join("/"));
}

function getAnswers() {
  const answers = localStorage.getItem(ANSWERS_KEY);
  if (answers) {
    return JSON.parse(answers) as PickedAnswer[];
  }
  return [];
}

function updateAnswers(answers: PickedAnswer[]) {
  if (answers) {
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
  }
}

function getElementById<T extends HTMLElement>(id: string) {
  return document.getElementById(id) as T;
}


btn.disabled = true;

input.addEventListener("input", () => {
  if (!input.value || input.value.trim() === "") {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
});

btn.addEventListener("click", () => {
  if (input.value) {
    localStorage.clear();
    localStorage.setItem("user", input.value);
    localStorage.setItem("question", "1");
    redirect("question.html", container);
  }
});

const questionNumberLabel = getElementById<HTMLHeadingElement>(
  "question-number"
);
const questionNameLabel = getElementById<HTMLHeadingElement>("question-name");
const QUESTIONS_AMOUNT_NECESSARY = 5;

interface PickedAnswer {
  questionId: string;
  answerChosen: number;
}

const picked = pickQuestions();
let questionNumber = getActualQuestion();
const answers = getAnswers();
const question =
  picked[
    questionNumber > QUESTIONS_AMOUNT_NECESSARY
      ? questionNumber - 1
      : picked.length - 1
  ];

questionNumberLabel.innerText = `Pergunta ${questionNumber}`;
questionNameLabel.innerText = question.name;

generateButtons(question.options);

function pickQuestions() {
  const pickedQuestionsJSON = localStorage.getItem("questions");

  if (pickedQuestionsJSON) {
    return JSON.parse(pickedQuestionsJSON) as Question[];
  }

  let hasRequiredAmount = false;
  let pickedQuestions: Question[] = [];

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

function getActualQuestion() {
  const question = localStorage.getItem("number");
  if (question) {
    return +question;
  }
  return 1;
}

function generateButtons(options: string[]) {
  const inputContainer = getElementById<HTMLDivElement>("options-container");
  if (options) {
    for (let i = 0; i < options.length; i++) {
      const newButton = document.createElement("button");
      newButton.classList.add("questionary-button");
      newButton.id = `op${i}`;
      newButton.textContent = options[i];
      newButton.addEventListener("click", () => optionClickRedirect(i));
      inputContainer.appendChild(newButton);
    }
  }
}

function optionClickRedirect(optionIndex: number) {
  localStorage.setItem("number", `${++questionNumber}`);

  const questionToAnswer = answers.find((q) => q.questionId === question.id);
  if (questionToAnswer) {
    questionToAnswer.answerChosen = optionIndex;
  } else {
    answers.push({ questionId: question.id, answerChosen: optionIndex });
  }

  updateAnswers(answers);

  if (questionNumber === QUESTIONS_AMOUNT_NECESSARY) {
    redirect("results.html", getElementById("form-container"));
  } else {
    redirect("question.html", getElementById("form-container"));
  }
}

let repeatBtn = getElementById<HTMLButtonElement>("repeatTests");

if (repeatBtn) {
  repeatBtn.addEventListener("click", () => {
      localStorage.clear();
      localStorage.setItem("question", "1");
      redirect("question.html", container);
  });
}
