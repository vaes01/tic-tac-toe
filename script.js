

// evertyghing is inside the mainContainer
let mainContainer = document.createElement("div");
mainContainer.classList.add("mainContainer");
document.body.appendChild(mainContainer);


// create rows for and then create cells inside columns

let cellLabel = 1;

for (let i = 1; i <= 3; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    mainContainer.appendChild(row);

    for (let j = 1; j <= 3; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
        cell.id = "cell" + cellLabel;
        // cell.textContent = "cell" + cellLabel;
        
        let btn = document.createElement("button");
        btn.classList.add("btn");
        cell.appendChild(btn);
        btn.id = "btn" + cellLabel;
        // btn.textContent = "btn" + cellLabel;

        cellLabel++;
    }
};


// define events for buttons

let groupBtn = document.querySelectorAll(".btn"); 
let currentSymbol = "X"
let round = 0;
let win = 0;

groupBtn.forEach((element) => {
    element.addEventListener("click", function() {

        element.textContent = currentSymbol;

        if (currentSymbol === "X") {
            element.classList.remove("oClass")
            element.classList.add("xClass")
            currentSymbol = "O";
        } else {
            element.classList.remove("xClass")
            element.classList.add("oClass")
            currentSymbol = "X";
        }

        if ((btn1.textContent !== "") && btn1.textContent === btn2.textContent && btn2.textContent === btn3.textContent) {
            win = 1;
        } else if ((btn4.textContent !== "") && btn4.textContent === btn5.textContent && btn5.textContent === btn6.textContent) {
            win = 1;
        } else if ((btn7.textContent !== "") && btn7.textContent === btn8.textContent && btn8.textContent === btn9.textContent) {
            win = 1;
        } else if ((btn1.textContent !== "") && btn1.textContent === btn4.      textContent && btn4.textContent === btn7.textContent) {
            win = 1;
        } else if ((btn2.textContent !== "") && btn2.textContent === btn5.      textContent && btn5.textContent === btn8.textContent) {
            win = 1;
        } else if ((btn3.textContent !== "") && btn3.textContent === btn6.      textContent && btn6.textContent === btn9.textContent) {
            win = 1;
        } else if ((btn1.textContent !== "") && btn1.textContent === btn5.      textContent && btn5.textContent === btn9.textContent) {
            win = 1;
        } else if ((btn3.textContent !== "") && btn3.textContent === btn5.      textContent && btn5.textContent === btn7.textContent) {
            win = 1;
        } else if (btn1.textContent !== "" && btn2.textContent !== "" && btn3.textContent !== "" && btn4.textContent !== "" && btn5.textContent !== "" && btn6.textContent !== "" && btn7.textContent !== "" && btn8.textContent !== "" && btn9.textContent !== "") {
            setTimeout(function() {
                alert("Deu velha!");
                btn1.textContent = "";
                btn2.textContent = "";
                btn3.textContent = "";
                btn4.textContent = "";
                btn5.textContent = "";
                btn6.textContent = "";
                btn7.textContent = "";
                btn8.textContent = "";
                btn9.textContent = "";

                win = 0;
            }, 10);
        };


        if (win === 1) {
            setTimeout(function() {
                alert(element.textContent + " ganhou!");
                btn1.textContent = "";
                btn2.textContent = "";
                btn3.textContent = "";
                btn4.textContent = "";
                btn5.textContent = "";
                btn6.textContent = "";
                btn7.textContent = "";
                btn8.textContent = "";
                btn9.textContent = "";

                win = 0;
            }, 10);

        };
    });
});



let footer = document.createElement("div");
footer.classList.add("footer");
mainContainer.appendChild(footer);

let link = document.createElement("a");
link.classList.add("link");
link.setAttribute("href", "https://github.com/vaes01");
link.setAttribute("target", "_blank");

let githubLogo = document.createElement("img");
githubLogo.src = "github-logo.png";
githubLogo.height = 28;
link.appendChild(githubLogo);

let copyright = document.createElement("p");
copyright.classList.add("copyright");
footer.appendChild(copyright);
copyright.textContent = "© " + " " + (new Date().getFullYear()) + " vaes01";

footer.appendChild(link);
