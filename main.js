document.addEventListener("DOMContentLoaded", () => {
  const ageInput = document.getElementById("userAge");
  const ageOutput = document.getElementById("ageMessage");
  const ageButton = document.getElementById("checkAgeButton");

  ageButton.addEventListener("click", () => {
      const age = parseInt(ageInput.value, 10);
      if (isNaN(age) || age < 0) {
          ageOutput.innerHTML = "Please enter a valid age.";
      } else if (age < 18) {
          ageOutput.innerHTML = "You are a minor.";
      } else if (age >= 18 && age < 65) {
          ageOutput.innerHTML = "You are an adult.";
      } else {
          ageOutput.innerHTML = "You are a senior citizen.";
      }
  });
});