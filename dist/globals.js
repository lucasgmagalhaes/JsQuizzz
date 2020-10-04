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
//# sourceMappingURL=globals.js.map