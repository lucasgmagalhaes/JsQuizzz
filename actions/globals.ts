const ANSWERS_KEY = "ans";

function redirect(page: string, containerElement: HTMLElement) {
  const splitUrl = location.href.split("/");
  splitUrl[splitUrl.length - 1] = page;
  containerElement.classList.add("slide-out-left");
  location.replace(splitUrl.join("/"));
  location.reload();
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
