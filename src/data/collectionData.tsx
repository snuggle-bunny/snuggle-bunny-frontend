import blackImg from "assets/collection/black.jpg";
import navyImg from "assets/collection/navy.jpg";
import pinkImg from "assets/collection/pink.jpg";
import redImg from "assets/collection/red.jpg";
import redShortImg from "assets/collection/red-short.jpg";

interface ICollectionData {
  title: string;
  image: string;
  price: number;
  salePrice?: number;
}

export const collectionData: ICollectionData[] = [
  {
    title: "Sultry Black Long Sleeve Satin Pyjama Set",
    image: blackImg,
    price: 50,
    salePrice: 38
  },
  { title: "Midnight Navy Long Sleeve Pyjama Set", image: navyImg, price: 50 },
  {
    title: "Blush Pink Long Sleeve Satin Pyjama Set",
    image: pinkImg,
    price: 50
  },
  {
    title: "Raspberry Red Short Sleeve Satin Pyjama Set",
    image: redShortImg,
    price: 50
  },
  {
    title: "Raspberry Red Long Sleeve Satin Pyjama Set",
    image: redImg,
    price: 50
  }
];
