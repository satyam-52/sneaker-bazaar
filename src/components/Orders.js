/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import Particle from "./Particle";

function Orders() {
  return (
    <div className="orders" css={CSS}>
      <div className="details">
        <h1>Under Construction</h1>
      </div>
      <div className="particles">
        <Particle />
      </div>
    </div>
  );
}

const CSS = css`
  margin-top: 8.8rem;
  font-family: "Work Sans", sans-serif;
  position: relative;
  height: 765px;
  
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(6px);

    h1 {
      width: fit-content;

      ::after {
        content: "";
        width: 40%;
        margin-left: 4px;
        height: 4px;
        display: block;
        background-color: #EF476F;
      }
    }
  }
`;

export default Orders;
