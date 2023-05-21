import blackImg from "assets/collection/black.jpg";
import navyImg from "assets/collection/navy.jpg";
import pinkImg from "assets/collection/pink.jpg";
import redImg from "assets/collection/red.jpg";
import redShortImg from "assets/collection/red-short.jpg";

export interface ICollectionData {
  title: string;
  image: string;
  price: number;
  salePrice?: number;
  id: string;
  sizes: {
    s: number;
    m: number;
    l: number;
    xl: number;
  };
}

export const collectionData: ICollectionData[] = [
  {
    id: "a1",
    title: "Sultry Black Long Sleeve Satin Pyjama Set",
    image: blackImg,
    price: 50,
    salePrice: 38,
    sizes: {
      s: 10,
      m: 10,
      l: 10,
      xl: 10
    }
  },
  {
    id: "2",
    title: "Midnight Navy Long Sleeve Pyjama Set",
    image: navyImg,
    price: 50,
    sizes: {
      s: 10,
      m: 10,
      l: 10,
      xl: 10
    }
  },
  {
    id: "a5",
    title: "Blush Pink Long Sleeve Satin Pyjama Set",
    image: pinkImg,
    price: 50,
    sizes: {
      s: 10,
      m: 10,
      l: 10,
      xl: 10
    }
  },
  {
    id: "a3",
    title: "Raspberry Red Short Sleeve Satin Pyjama Set",
    image: redShortImg,
    price: 50,
    sizes: {
      s: 10,
      m: 10,
      l: 10,
      xl: 10
    }
  },
  {
    id: "a4",
    title: "Raspberry Red Long Sleeve Satin Pyjama Set",
    image: redImg,
    price: 50,
    sizes: {
      s: 10,
      m: 10,
      l: 10,
      xl: 10
    }
  }
];
