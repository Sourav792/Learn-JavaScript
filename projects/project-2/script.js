const bmiForm = document.querySelector("#form");
const calculate = document.querySelector("#calculate");
// this usecase will give you empty[value] (kyoki page are refresh aur script is load )
// const height = parseInt(document.querySelector("#height").value);

bmiForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector('#result')

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height`
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight`
  } else {
   const BMI =  (weight / ((height * height) / 10000)).toFixed(1);
   // show the result 
   result.innerHTML = `<span>${BMI}</span`
   if (BMI < 18.5) {
    alert(`${BMI} you are under weight`)
   } else if (BMI >= 18.5 && BMI <= 24.9) {
    alert(`${BMI} you are healthy`)
   } else if ( BMI >= 25) {
    alert(`${BMI} you are over weight`)
   } else {
    alert('please give a valid number')
   } 
  } 
});
