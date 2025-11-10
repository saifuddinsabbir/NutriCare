const mealPlans = {
  weightLoss: [
    {
      meal: "Breakfast (প্রাতঃরাশ)",
      items: [
        "Oatmeal with banana (ওটমিল + কলা)",
        "Boiled Egg (সেদ্ধ ডিম)",
        "Green Tea (সবুজ চা)"
      ]
    },
    {
      meal: "Lunch (দুপুরের খাবার)",
      items: [
        "Grilled Fish (ভাজা মাছ)",
        "Brown Rice (ব্রাউন রাইস)",
        "Steamed Vegetables (ভাপা সবজি)"
      ]
    },
    {
      meal: "Dinner (রাতের খাবার)",
      items: [
        "Chicken Salad (মুরগির সালাদ)",
        "Soup (সুপ)"
      ]
    }
  ],

  weightGain: [
    {
      meal: "Breakfast (প্রাতঃরাশ)",
      items: [
        "Rice + Lentil + Egg (ভাত + ডাল + ডিম)",
        "Milkshake (দুধের শেক)",
        "Banana (কলা)"
      ]
    },
    {
      meal: "Lunch (দুপুরের খাবার)",
      items: [
        "Chicken Curry (মুরগি কারি)",
        "White Rice (সাদা ভাত)",
        "Vegetables (শাকসবজি)"
      ]
    },
    {
      meal: "Dinner (রাতের খাবার)",
      items: [
        "Fish Curry (মাছের কারি)",
        "Chapati (রুটি)",
        "Fruit Juice (ফলের রস)"
      ]
    }
  ],

  maintain: [
    {
      meal: "Breakfast (প্রাতঃরাশ)",
      items: [
        "Egg Sandwich (ডিম স্যান্ডউইচ)",
        "Fruit (ফলমূল)",
        "Milk (দুধ)"
      ]
    },
    {
      meal: "Lunch (দুপুরের খাবার)",
      items: [
        "Grilled Chicken (ভাজা মুরগি)",
        "Rice (ভাত)",
        "Vegetables (শাকসবজি)"
      ]
    },
    {
      meal: "Dinner (রাতের খাবার)",
      items: [
        "Fish Curry (মাছের কারি)",
        "Chapati (রুটি)",
        "Salad (সালাদ)"
      ]
    }
  ]
};

// Event listener
document.querySelectorAll(".goal-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const goal = btn.dataset.goal;
    const mealCardsDiv = document.getElementById("mealCards");
    mealCardsDiv.innerHTML = "";

    mealPlans[goal].forEach(meal => {
      const card = document.createElement("div");
      card.classList.add("meal-card");

      let itemsHtml = "<ul>";
      meal.items.forEach(item => {
        itemsHtml += `<li>${item}</li>`;
      });
      itemsHtml += "</ul>";

      card.innerHTML = `<h4>${meal.meal}</h4>${itemsHtml}`;
      mealCardsDiv.appendChild(card);
    });
  });
});
