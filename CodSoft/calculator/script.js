const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

let input = "";

for (let key of keys) {
    const value = key.dataset.key;

    key.addEventListener('click', () => {
        if (value == "clear") {
            input = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
        } else if (value == "backspace") {
            input = input.slice(0, -1);
            display_input.innerHTML = input;
            display_input.innerHTML = cleanInput(input)
        } else if (value == "=") {
            try {
                let result = eval(input);
                display_output.innerHTML = result;
            } catch (error) {
                display_output.innerHTML = "Error";
            }
        } else if (value == "bracket") {
            if (
                input.indexOf("(") == -1 ||
                (input.indexOf("(") != -1 &&
                input.indexOf(")") != -1 &&
                input.lastIndexOf("(") < input.lastIndexOf(")"))
            ) {
                input += "(";
            } else if (
                input.indexOf("(") != -1 &&
                (input.indexOf(")") == -1 ||
                input.lastIndexOf("(") > input.lastIndexOf(")"))
            ) {
                input += ")";
            }
            display_input.innerHTML = cleanInput(input)
        } else {
            input += value;
            display_input.innerHTML = input;  
        }
    });
} 
function cleanInput(input) {
    let input_array = input.split("");
    let input_array_length = input_array_length;
    for (let i = 0; i < input_array_length; i++) {
        if (input_array[i] == "*") {
            input_array[i] = ' <span class="operator">*</span>';
        } else if (input_array[i] == "/"){
            input_array[i] = ' <span class="operator">/</span>'; 
        } else if (input_array[i] == "+"){
            input_array[i] = ' <span class="operator">+</span>'; 
        } else if (input_array[i] == "-"){
            input_array[i] = ' <span class="operator">-</span>'; 
        }else if (input_array[i] == "("){
            input_array[i] = ' <span class="bracket">(</span>'; 
        } else if (input_array[i] == ")"){
            input_array[i] = ' <span class="bracket">*</span>'; 
        } else if (input_array[i] == "%"){
            input_array[i] = ' <span class="percentage">*</span>'; 
        }
    }
    return input_array.join("");
}
function ValidateInput (value) {
    let last_input = input.slice(-1);
    let operator = ["+", "-","*","/"];

    if (value == "." && last_input == ".") {
        return false;
    }
    if (operator.includes(value)) {
        if (operator.includes(last_input)) {
            return false;
        }else{
            return true;
        }
    }
    return true
}