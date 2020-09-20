const questionNumberLabel = getElementById<HTMLHeadingElement>(
  "question-number"
);
const questionNameLabel = getElementById<HTMLHeadingElement>("question-name");

const picked = pickQuestions();
const questionNumber = getActualQuestion();
const question = picked[questionNumber];

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
  const QUESTIONS_AMOUNT_NECESSARY = 5;

  while (!hasRequiredAmount) {
    const picked = questions[Math.floor(Math.random() * questions.length)];
    if (!pickedQuestions.some((pq) => pq.name === picked.name)) {
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
  const question = localStorage.getItem("question");
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
  localStorage.setItem("question", `${optionIndex + 1}`);
  redirect("question.html", getElementById("form-container"));
}

function getElementById<T extends HTMLElement>(id: string) {
  return document.getElementById(id) as T;
}
