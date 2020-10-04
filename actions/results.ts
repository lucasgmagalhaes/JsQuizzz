const summary = document.getElementById("summary") as HTMLSpanElement;
const questionsContainer = document.getElementById("options-container");

function loadResults() {
  const user = localStorage.getItem("user");
  const questions = JSON.parse(localStorage.getItem("questions")) as Question[];
  const ans = JSON.parse(localStorage.getItem("ans"));
  const hits = calcHitsPercentage(questions, ans);
  summary.innerHTML = `${user} você acertou ${hits}% das respostas.`;
  addResponseToDOM(questions, ans);
}

function calcHitsPercentage(questions: Question[], ans: PickedAnswer[]) {
  let hit = 0;
  questions.forEach((question) => {
    const pickedOption = ans.find(
      (answer) => answer.questionId === question.id
    );

    if (pickedOption.answerChosen === question.answerPosition) {
      hit++;
    }
  });

  return (hit * 100) / questions.length;
}

function addResponseToDOM(questions: Question[], ans: PickedAnswer[]) {
  questions.forEach((question) => {
    const resultContainer = document.createElement("div");
    resultContainer.classList.add("result-question");

    const questionNameLabel = document.createElement("span");
    questionNameLabel.classList.add("question-name");
    questionNameLabel.innerText = question.name;
    resultContainer.appendChild(questionNameLabel);

    for (let i = 0; i <= question.options.length - 1; i++) {
      const optionLabel = document.createElement("span");
      optionLabel.classList.add("option");
      optionLabel.innerText = question.options[i];

      const pickedOption = ans.find(
        (answer) => answer.questionId === question.id
      );

      if (pickedOption.answerChosen === question.answerPosition) {
        optionLabel.classList.add("correct");
      } else {
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
  const repeatTestBtn = document.createElement("button");
  repeatTestBtn.classList.add("repeat");
  repeatTestBtn.innerText = "Repetir teste";
  repeatTestBtn.addEventListener("click", () => {
    localStorage.clear();
    localStorage.setItem("question", "0");
    redirect("question.html", container);
  });
  questionsContainer.appendChild(repeatTestBtn);
}

function addBackToInitialScreenButton() {
  const backToInitialScreenBtn = document.createElement("button");
  backToInitialScreenBtn.classList.add("initialScreen");
  backToInitialScreenBtn.innerText = "Voltar para tela inicial";
  backToInitialScreenBtn.addEventListener("click", () => {
    redirect("index.html", container);
  });

  questionsContainer.appendChild(backToInitialScreenBtn);
}

loadResults();
addRepeatTestButton();
addBackToInitialScreenButton();
