import first_img from "../asset/images/image1.png";
import second_img from "../asset/images/image2.png";
import third_img from "../asset/images/image3.png";
import fourth_img from "../asset/images/image4.png";

export const carouselImages = [
  {
    id: 1,
    content: <img src={first_img} alt="Image 1" className="img-fluid img" />,
  },
  {
    id: 2,
    content: <img src={second_img} alt="Image 2" className="img-fluid img" />,
  },
  {
    id: 3,
    content: <img src={third_img} alt="Image 3" className="img-fluid img" />,
  },
  {
    id: 4,
    content: <img src={fourth_img} alt="Image 4" className="img-fluid img" />,
  },
];

export const cartContent = [
  { id: 1, title: "Subtotal", amount: 298.32 },
  { id: 2, title: "Shipping and Delivery", amount: 20.32 },
  { id: 3, title: "Tax", amount: 8.32 },
  { id: 4, title: "Discount", amount: 6.02 },
];
