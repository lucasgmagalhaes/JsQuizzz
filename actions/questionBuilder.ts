const questionNumberLabel = getElementById<HTMLHeadingElement>(
  "question-number"
);
const questionNameLabel = getElementById<HTMLHeadingElement>("question-name");
const QUESTIONS_AMOUNT_NECESSARY = 5;

interface PickedAnswer {
  questionId: string;
  answerChosen: number;
}

let picked = pickQuestions();
let questionNumber = getActualQuestion();
let answers = getAnswers();
let question =
  picked[
    questionNumber > QUESTIONS_AMOUNT_NECESSARY
      ? questionNumber - 1
      : picked.length - 1
  ];

console.log("TESTE");

questionNumberLabel.innerText = `Pergunta ${questionNumber + 1}`;
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
    redirect("results.html?t="+ question.id, getElementById("form-container"));
  } else {
    redirect("question.html?t="+ question.id, getElementById("form-container"));
  }
}

function getElementById<T extends HTMLElement>(id: string) {
  return document.getElementById(id) as T;
}
