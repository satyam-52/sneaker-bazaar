/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import Particles from "react-particles-js"
import particleConfig from "../config/particles-config"

function Particle() {
  return (
      <Particles params={particleConfig} css={CSS} />
  )
}

const CSS = css`
position: absolute !important;
width: 100%;
height: 100%;
margin-top: -6.5rem;
`;

export default Particle
