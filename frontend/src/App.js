import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [meal, setMeal] = useState({});

  const handler = async () => {
    try {
      const response = await fetch("www.themealdb.com/api/json/v1/1/search.php?f=b");
      const data = await response.json();
      setMeal(data.meals[0]);
    } catch (error) {
      console.error("Error fetching meal:", error);
    }
  };

  useEffect(() => {
    handler();
  }, []);

  return (<body>
    <div class = "whole">
      <div class = "container">
      <h1 class = "title">Random Meals</h1>
     
      <button class = "button" onClick={handler}>Click</button>
      </div>
      <div class = "meal">
        <h2 >{meal.strMeal}</h2>
        <h2>CATEGORY: {meal.strCategory}</h2>
        <h2>AREA: {meal.strArea}</h2>
        <p>INSTRUCTIONS: <p></p> {meal.strInstructions}</p>
        <img  src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
    </div>
    </body>
  );
};

export default App;