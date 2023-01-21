import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleonDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleonDarkModeClick}>
          {isDarkMode? "Dark": "Light"}Mode
      </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
