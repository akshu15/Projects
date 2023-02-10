let digits = document.querySelectorAll("[data-button]");
let current = "";
let previous = "";
let operator = "";
let result = 0.0;

digits.forEach((digit) => {
  digit.addEventListener("click", (e) => {
    input = e.target.innerHTML;
    //Input is a number or period "."
    if (
      (input >= 0 && input <= 9) ||
      (input === ".") & !current.includes(".") // includes check to avoid decimal duplicates "8.."
    ) {
      if (previous !== "" && operator === "") {
        previous = "";
      }
      // if after "=" we press a digit/number, clear off previous
      // Eg:-  after pressing 2 + 3 = -> 5 , we then press 3 + 1 -> 4
      if (input === "." && current === "") {
        //check for decimal
        current = "0.";
      } else {
        current = current + e.target.innerHTML;
      }
      document.querySelector(".result").innerText = current;
    }
    //Input is AC - "All Clear"
    else if (input === "AC") {
      result = 0.0;
      current = "";
      previous = "";
      operator = "";
      document.querySelector(".result").innerText = "0";
    }
    //Input is an operator - "+, -, *, ÷"
    else {
      // Eg:-  2 + 3 (+, -, *, ÷, =)   ->   5
      if (operator !== "") {
        // if repetitive operators Eg:-  2 + 3 * - ÷    -> update operator to recent opeartor (÷)
        if (current === "") {
          operator = input;
        } else {
          switch (operator) {
            case "+":
              result = parseFloat(previous) + parseFloat(current);
              break;
            case "-":
              result = parseFloat(previous) - parseFloat(current);
              break;
            case "x":
              result = parseFloat(previous) * parseFloat(current);
              break;

            case "÷":
              result = parseFloat(previous) / parseFloat(current);
              break;
          }
          if (input !== "=") {
            operator = input;
          } // make sure operator is not set to "="
          else {
            operator = "";
          }
          previous = result;
          current = "";
          document.querySelector(".result").innerText = result;
          result = 0.0;
        }
      }
      // if operator = "" , Eg:- 2 +
      else {
        operator = input;
        if (previous === "") {
          previous = current;
          current = "";
        }
      }
    }
  });
});
