import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <h2 className="header-title">Devmountain Eatery</h2>
      <nav className="header-button">
          <Link to='/'><button>Home</button></Link>
          <Link to='/newRecipe'><button>Add Recipe</button></Link>
      </nav>
    </header>
  );
};

export default Header;
