import React, { useState } from "react";
import MyOrder from "./MyOrder";
import { motion } from "framer-motion";


import Pepperoni from "../images/pepperoni.png";
import Hawaiian from "../images/hawaiian.png";
import Supreme from "../images/supreme.png";
import MeatLovers from "../images/meatlovers.png";

import Spaghetti from "../images/spaghetti.png";
import Carbonara from "../images/carbonara.png";
import Penne from "../images/penne.png";
import Baked from "../images/baked.png";

import Ultimate from "../images/ultimate.png";
import Chicken from "../images/chicken.png";
import Veggie from "../images/veggie.png";

import Water from "../images/water.png";
import Softdrinks from "../images/softdrinks.png";
import Coffee from "../images/coffee.png";

import Halo from "../images/halo-halo.png";
import Cake from "../images/cake.png";
import IceCream from "../images/ice-cream.png";


const MenuItem = ({ item, selectedItems, updateQuantity, addToOrder }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };

  const hoverVariants = {
    hover: { scale: 1.05 },
    noHover: { scale: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover="hover"
      variants={hoverVariants}
      className="menu-item"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
    >
    <img src={item.image} alt={item.name} className="menu-image" />
      <div className="menu-content">
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
    </motion.div>
  );
};

const Menu = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showMyOrder, setShowMyOrder] = useState(false);

  const addToOrder = (item) => {
    const existingItem = selectedItems.find(
      (selectedItem) => selectedItem.id === item.id
    );

    if (existingItem) {
      const updatedItems = selectedItems.map((selectedItem) =>
        selectedItem.id === item.id
          ? { ...selectedItem, quantity: selectedItem.quantity + 1 }
          : selectedItem
      );
      setSelectedItems(updatedItems);
    } else {
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

  const categories = ["Pizza", "Pasta", "Burger", "Drinks", "Dessert"];

   return (
    <div>
      <div className="menu-header">
        <h1>Menu</h1>
        <p>Explore our delicious offerings</p>
      </div>

      {/* MENU ITEMS */}
      {categories.map((category) => (
        <div key={category} className="menu-category">

          <h2 className="category-title">{category}</h2>

          <div className="menu-items">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (

                <MenuItem
                  key={item.id}
                  item={item}
                  selectedItems={selectedItems}
                  updateQuantity={updateQuantity}
                  addToOrder={addToOrder}
                />

              ))}
          </div>
        </div>
      ))}

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
  {
    id: "pepperoni",
    name: "Pepperoni Pizza",
    image: Pepperoni,
    price: 399,
    category: "Pizza",
  },
  {
    id: "hawaiian",
    name: "Hawaiian",
    image: Hawaiian,
    price: 399,
    category: "Pizza",
  },
  {
    id: "supreme",
    name: "Supreme",
    image: Supreme,
    price: 499,
    category: "Pizza",
  },
  {
    id: "meat-lovers",
    name: "Meat Lovers",
    image: MeatLovers,
    price: 499,
    category: "Pizza",
  },

  {
    id: "spag",
    name: "Spaghetti Bolognese",
    image: Spaghetti,
    price: 150,
    category: "Pasta",
  },
  {
    id: "carbonara",
    name: "Carbonara",
    image: Carbonara,
    price: 150,
    category: "Pasta",
  },
  {
    id: "baked-pasta",
    name: "Fusilli Pasta Bake",
    image: Baked,
    price: 200,
    category: "Pasta",
  },
  {
    id: "penne-pasta",
    name: "Penne Pasta with Mushrooms",
    image: Penne,
    price: 200,
    category: "Pasta",
  },

  {
    id: "chicken-burger",
    name: "Chicken Burger",
    image: Chicken,
    price: 75,
    category: "Burger",
  },
  {
    id: "veggie-burger",
    name: "Veggie Burger",
    image: Veggie,
    price: 85,
    category: "Burger",
  },
  {
    id: "ultimate-burger",
    name: "Ultimate Burger",
    image: Ultimate,
    price: 100,
    category: "Burger",
  },

  {
    id: "water",
    name: "Bottled Water",
    image: Water,
    price: 20,
    category: "Drinks",
  },
  {
    id: "softdrinks",
    name: "Soda",
    image: Softdrinks,
    price: 30,
    category: "Drinks",
  },
  {
    id: "coffee",
    name: "Black Coffee",
    image: Coffee,
    price: 50,
    category: "Drinks",
  },

  {
    id: "halo-halo",
    name: "Halo-Halo",
    image: Halo,
    price: 55,
    category: "Dessert",
  },
  {
    id: "cake",
    name: "Chocolate Chip Cake",
    image: Cake,
    price: 60,
    category: "Dessert",
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    image: IceCream,
    price: 20,
    category: "Dessert",
  },
];

export default Menu;