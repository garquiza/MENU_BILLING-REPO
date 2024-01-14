import React from "react";
import { Link } from "react-router-dom";
import PizzaImg from "../images/pizza.png";
import PastaImg from "../images/pasta.png";
import BurgerImg from "../images/burger.png";
import FriesImg from "../images/fries.png";
import DrinksImg from "../images/drinks.png";
import DessertImg from "../images/dessert.png";

const Menu = () => {
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
            <Link to={`/menu/${item.id}`}>
              <button className="view-details-button">View Details</button>
            </Link>
          </div>
        ))}
      </div>

      {/* BACK BUTTON */}
      <div className="back-button">
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

const menuItems = [
  { id: "pizza", name: "Pizza", image: PizzaImg },
  { id: "pasta", name: "Pasta", image: PastaImg },
  { id: "burger", name: "Burger", image: BurgerImg },
  { id: "fries", name: "Fries", image: FriesImg },
  { id: "drinks", name: "Drinks", image: DrinksImg },
  { id: "dessert", name: "Dessert", image: DessertImg },
];

export default Menu;
