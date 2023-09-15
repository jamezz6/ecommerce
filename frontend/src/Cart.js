import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <h3>{item.strMeal}</h3>


      
            <img className="img" width="100px"src={item.strMealThumb} alt={item.strMeal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
