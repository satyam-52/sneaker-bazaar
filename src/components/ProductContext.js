import React, {createContext, useState} from 'react'

// IMPORT IMAGES - START

import img1 from "../images/img1.jfif";
import img2 from "../images/img2.jfif";
import img3 from "../images/img3.jfif";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.zoom";
import img6 from "../images/img6.zoom";
import img7 from "../images/img7.jfif";
import img8 from "../images/img8.jfif";
import img9 from "../images/img9.jfif";
import img10 from "../images/img10.webp";
import img11 from "../images/img11.webp";
import img12 from "../images/img12.webp";

// IMPORT IMAGES - END

export const ProductContext = createContext();

export function ProductProvider(props) {
  const [products, setProducts] = useState([
    {
      id: "1",
      img: img1,
      header: "Jordan 'Why Not?' Zer0.4 PF",
      rating: 5,
      price: 11495,
      fav: false
    },
    {
      id: "2",
      img: img2,
      header: "Air Jordan 1 Mid",
      rating: 5,
      price: 9995,
      fav: false
    },
    {
      id: "3",
      img: img3,
      header: "Nike Air Force 1 Mid '07",
      rating: 5,
      price: 8195,
      fav: false
    },
    {
      id: "4",
      img: img4,
      header: "Trigreca Sneakers",
      rating: 5,
      price: 96300,
      fav: false
    },
    {
      id: "5",
      img: img5,
      header: "KIDS-BOYS ADIDAS FOOTBALL NEMEZIZ MESSI .3 TURF SHOES",
      rating: 4,
      price: 5599,
      fav: false
    },
    {
      id: "6",
      img: img6,
      header: "WOMEN'S ADIDAS RUNNING ULTRABOOST 21 SHOES",
      rating: 4,
      price: 17999,
      fav: false
    },
    {
      id: "7",
      img: img7,
      header: "RS-X³ Twill Air Mesh Shoes",
      rating: 5,
      price: 9999,
      fav: false
    },
    {
      id: "8",
      img: img8,
      header: "Cali Backcourt Mid Rainbow Sneakers",
      rating: 4,
      price: 6999,
      fav: false
    },
    { id: "9",
      img: img9,
      header: "Anzarun Lite Sneakers",
      rating: 4,
      price: 2999,
      fav: false
    },
    {
      id: "10",
      img: img10,
      header: "Cruise Rider Women's Shoes",
      rating: 4,
      price: 6999,
      fav: false
    },
    {
      id: "11",
      img: img11,
      header: "Deva Mono Pop Women's Shoes",
      rating: 3,
      price: 5849,
      fav: false
    },
    {
      id: "12",
      img: img12,
      header: "RS-X Reinvent Women's Sneakers",
      rating: 5,
      price: 8999,
      fav: false
    }
  ]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  )
}