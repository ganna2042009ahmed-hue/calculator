const buttonsEl = document.querySelectorAll("button")

const inputFieldEl = document.getElementById("result")


const historyListEl = document.getElementById("historyList");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if(buttonValue === "C"){
        clearResult()
    } else if (buttonValue === "="){
        calculateResult()
    } else {
        appendValue(buttonValue);
    }
  });
}

function clearResult(){
    inputFieldEl.value = "";
}

function calculateResult(){
 
    try {
        const expression = inputFieldEl.value;
        const result = eval(expression);

        const historyItem = document.createElement("li");
        historyItem.textContent = `${expression} = ${result}`;
        historyListEl.prepend(historyItem);

        inputFieldEl.value = result; 
    } catch {
        inputFieldEl.value = "Error";
    }
}  

