var btnRepeat = getElementById("repeatTest");
if (btnRepeat) {
    btnRepeat.addEventListener("click", function () {
        localStorage.clear();
        localStorage.setItem("question", "0");
        redirect("question.html", container);
    });
}
//# sourceMappingURL=results.js.map