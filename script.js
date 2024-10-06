let display = document.querySelector(".display");
let clear = document.querySelector("#clear").addEventListener("click", () =>{
  display.textContent = "";
});
let percent = document.querySelector("#percent").addEventListener("click", (e) =>{
  e.key = "%";
  return display.textContent += (e.key);
});;
let divide = document.querySelector("#divide").addEventListener("click", (e) =>{
  e.key = "/";
  display.textContent += e.key;
});
let seven = document.querySelector("#seven").addEventListener("click", (e) =>{
  e.key = "7";
  return display.textContent += (e.key);
});
let eight = document.querySelector("#eight").addEventListener("click", (e) =>{
  e.key = "8";
  return display.textContent += (e.key);
});
let nine = document.querySelector("#nine").addEventListener("click", (e) =>{
  e.key = "9";
  return display.textContent += (e.key);
});;
let multiply = document.querySelector("#multiply").addEventListener("click", (e) =>{
  e.key = "*";
  return display.textContent += (e.key);
});;
let four = document.querySelector("#four").addEventListener("click", (e) =>{
  e.key = "4";
  return display.textContent += (e.key);
});;
let five = document.querySelector("#five").addEventListener("click", (e) =>{
  e.key = "5";
  return display.textContent += (e.key);
});;
let six = document.querySelector("#six").addEventListener("click", (e) =>{
  e.key = "6";
  return display.textContent += (e.key);
});;
let subtract = document.querySelector("#subtract").addEventListener("click", (e) =>{
  e.key = "-";
  return display.textContent += (e.key);
});;
let one = document.querySelector("#one").addEventListener("click", (e) =>{
  e.key = "1";
  return display.textContent += (e.key);
});;
let two = document.querySelector("#two").addEventListener("click", (e) =>{
  e.key = "2";
  return display.textContent += (e.key);
});;
let three = document.querySelector("#three").addEventListener("click", (e) =>{
  e.key = "3";
  return display.textContent += (e.key);
});;
let add = document.querySelector("#add").addEventListener("click", (e) =>{
  e.key = "+";
  return display.textContent += e.key;
});
let zero = document.querySelector("#zero").addEventListener("click", (e) =>{
  e.key = "0";
  return display.textContent += (e.key);
});;
let decimal = document.querySelector("#decimal").addEventListener("click", (e) =>{
  e.key = ".";
  return display.textContent += (e.key);
});;
let equals = document.querySelector("#equals").addEventListener("click", (e) =>{
  e.key = "=";
  // To print a mathematical expression inside of a string.
  // mathjs is imported in html using <script> tag to use math.evaluate.
  display.textContent = Math.round((math.evaluate(display.textContent)) * 100)/100;
  return display.textContent;
});