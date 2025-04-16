import React, { useState } from "react";

const suggestions = {
  cold: {
    herbs: ["Tulsi", "Ginger", "Turmeric"],
    remedies: ["Tulsi-Ginger tea", "Steam inhalation", "Turmeric milk"],
    diet: ["Warm soups", "Avoid cold drinks", "Use honey"],
  },
  acne: {
    herbs: ["Neem", "Aloe Vera", "Turmeric"],
    remedies: ["Neem paste", "Aloe gel daily", "Turmeric + honey mask"],
    diet: ["Avoid fried foods", "Drink lots of water", "Add greens"],
  },
  headache: {
    herbs: ["Peppermint", "Brahmi", "Ginger"],
    remedies: ["Peppermint oil on temples", "Ginger tea", "Sleep well"],
    diet: ["Avoid caffeine", "Hydrate", "Eat light meals"],
  },
  stress: {
    herbs: ["Ashwagandha", "Brahmi", "Tulsi"],
    remedies: ["Ashwagandha powder with milk", "Brahmi tea"],
    diet: ["Include nuts", "Avoid sugar", "Chamomile tea"],
  },
  constipation: {
    herbs: ["Triphala", "Isabgol", "Aloe Vera"],
    remedies: ["Triphala at bedtime", "Aloe juice in morning"],
    diet: ["Fiber-rich food", "Warm water", "Bananas"],
  },
  "hair fall": {
    herbs: ["Bhringraj", "Amla", "Fenugreek"],
    remedies: ["Amla oil", "Fenugreek paste", "Bhringraj hair mask"],
    diet: ["Protein rich", "Amla juice", "Avoid stress"],
  },
  "low energy": {
    herbs: ["Ashwagandha", "Ginseng", "Shatavari"],
    remedies: ["Ashwagandha milk", "Ginseng tea"],
    diet: ["Dates", "Dry fruits", "Iron-rich food"],
  },
  "weak immunity": {
    herbs: ["Giloy", "Tulsi", "Amla"],
    remedies: ["Giloy juice", "Tulsi drops in water", "Amla daily"],
    diet: ["Vitamin C rich", "Turmeric milk", "Balanced meals"],
  },
  fever: {
    herbs: ["Elderberry", "Peppermint", "Ginger"],
    remedies: ["Elderberry syrup", "Peppermint tea", "Ginger honey tea"],
    diet: ["Drink warm fluids", "Rest", "Avoid spicy food"],
  },
  insomnia: {
    herbs: ["Chamomile", "Lavender", "Ashwagandha"],
    remedies: ["Chamomile tea", "Lavender oil massage", "Ashwagandha milk"],
    diet: ["Avoid caffeine", "Eat light dinners", "Drink warm milk"],
  },
  "high blood pressure": {
    herbs: ["Garlic", "Hibiscus", "Hawthorn"],
    remedies: ["Garlic in morning", "Hibiscus tea", "Hawthorn extract"],
    diet: ["Low sodium", "Leafy greens", "Omega-3 rich foods"],
  },
  "high cholesterol": {
    herbs: ["Garlic", "Fenugreek", "Turmeric"],
    remedies: ["Garlic cloves daily", "Fenugreek seeds in water", "Turmeric milk"],
    diet: ["Avoid fried foods", "Increase fiber", "Healthy fats"],
  },
  diabetes: {
    herbs: ["Bitter melon", "Fenugreek", "Cinnamon"],
    remedies: ["Bitter melon juice", "Fenugreek powder", "Cinnamon tea"],
    diet: ["Low glycemic foods", "Whole grains", "Avoid processed sugar"],
  },
  indigestion: {
    herbs: ["Fennel", "Ginger", "Peppermint"],
    remedies: ["Fennel tea", "Ginger lemon water", "Peppermint oil massage"],
    diet: ["Eat smaller meals", "Avoid heavy food", "Drink ginger tea"],
  },
  "muscle pain": {
    herbs: ["Turmeric", "Ginger", "Boswellia"],
    remedies: ["Turmeric paste", "Ginger oil massage", "Boswellia capsules"],
    diet: ["Magnesium-rich foods", "Anti-inflammatory foods", "Drink water"],
  },
  "joint pain": {
    herbs: ["Turmeric", "Ginger", "Ashwagandha"],
    remedies: ["Turmeric milk", "Ginger tea", "Ashwagandha powder"],
    diet: ["Omega-3 rich foods", "Leafy greens", "Avoid sugar"],
  },
  "skin dryness": {
    herbs: ["Aloe Vera", "Coconut oil", "Olive oil"],
    remedies: ["Aloe Vera gel", "Coconut oil massage", "Olive oil face mask"],
    diet: ["Drink water", "Vitamin E rich foods", "Avoid hot showers"],
  },
  "dark circles": {
    herbs: ["Cucumber", "Almond oil", "Rose water"],
    remedies: ["Cucumber slices", "Almond oil massage", "Rose water eyes"],
    diet: ["Get enough sleep", "Drink water", "Eat vitamin C rich foods"],
  },
  "weight loss": {
    herbs: ["Green tea", "Ginger", "Cinnamon"],
    remedies: ["Green tea daily", "Ginger lemon water", "Cinnamon in meals"],
    diet: ["High protein", "Fiber-rich foods", "Limit processed foods"],
  },
  "dull skin": {
    herbs: ["Turmeric", "Sandalwood", "Aloe Vera"],
    remedies: ["Turmeric face pack", "Sandalwood paste", "Aloe Vera gel"],
    diet: ["Vitamin C rich", "Drink water", "Avoid sugary foods"],
  },
  "hair growth": {
    herbs: ["Bhringraj", "Amla", "Hibiscus"],
    remedies: ["Bhringraj oil", "Amla juice", "Hibiscus hair mask"],
    diet: ["Protein rich", "Vitamin E", "Omega-3 rich foods"],
  },
  "throat infection": {
    herbs: ["Tulsi", "Ginger", "Honey"],
    remedies: ["Tulsi tea", "Ginger honey tea", "Salt water gargle"],
    diet: ["Warm liquids", "Avoid cold drinks", "Vitamin C rich foods"],
  },
  "high fever": {
    herbs: ["Elderberry", "Basil", "Peppermint"],
    remedies: ["Elderberry syrup", "Basil tea", "Peppermint cool compress"],
    diet: ["Stay hydrated", "Eat light", "Avoid spicy foods"],
  },
  "fatigue": {
    herbs: ["Ashwagandha", "Ginseng", "Rhodiola"],
    remedies: ["Ashwagandha tea", "Ginseng tea", "Rhodiola supplements"],
    diet: ["Iron-rich foods", "B vitamins", "Dates"],
  },
  "toothache": {
    herbs: ["Clove", "Turmeric", "Neem"],
    remedies: ["Clove oil", "Turmeric paste", "Neem leaf rinse"],
    diet: ["Avoid sugary foods", "Eat calcium-rich foods", "Drink water"],
  },
  "cold sores": {
    herbs: ["Lemon balm", "Aloe Vera", "Tea tree oil"],
    remedies: ["Lemon balm cream", "Aloe Vera gel", "Tea tree oil dab"],
    diet: ["Increase zinc intake", "Stay hydrated", "Eat Vitamin E rich foods"],
  },
  "hormonal imbalance": {
    herbs: ["Shatavari", "Ashwagandha", "Black Cohosh"],
    remedies: ["Shatavari powder", "Ashwagandha milk", "Black Cohosh tea"],
    diet: ["Avoid processed food", "Include healthy fats", "Eat more fiber"],
  },
  "menstrual cramps": {
    herbs: ["Ginger", "Cinnamon", "Turmeric"],
    remedies: ["Ginger tea", "Cinnamon in warm water", "Turmeric milk"],
    diet: ["Avoid caffeine", "Eat magnesium-rich foods", "Drink warm fluids"],
  },
  "nausea": {
    herbs: ["Ginger", "Peppermint", "Lemon balm"],
    remedies: ["Ginger tea", "Peppermint oil", "Lemon balm tea"],
    diet: ["Eat small meals", "Avoid heavy foods", "Stay hydrated"],
  },
  "bladder infection": {
    herbs: ["Cranberry", "Dandelion", "Uva ursi"],
    remedies: ["Cranberry juice", "Dandelion tea", "Uva ursi capsules"],
    diet: ["Drink plenty of water", "Avoid caffeine", "Eat fiber-rich foods"],
  },
  "cough": {
    herbs: ["Honey", "Ginger", "Tulsi"],
    remedies: ["Honey ginger tea", "Tulsi tea", "Steam inhalation"],
    diet: ["Warm liquids", "Avoid cold drinks", "Eat light meals"],
  },
  "allergies": {
    herbs: ["Stinging nettle", "Butterbur", "Turmeric"],
    remedies: ["Stinging nettle tea", "Butterbur extract", "Turmeric milk"],
    diet: ["Avoid dairy", "Eat anti-inflammatory foods", "Stay hydrated"],
  },
  "knee pain": {
    herbs: ["Ginger", "Turmeric", "Boswellia"],
    remedies: ["Ginger tea", "Turmeric paste", "Boswellia capsules"],
    diet: ["Omega-3 rich foods", "Eat bone broth", "Magnesium-rich foods"],
  },
  "varicose veins": {
    herbs: ["Horse chestnut", "Witch hazel", "Gotu kola"],
    remedies: ["Horse chestnut cream", "Witch hazel compress", "Gotu kola supplements"],
    diet: ["Vitamin C rich foods", "Avoid standing for long periods", "Increase fiber"],
  },
  "menopause": {
    herbs: ["Black Cohosh", "Red Clover", "Dong Quai"],
    remedies: ["Black Cohosh capsules", "Red Clover tea", "Dong Quai tincture"],
    diet: ["Increase phytoestrogens", "Avoid processed sugars", "Eat balanced meals"],
  },
  "pms": {
    herbs: ["Chasteberry", "Ginger", "Lavender"],
    remedies: ["Chasteberry extract", "Ginger tea", "Lavender oil massage"],
    diet: ["Magnesium-rich foods", "Avoid caffeine", "Eat balanced meals"],
  },
  "ear infection": {
    herbs: ["Garlic", "Olive oil", "Tea tree oil"],
    remedies: ["Garlic oil drops", "Olive oil ear massage", "Tea tree oil ear drops"],
    diet: ["Stay hydrated", "Increase vitamin C intake", "Eat balanced meals"],
  },
  "kidney stones": {
    herbs: ["Chanca piedra", "Dandelion", "Cranberry"],
    remedies: ["Chanca piedra tea", "Dandelion root tea", "Cranberry juice"],
    diet: ["Drink plenty of water", "Avoid high oxalate foods", "Eat calcium-rich foods"],
  },
  "liver detox": {
    herbs: ["Milk thistle", "Dandelion root", "Turmeric"],
    remedies: ["Milk thistle capsules", "Dandelion root tea", "Turmeric milk"],
    diet: ["Increase fiber", "Eat antioxidant-rich foods", "Drink plenty of water"],
  },
};

const Recommendation = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const keyword = input.trim().toLowerCase();
    if (suggestions[keyword]) {
      setResult(suggestions[keyword]);
    } else {
      setResult("No suggestions found. Please try another symptom.");
    }
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-700">🌿 Personalized Herbal Recommendations</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="e.g. cold, acne, stress..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className="border px-4 py-2 rounded"
          required
        />
        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Get Suggestions
        </button>
      </form>

      {result && typeof result === "string" ? (
        <p className="mt-6 text-red-500 font-medium">{result}</p>
      ) : result ? (
        <div className="mt-6 bg-green-50 p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2 text-green-800">✨ Suggested Herbs:</h3>
          <ul className="list-disc list-inside mb-4">
            {result.herbs.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-green-800">🧪 Remedies:</h3>
          <ul className="list-disc list-inside mb-4">
            {result.remedies.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-green-800">🍽️ Diet Tips:</h3>
          <ul className="list-disc list-inside">
            {result.diet.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Recommendation;
