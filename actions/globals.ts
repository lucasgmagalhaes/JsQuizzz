const ANSWERS_KEY = "ans";

function redirect(page: string, containerElement: HTMLElement) {
  const splitUrl = location.href.split("/");
  splitUrl[splitUrl.length - 1] = page;
  containerElement.classList.add("slide-out-left");
  location.replace(splitUrl.join("/"));
}
