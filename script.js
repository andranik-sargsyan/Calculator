let memory = document.getElementById("memory");
let display = document.getElementById("calc-head");
let buttons = document.querySelectorAll("#calc-body > button");

buttons.forEach(item => {
    item.addEventListener("click", e => {
        let type = e.target.getAttribute("data-type");

        switch (type) {
            case "input":
                if (display.innerText == "0") {
                    display.innerText = "";
                }

                display.innerText += e.target.innerText;
                break;
            case "change-sign":
                display.innerText = display.innerText[0] == "-"
                    ? display.innerText.substring(1)
                    : `-${display.innerText}`;
                break;
            case "clear":
                display.innerText = "0";
                break;
            case "undo":
                if (display.innerText.length > 0) {
                    display.innerText = display.innerText.substring(0, display.innerText.length - 1);

                    if (display.innerText == "") {
                        display.innerText = "0";
                    }
                }
                break;
            case "equals":
                try {
                    display.innerText = eval(display.innerText);
                } catch (e) {
                    alert(e);
                }
                break;
            case "m":
                memory.innerText = display.innerText;
                break;
            case "mr":
                display.innerText = memory.innerText || 0;
                break;
            case "mc":
                memory.innerText = "";
                break;
            default:
                break;
        }
    });
});
