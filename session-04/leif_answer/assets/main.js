import multiply, { add, subtract, divide as myDivide } from "./math.js";

let outputSection = document.getElementById("results");

// Class not required in this case, should just be a function really. (Class used for syntax practice)
class DisplayTemplate {
  parse = function (value) {
    let parser = new DOMParser();
    return parser.parseFromString(`<p>${value} - Template Used<p>`, "text/html")
      .body.firstChild;
    // let element = document.createElement("");
    // element.innerHTML = `<p>${this.value}<p>`;
    // return element;
  };
}

let templateGenerator = new DisplayTemplate();

function renderResult(value) {
  let node = templateGenerator.parse(value);
  outputSection.appendChild(node);
}

renderResult(`Multiply: ${multiply(3, 4)}`);
renderResult(`Add: ${add(3, 4)}`);
renderResult(`Subtract: ${subtract(4, 1)}`);
renderResult(`Divide: ${myDivide(20, 4)}`);

// Potentially falling into the habit of overengineering - function/class use was not necessary
