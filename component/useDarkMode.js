import { useEffect, useState } from "react";
// import styled from "styled-components";

function useDarkMode() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );

  const colorTheme = theme === "dark" ? "light" : "dark";
//   console.log(colorTheme,'usedarkmode side',theme);


  useEffect(() => {
    const root = document.body;
    console.log(root,'root data');
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;