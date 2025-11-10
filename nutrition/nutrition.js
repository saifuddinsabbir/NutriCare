const foodData = {
  rice: {
    name: "Rice (ভাত)",
    calories: 130,
    protein: 2.4,
    fat: 0.3,
    vitamins: "B1, B3, B6",
    minerals: "Iron, Magnesium, Zinc",
    image: "../Images/rice.jpg"
  },
  bread: {
    name: "Bread (রুটি)",
    calories: 265,
    protein: 9,
    fat: 3.2,
    vitamins: "B1, B2, B3, Folate",
    minerals: "Iron, Calcium",
    image: "../Images/bread.jpg"
  },
  lentil: {
    name: "Lentil (ডাল)",
    calories: 116,
    protein: 9,
    fat: 0.4,
    vitamins: "B1, B6, Folate",
    minerals: "Iron, Potassium, Zinc",
    image: "../Images/lentil.jpg"
  },
  egg: {
    name: "Egg (ডিম)",
    calories: 155,
    protein: 13,
    fat: 11,
    vitamins: "A, B2, B12, D",
    minerals: "Zinc, Phosphorus, Iron",
    image: "../Images/egg.jpg"
  },
  fish: {
    name: "Fish (মাছ)",
    calories: 206,
    protein: 22,
    fat: 12,
    vitamins: "D, B12, Niacin",
    minerals: "Iodine, Selenium, Zinc",
    image: "../Images/fish.jpg"
  },
  chicken: {
    name: "Chicken (মুরগি)",
    calories: 239,
    protein: 27,
    fat: 14,
    vitamins: "B3, B6, B12",
    minerals: "Phosphorus, Selenium",
    image: "../Images/chicken.jpg"
  },
  beef: {
    name: "Beef (গরুর মাংস)",
    calories: 250,
    protein: 26,
    fat: 15,
    vitamins: "B12, B6, Niacin",
    minerals: "Iron, Zinc, Phosphorus",
    image: "../Images/beef.jpg"
  },
  mutton: {
    name: "Mutton (খাসির মাংস)",
    calories: 294,
    protein: 25,
    fat: 21,
    vitamins: "B12, B3, B6",
    minerals: "Zinc, Iron, Selenium",
    image: "../Images/mutton.jpg"
  },
  spinach: {
    name: "Spinach (পালং শাক)",
    calories: 23,
    protein: 2.9,
    fat: 0.4,
    vitamins: "A, C, K, Folate",
    minerals: "Iron, Calcium, Magnesium",
    image: "../Images/spinach.jpg"
  },
  pumpkin: {
    name: "Pumpkin (কুমড়া)",
    calories: 26,
    protein: 1,
    fat: 0.1,
    vitamins: "A, C, E",
    minerals: "Potassium, Magnesium",
    image: "../Images/pumpkin.jpg"
  },
  cabbage: {
    name: "Cabbage (বাঁধাকপি)",
    calories: 25,
    protein: 1.3,
    fat: 0.1,
    vitamins: "C, K, B6",
    minerals: "Calcium, Potassium, Magnesium",
    image: "../Images/cabbage.jpg"
  },
  carrot: {
    name: "Carrot (গাজর)",
    calories: 41,
    protein: 0.9,
    fat: 0.2,
    vitamins: "A, C, K, B6",
    minerals: "Potassium, Manganese",
    image: "../Images/carrot.jpg"
  },
  potato: {
    name: "Potato (আলু)",
    calories: 77,
    protein: 2,
    fat: 0.1,
    vitamins: "C, B6",
    minerals: "Potassium, Iron, Magnesium",
    image: "../Images/potato.jpg"
  },
  tomato: {
    name: "Tomato (টমেটো)",
    calories: 18,
    protein: 0.9,
    fat: 0.2,
    vitamins: "A, C, K, B9",
    minerals: "Potassium, Manganese",
    image: "../Images/tomato.jpg"
  },
  bitterGourd: {
    name: "Bitter Gourd (করলা)",
    calories: 17,
    protein: 1,
    fat: 0.2,
    vitamins: "A, C, B9",
    minerals: "Iron, Potassium, Zinc",
    image: "../Images/bitterGourd.jpg"
  },
  okra: {
    name: "Okra (ঢেঁড়স)",
    calories: 33,
    protein: 1.9,
    fat: 0.2,
    vitamins: "A, C, K, B6",
    minerals: "Magnesium, Calcium, Potassium",
    image: "../Images/okra.jpg"
  },
  banana: {
    name: "Banana (কলা)",
    calories: 89,
    protein: 1.1,
    fat: 0.3,
    vitamins: "B6, C",
    minerals: "Potassium, Magnesium",
    image: "../Images/banana.jpg"
  },
  apple: {
    name: "Apple (আপেল)",
    calories: 52,
    protein: 0.3,
    fat: 0.2,
    vitamins: "C, B1, B2",
    minerals: "Potassium, Iron",
    image: "../Images/apple.jpg"
  },
  mango: {
    name: "Mango (আম)",
    calories: 60,
    protein: 0.8,
    fat: 0.4,
    vitamins: "A, C, E",
    minerals: "Potassium, Copper",
    image: "../Images/mango.jpg"
  },
  papaya: {
    name: "Papaya (পেপে)",
    calories: 43,
    protein: 0.5,
    fat: 0.3,
    vitamins: "A, C, E, Folate",
    minerals: "Calcium, Magnesium",
    image: "../Images/papaya.jpg"
  },
  orange: {
    name: "Orange (কমলা)",
    calories: 47,
    protein: 0.9,
    fat: 0.1,
    vitamins: "C, B1, Folate",
    minerals: "Calcium, Potassium",
    image: "../Images/orange.jpg"
  },
  guava: {
    name: "Guava (পেয়ারা)",
    calories: 68,
    protein: 2.6,
    fat: 1,
    vitamins: "A, C, B6",
    minerals: "Potassium, Manganese",
    image: "../Images/guava.jpg"
  },
  jackfruit: {
    name: "Jackfruit (কাঁঠাল)",
    calories: 95,
    protein: 1.7,
    fat: 0.6,
    vitamins: "A, C, B6",
    minerals: "Potassium, Magnesium",
    image: "../Images/jackfruit.jpg"
  },
  watermelon: {
    name: "Watermelon (তরমুজ)",
    calories: 30,
    protein: 0.6,
    fat: 0.2,
    vitamins: "A, C, B5",
    minerals: "Potassium, Magnesium",
    image: "../Images/watermelon.jpg"
  },
  milk: {
    name: "Milk (দুধ)",
    calories: 61,
    protein: 3.2,
    fat: 3.3,
    vitamins: "A, D, B12",
    minerals: "Calcium, Potassium",
    image: "../Images/milk.jpg"
  },
  tea: {
    name: "Tea (চা)",
    calories: 1,
    protein: 0,
    fat: 0,
    vitamins: "B2, Folate",
    minerals: "Manganese, Fluoride",
    image: "../Images/tea.jpg"
  },
  coffee: {
    name: "Coffee (কফি)",
    calories: 2,
    protein: 0.3,
    fat: 0,
    vitamins: "B2, B3, B5",
    minerals: "Magnesium, Potassium",
    image: "../Images/coffee.jpg"
  },
  lemonWater: {
    name: "Lemon Water (লেবুর শরবত)",
    calories: 29,
    protein: 0.4,
    fat: 0.1,
    vitamins: "C, B6",
    minerals: "Potassium, Calcium",
    image: "../Images/lemonWater.jpg"
  },
  fruitJuice: {
    name: "Fruit Juice (ফলের রস)",
    calories: 45,
    protein: 0.5,
    fat: 0.2,
    vitamins: "A, C, B9",
    minerals: "Potassium, Magnesium",
    image: "../Images/fruitJuice.jpg"
  },
};


document.getElementById("foodSelect").addEventListener("change", function () {
  const selectedFood = this.value;
  const resultDiv = document.getElementById("nutritionResult");
  const foodImage = document.getElementById("foodImage");

  if (!selectedFood || !foodData[selectedFood]) {
    resultDiv.innerHTML = `
      <h3>Nutrition Information</h3>
      <p>Please select a food item to view its nutritional data.</p>`;
    foodImage.style.display = "none";
    foodImage.src = "";
    return;
  }

  const food = foodData[selectedFood];
  resultDiv.innerHTML = `
    <h3>${food.name}</h3>
    <div class="nutri-info">
      <p><strong>Calories:</strong> ${food.calories} kcal</p>
      <p><strong>Protein:</strong> ${food.protein} g</p>
      <p><strong>Fat:</strong> ${food.fat} g</p>
      <p><strong>Vitamins:</strong> ${food.vitamins}</p>
      <p><strong>Minerals:</strong> ${food.minerals}</p>
    </div>
    <p style="margin-top:10px; font-size:0.9rem; color:#777;">
      *Values are approximate per 100 grams of food.
    </p>
  `;

  // Show food image
  foodImage.src = food.image;
  foodImage.style.display = "block";
});
