const btnRepeat = getElementById<HTMLButtonElement>("repeatTest");

if(btnRepeat){
    btnRepeat.addEventListener("click", () => {
        localStorage.clear();
        localStorage.setItem("question", "0");
        redirect("question.html", container);
    });
}