document.getElementById("calculateBtn").addEventListener("click", function () {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const bmiValue = document.getElementById("bmiValue");
  const bmiCategory = document.getElementById("bmiCategory");
  const bmiAdvice = document.getElementById("bmiAdvice");
  const bmiImage = document.getElementById("bmiImage");

  if (!height || !weight || height <= 0 || weight <= 0) {
    bmiValue.textContent = "--";
    bmiCategory.textContent = "Please enter valid numbers!";
    bmiAdvice.textContent = "Height and weight must be positive numbers.";
    bmiImage.src = "images/neutral.png";
    return;
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  bmiValue.textContent = bmi;

  let category = "";
  let advice = "";
  let imageSrc = "images/neutral.png";

  if (bmi < 18.5) {
    category = "Underweight";
    advice = "You may need to gain some healthy weight. Include more proteins and carbs.";
    imageSrc = "images/underweight.png";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Healthy Weight";
    advice = "Great job! Maintain your balance of diet and exercise.";
    imageSrc = "images/healthy.png";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
    advice = "Consider more physical activity and balanced meals.";
    imageSrc = "images/overweight.png";
  } else if (bmi >= 30 && bmi < 35) {
    category = "Obese (Class I)";
    advice = "Try to reduce calories intake and consult a nutritionist.";
    imageSrc = "images/obese1.png";
  } else if (bmi >= 35 && bmi < 40) {
    category = "Obese (Class II)";
    advice = "High risk category — maintain medical supervision.";
    imageSrc = "images/obese2.png";
  } else {
    category = "Obese (Class III)";
    advice = "Severe risk — professional guidance recommended.";
    imageSrc = "images/obese3.png";
  }

  bmiCategory.textContent = category;
  bmiAdvice.textContent = advice;
  bmiImage.src = imageSrc;
});
