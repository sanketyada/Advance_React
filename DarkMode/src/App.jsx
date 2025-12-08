import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import { useEffect } from "react";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";
import React from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");
      
  //index.css me dark aur light ka logic hai

  let lightTheme = () => {
    setThemeMode("light");
  };

  let darkTheme = () => {
    setThemeMode("dark");
  };

  // Actual chage in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
