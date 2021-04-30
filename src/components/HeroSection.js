/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import { Link } from "react-router-dom";
import img from "../images/bg_bggenerator_com.png";
import Particle from "./Particle";

function HeroSection({
  headingPt1,
  headingPt2Highlight,
  headingPt3,
  subHeading,
  buttonText,
}) {
  return (
    <div className="hero__container" css={CSS}>
      <Particle />
      <div className="hero__section">
        <div className="text__section">
          <div className="hero__heading">
            <h1>
              {headingPt1} <span>{headingPt2Highlight}</span> {headingPt3}
            </h1>
            <h2>{subHeading}</h2>
          </div>
          <div className="button">
            {/* <Link to="/about-us"><button>{buttonText}</button></Link> */}
            <a href="#products"><button>{buttonText}</button></a>
          </div>
          {/* <a href="#products">
            <div className="scroll">
              <ion-icon
                size="large"
                className="icon"
                name="chevron-down-outline"
              ></ion-icon>
            </div>
          </a> */}
        </div>
      </div>
    </div>
  );
}

const CSS = css`
  margin-top: 6rem;
  height: calc(100vh - 6rem);
  // background: rgb(6, 214, 160);
  background: url(${img}) no-repeat,
    linear-gradient(
      45deg,
      rgba(6, 214, 160, 0.5) 25%,
      rgba(6, 214, 160, 0.1) 100%
    );
  background-size: cover, cover;
  box-shadow: 0px -5px 14px -5px rgba(0, 0, 0, 0.75) inset;
  -webkit-box-shadow: 0px -5px 14px -5px rgba(0, 0, 0, 0.75) inset;
  -moz-box-shadow: 0px -5px 14px -5px rgba(0, 0, 0, 0.75) inset;

  .hero__section {
    height: 100%;
    display: flex;
    position: relative;
    backdrop-filter: blur(6px);

    .text__section {
      height: 100%;
      width: 100%;
      max-width: 1650px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .hero__heading {
        text-align: center;
        h1 {
          text-transform: uppercase;
          font-size: 35px;

          span {
            color: #ef476f;
          }
        }

        h2 {
          font-size: 45px;
          color: #ef476f;
        }

        @media screen and (max-width: 430px) {
          h1 {
            font-size: 26px;
          }

          h2 {
            font-size: 36px;
          }
        }
      }

      .button {
        margin-top: 45px;

        button {
          padding: 7px 20px;
          background: transparent;
          border: 2px solid #ef476f;
          border-radius: 4px;
          text-transform: uppercase;
          color: #ef476f;
          cursor: pointer;
          transition: all 0.3s ease;

          :focus {
            outline: none;
            border: 2px solid maroon;
          }

          :hover {
            background-color: rgba(255, 255, 255, 0.3);
          }
        }
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        .scroll {
          position: absolute;
          bottom: 35px;
          border-radius: 25px;
          color: rgb(125, 239, 220);
          background-color: #ef476f;
          transition: all 0.3s ease;
          border: 5px solid rgb(125, 239, 220);

          :hover {
            color: #ef476f;
            background-color: rgb(125, 239, 220);
            border: 5px solid #ef476f;
          }

          ion-icon {
            padding: 5.5px 5px 0 5px;
          }

          // @media screen and (max-width: ) {
          //   left: 45.5%;
          //   right: 45%;
          // }
        }
      }
    }
  }
`;

export default HeroSection;
