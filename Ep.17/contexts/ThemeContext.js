const { createContext, useState } = require("react");

export const ThemeContext = createContext("ThemeContext");

export function ThemeProvider({ children }) { 
  // ab is theme provider me jo bhi value pass hogi hum use yaha children me access kar sakte he 
    const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")),
  );
  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  );
}
