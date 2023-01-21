import React from "react";

function Header({isDarkMode,onDarkModeClick}){
    return(
    <Header>
      <button onClick = {onDarkModeClick}>
      {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    
    </Header>

    );
}

export default Header;