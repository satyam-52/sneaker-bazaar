/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import Particle from "./Particle";
import satyam from "../images/satyam.jpeg";
import shaivya from "../images/shaivya.jpeg";
import img from "../images/bg_bggenerator_com.png";

function AboutUs() {
  return (
    <div className="about-us__container" css={CSS}>
      <Particle />
      <div className="about-us">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="about__cards">
          <div className="card">
            <div className="container">
              <div className="img__container">
                <img src={satyam} alt="Satyam Dua" />
              </div>
            </div>
            <div className="description">
              <h1>Satyam Dua</h1>
              <p>
                He is responsible for designing all the looks and feel of the
                website along with all the functionalities. He is an engineering
                student in his pre-final year who has interests in the field of
                Web Development, Android Application Development, and Artificial
                Intelligence. When he is not working on developing new features
                for his projects, he can be found doing competitive coding,
                eating or working out (in order to eat more).
              </p>
              <div className="social__links">
                <a
                  href="https://linkedin.com/in/satyamdua-18101999"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/satyam-52"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
                <a
                  href="https://www.instagram.com/_satyam_dua_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="mailto://satyamdua18101999@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="tel://+917985334941" target="_blank" rel="noreferrer">
                  <i className="fas fa-phone-alt"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="description">
              <h1>Shaivya Shukla</h1>
              <p>
                An aspiring Front Web Developer, currently pursuing Bachelors in
                Computer Science. She primarily focus on bringing the web
                development projects to be creative and attractive. She is
                passionate about learning new technologies and implement them in
                her projects.
              </p>
              <div className="social__links">
                <a
                  href="https://www.linkedin.com/in/shaivya-shukla-6ab78a191/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/Shaivyaa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
                <a
                  href="https://www.instagram.com/_.shaivyaaaa._/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="mailto://shuka.shaivya19991@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="tel://+917388986572" target="_blank" rel="noreferrer">
                  <i className="fas fa-phone-alt"></i>
                </a>
              </div>
            </div>
            <div className="img__container">
              <img src={shaivya} alt="Satyam Dua" />
            </div>
          </div>
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
  font-family: "Work Sans", sans-serif;
  height: 100vh;

  #ts-particles {
    margin-top: 0;
  }

  .about-us {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    .heading {
      padding-top: 3.5rem;
      width: fit-content;
      margin-bottom: 25px;

      ::after {
        content: "";
        height: 4px;
        width: 50%;
        background-color: #ef476f;
        display: block;
      }
    }

    .about__cards {
      // border: 1px solid black;

      .card {
        backdrop-filter: blur(6px);
        display: flex;
        height: 230px;
        // border: 1px solid #073B4C;
        padding: 10px;
        margin-bottom: 10px;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 4px;

        @media screen and (max-width: 750px) {
          height: 220px !important;
        }

        @media screen and (max-width: 1100px) {
          height: 170px;
        }

        .container {
          width: 230px;

          @media screen and (max-width: 1100px) {
            width: 160px;
          }

          @media screen and (max-width: 750px) {
            display: none;
          }
        }

        .img__container {
          height: 210px;
          // border: 1px solid black;
          border-radius: 2600px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 15px;
          padding: 60px;
          background-color: white;

          img {
            height: 200px;
          }

          @media screen and (max-width: 750px) {
            display: none;
          }

          @media screen and (max-width: 1100px) {
            height: 150px;
            padding: 50px;

            img {
              height: 140px;
            }
          }
        }

        .description {
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          h1 {
            color: #073b4c;
            width: fit-content;

            ::after {
              content: "";
              height: 3px;
              width: 50%;
              background-color: #118ab2;
              display: block;
              margin-left: 2px;
            }
          }

          p {
            font-size: 18px;
          }

          .social__links {
            i {
              color: #073b4c;
              margin-right: 10px;
              transition: all 0.3s ease;
              cursor: pointer;

              :before {
                font-size: 18px;
              }

              :hover {
                color: #118ab2;
              }
            }
          }

          @media screen and (max-width: 1100px) {
            h1 {
              font-size: 22px;
            }

            p {
              font-size: 16px;
            }
          }

          @media screen and (max-width: 750px) {
            p {
              margin: 5px 0;
              overflow: scroll;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;

export default AboutUs;
