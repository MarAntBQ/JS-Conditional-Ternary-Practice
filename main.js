document.addEventListener("DOMContentLoaded", () => {
  const ageInput = document.getElementById("userAge");
  const ageOutput = document.getElementById("ageMessage");
  const ageButton = document.getElementById("checkAgeButton");

  ageButton.addEventListener("click", () => {
      const age = parseInt(ageInput.value);
      ageOutput.textContent = age < 18 ? "You are a minor." : "You are an adult.";
  });
});