import React, { useState } from 'react';

function ThemeBox() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme((prevTheme) => !prevTheme);

  return (
    <div className={`box ${isDarkTheme ? 'dark' : 'light'}`}>
      <h2>Change Theme</h2>
      <button onClick={toggleTheme}>
        {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </div>
  );
}

export default ThemeBox;
