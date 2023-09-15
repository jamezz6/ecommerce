import React, { useState } from "react";
import { addItemToCart } from "./addItem";

const AddCart = () => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const item = { name: userInput }; // Customize the data structure as needed
      const response = await addItemToCart(item);

      if (response.success) {
        // Handle success, e.g., show a success message
        console.log("Item added to cart:", response.message);
      } else {
        // Handle errors, e.g., show an error message
        console.error("Failed to add item to cart:", response.error);
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("An error occurred:", error.message);
    }
  };

  return (
    <div>
      <h1>Add Item to Cart</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default AddCart;
