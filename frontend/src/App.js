import { useState, useEffect } from "react";
import "./App.css";
import Cart from "./Cart"
import actualCart from "./actualCart"
//import { addItem } from "./Pages/AddItem";

// import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  const [meals, setMeal] = useState([]);
  const [cart, setCart] = useState([]);


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

   const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return ( 

    
 <BrowserRouter>
 <Routes>
   <body className = "body">
    <Cart cartItems={cart} /> 
  <Route
   path='/'
   element={<actualCart/>}
 />
   <div className = "container">
  {meals.map((item, index) => (
    <div  key={index} className="child"> 
      <h2>Meal: {item.strMeal}</h2>
      <p>Category: {item.strCategory}</p>
      <p>Area: {item.strArea}</p>
      <p>Instructions: {item.strInstructions}</p>
      <img className = "img" src={item.strMealThumb} alt={item.strMeal} />
    
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  ))}
</div>


</body>
</Routes>

  </BrowserRouter>
    );
}


export default App;