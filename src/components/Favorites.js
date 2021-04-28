/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import { useContext } from "react";
import Favorite from "./Favorite";
import { FavoriteContext } from "./FavoriteContext";

function Favorites() {
  const [favorites] = useContext(FavoriteContext);

  return (
    <div className="favorites" css={CSS}>
      <h2>Favorites <i className="fa fa-heart"></i></h2>
      {Object.keys(favorites).map((k, i) => (
        <Favorite
          id={k}
          img={favorites[k].img}
          header={favorites[k].header}
          rating={favorites[k].rating}
          price={favorites[k].price}
          fav={favorites[k].fav}
          key={i}
        />
      ))}
    </div>
  );
}

const CSS = css`
  font-family: "Work Sans", sans-serif;
  margin: 15px 0;
  border-left: 1px solid lightgray;
  padding-left: 5px;

  :hover h2 > i {
    color: rgba(239, 71, 111, 1);
  }

  h2 {
    color: #073b4c;

    i {
      color: rgba(239, 71, 111, 0.5);
      transition: all 0.3s ease;
    }
  }
`;

export default Favorites;
