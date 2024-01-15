import React, { useState } from "react";
import PizzaImg from "../images/pizza.png";
import PastaImg from "../images/pasta.png";
import BurgerImg from "../images/burger.png";
import FriesImg from "../images/fries.png";
import DrinksImg from "../images/drinks.png";
import DessertImg from "../images/dessert.png";
import MyOrder from "./MyOrder";

const Menu = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showMyOrder, setShowMyOrder] = useState(false);

  const addToOrder = (item) => {
    const existingItem = selectedItems.find(
      (selectedItem) => selectedItem.id === item.id
    );

    if (existingItem) {
      // If item already in order, update quantity
      const updatedItems = selectedItems.map((selectedItem) =>
        selectedItem.id === item.id
          ? { ...selectedItem, quantity: selectedItem.quantity + 1 }
          : selectedItem
      );
      setSelectedItems(updatedItems);
    } else {
      // If item not in order, add it with quantity 1
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromOrder = (itemId) => {
    const updatedItems = selectedItems.filter((item) => item.id !== itemId);
    setSelectedItems(updatedItems);
  };

  const updateQuantity = (itemId, amount) => {
    const updatedItems = selectedItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Math.max(item.quantity + amount, 0) }
        : item
    );
    setSelectedItems(updatedItems);
  };

  const toggleMyOrder = () => {
    setShowMyOrder(!showMyOrder);
  };

  return (
    <div>
      <div className="menu-header">
        <h1>Menu</h1>
        <p>Explore our delicious offerings</p>
      </div>

      {/* MENU ITEMS */}
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-image" />
            <p>{item.name}</p>
            <p>Price: ₱{item.price.toFixed(2)}</p>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>
                {selectedItems.find(
                  (selectedItem) => selectedItem.id === item.id
                )?.quantity || 0}
              </span>
              <button onClick={() => addToOrder(item)}>+</button>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW MY ORDER BUTTON */}
      <div className="view-order-button">
        <button onClick={toggleMyOrder}>View My Order</button>
      </div>

      {/* MY ORDER COMPONENT */}
      {showMyOrder && (
        <MyOrder
          selectedItems={selectedItems}
          removeFromOrder={removeFromOrder}
          updateQuantity={updateQuantity}
        />
      )}
    </div>
  );
};

const menuItems = [
  { id: "pizza", name: "Pepperoni Pizza", image: PizzaImg, price: 499 },
  { id: "pasta", name: "Spaghetti", image: PastaImg, price: 150 },
  { id: "burger", name: "Ultimate Burger", image: BurgerImg, price: 85 },
  { id: "fries", name: "Fries", image: FriesImg, price: 40 },
  { id: "drinks", name: "Iced Tea", image: DrinksImg, price: 15 },
  { id: "dessert", name: "Supreme Ice Cream", image: DessertImg, price: 5.99 },
];

export default Menu;
