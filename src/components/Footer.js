/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer" css={CSS}>
      <div className="footer__top">
        <div className="footer__top-list">
          <h4 className="header">company</h4>
          <br />
          <Link to="/about-us">About</Link>
          <Link to="/about-us">Jobs</Link>
          <Link to="/about-us">For the Record</Link>
        </div>
        <div className="footer__top-list">
          <h4 className="header">communities</h4>
          <br />
          <Link to="/about-us">For Sellers</Link>
          <Link to="/about-us">Developers</Link>
          <Link to="/about-us">Advertising</Link>
          <Link to="/about-us">Investors</Link>
          <Link to="/about-us">Customers</Link>
        </div>
        <div className="footer__top-link-media-bundle">
          <div className="footer__top-list">
            <h4 className="header">useful links</h4>
            <br />
            <Link to="/about-us">Support</Link>
            <Link to="/about-us">Free Mobile App</Link>
          </div>
          <div className="footer__social-icons">
            <ul>
              <li>
                <Link to="about-us">
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="about-us">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="about-us">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-links">
          <ul>
            <li>
              <Link to="/about-us">
                <span>Legal</span>
              </Link>
            </li>
            <li>
              <Link to="/about-us">
                <span>Privacy Center</span>
              </Link>
            </li>
            <li>
              <Link to="/about-us">
                <span>Privacy Policy</span>
              </Link>
            </li>
            <li>
              <Link to="/about-us">
                <span>Cookies</span>
              </Link>
            </li>
            <li>
              <Link to="/about-us">
                <span>About Ads</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__bottom-lang-copyright-bundle">
          <div className="loc">
            <span>
              <i className="ion-earth"></i> India(English)
            </span>
          </div>
          <div className="copyright">
            <span>&#169; 2020-21 Sneaker Bazaar</span>
          </div>
          <div className="created__by">
            <span>
              Created by{" "}
              <a
                href="https://linkedin.com/in/satyamdua-18101999"
                target="_blank"
                rel="noreferrer"
              >
                Satyam Dua
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = css`
  display: flex;
  flex-direction: column;
  background: white;
  color: black;
  height: 70vh;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 75px;
  border-top: 1px solid lightgray;
  font-family: "Work Sans", sans-serif;

  .footer__top {
    padding-top: 70px;
    display: flex;
    justify-content: space-between;

    .footer__top-list {
      display: flex;
      flex-direction: column;

      h4 {
        // color: rgb(6, 214, 160);
        color: gray;
        text-transform: uppercase;
        font-size: 16px;
      }

      a {
        width: fit-content;
        color: black;
        margin: 10px 0;
        font-size: 16px;
        text-decoration: none;
        transition: all 0.3s ease;

        :hover {
          color: rgb(6, 214, 160);

          ::after {
            width: 100%;
          }
        }

        ::after {
          margin-left: 2px;
          content: "";
          display: block;
          width: 0;
          height: 1px;
          background: rgb(5, 214, 160);
          transition: all 0.3s ease;
        }
      }
    }

    .footer__top-link-media-bundle {
      flex: 0.5;
      display: flex;
      justify-content: space-between;

      .footer__social-icons {
        ul {
          display: flex;

          li {
            list-style: none;
            width: 50px;
            padding: 5px 5px 10px 5px;
            height: 50px;
            margin: 10px;
            font-size: 35px;
            background-color: rgba(130, 130, 130, 0.3);
            border-radius: 180px;
            text-align: center;
            cursor: pointer;

            :hover .fa-facebook {
              color: #00b2ff;
            }

            :hover .fa-twitter {
              color: #4267b2;
            }

            :hover .fa-instagram {
              color: #e1306c;
            }

            .fa-instagram {
              color: #c13584;
              transition: all 0.3s ease;
            }

            .fa-facebook {
              color: #4267b2;
              transition: all 0.3s ease;
            }

            .fa-twitter {
              color: #1da1f2;
              transition: all 0.3s ease;
            }
          }
        }
      }
    }
  }

  .footer__bottom {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;

    .footer__bottom-links {
      ul {
        display: flex;
        justify-content: space-evenly;

        li {
          list-style: none;
          margin: 0 15px;
          font-size: 12px;
          color: #777;
          cursor: pointer;
        }
      }
    }

    .footer__bottom-lang-copyright-bundle {
      .loc {
        margin-top: -15px;
        color: #777;
        font-size: 12px;
      }

      .copyright {
        margin-top: 15px;
        color: #777;
        font-size: 12px;
      }

      .created__by {
        margin-top: 15px;
        color: #777;

        a {
          color: #777;
          transition: all 0.3s ease;

          :hover {
            color: rgb(6, 214, 160);
          }
        }
      }
    }
  }

  @media screen and (max-width: 980px) {
    height: auto;
    padding: 15px;

    .footer__top {
      flex-direction: column;

      .footer__top-list {
        margin-bottom: 30px;
      }

      .footer__top-link-media-bundle {
        flex-direction: column;

        .footer__social-icons {
          margin: 10px 0;
        }
      }
    }

    .footer__bottom {
      flex-direction: column;
      margin-top: 40px;
      margin-bottom: 5px;

      .footer__bottom-links {
        ul {
          flex-wrap: wrap;
          word-wrap: break-word;
        }
      }

      .footer__bottom-lang-copyright-bundle {
        margin-top: 35px;
        text-align: center;
      }
    }
  }
`;

export default Footer;
