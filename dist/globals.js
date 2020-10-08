var ANSWERS_KEY = "ans";
function redirect(page, containerElement) {
    var splitUrl = location.href.split("/");
    splitUrl[splitUrl.length - 1] = page;
    containerElement.classList.add("slide-out-left");
    location.replace(splitUrl.join("/"));
}
//# sourceMappingURL=globals.js.map