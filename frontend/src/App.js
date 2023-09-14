import { useState, useEffect } from "react";
import "./App.css";
//import Navbar from "./components/Navbar";
//import {Browser, Routes, Route} from 'react-router-dom';

const App = () => {
  const [meal, setMeal] = useState([]);

  const handler = () => {

    fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=Seafood `)
      .then((res) => res.json())
      .then((result) => {
        setMeal(result);

   
       
  })
  };

  useEffect(() => {
    handler();
  },
   []);

  return ( 
  
 
    /*  <div class = "whole">
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
   </div>  */
    <div>
      {meal.map((item, index)=>{
        <div key={index}>
          <p> Meal: {item.strMeal}</p>
          <p> {item.meal.strMeal}</p>

        </div> 
      }
      )}
      </div>


  
    );
}


export default App;