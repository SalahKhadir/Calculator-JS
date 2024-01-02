let nbrs = document.querySelectorAll('input[type="button"]');
let resultElement = document.getElementById("display");
let submitButton = document.getElementById("submit-button");
let resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function() {
    resultElement.textContent= this.textContent ;
});
nbrs.forEach(nbr => {
  nbr.addEventListener('click', () => {
    resultElement.textContent += nbr.value; 
  });
});
submitButton.addEventListener("click", function() {
  let result=eval(resultElement.textContent);
  resultElement.innerHTML = result ;
});