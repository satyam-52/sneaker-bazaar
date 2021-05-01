/**@jsxRuntime classic */
/**@jsx jsx*/

import { css, jsx } from "@emotion/react";
import { useEffect } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";

function App() {
  useEffect(() => window.scrollTo(0, 0), []);
  
  return (
    <div className="App" css={CSS}>
      <HeroSection
        headingPt1=""
        headingPt2Highlight="Curating"
        headingPt3="the most"
        subHeading="COVETED SNEAKERS"
        buttonText="Discover!"
      />
      <Products />
    </div>
  );
}

const CSS = css``;

export default App;
