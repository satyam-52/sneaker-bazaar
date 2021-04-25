/**@jsxRuntime classic */
/**@jsx jsx*/

import { css, jsx } from "@emotion/react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";

function App() {
  return (
    <div className="App" css={CSS}>
      <HeroSection
        headingPt1="Clearance"
        headingPt2Highlight="sale"
        headingPt3="live."
        subHeading="Flat 50% off!"
        buttonText="Check it out!"
      />
      <Products />
    </div>
  );
}

const CSS = css``;

export default App;
