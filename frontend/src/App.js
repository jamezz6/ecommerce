import { useState, useEffect } from "react";
import "./App.css";
import { addItem } from "./Pages/AddItem";

//import Navbar from "./components/Navbar";
import {Browser, Routes, Route} from 'react-router-dom';

const App = () => {
  const [meals, setMeal] = useState([]);

  const handler = () => {

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
      .then((res) => res.json())
      .then((result) => {
        setMeal(result.meals || []);

   
       
  })
  };

  useEffect(() => {
    handler();
  },
   []);

  return ( 

    
  
   <body className = "body">
  
   <div className = "container">
  {meals.map((item, index) => (
    <div  key={index} className="child"> 
      <h2>Meal: {item.strMeal}</h2>
      <p>Category: {item.strCategory}</p>
      <p>Area: {item.strArea}</p>
      <p>Instructions: {item.strInstructions}</p>
      <img className = "img" src={item.strMealThumb} alt={item.strMeal} />
      <p>{console.log(index)}</p>
    </div>
  ))}
</div>
</body>

  
    );
}


export default App;