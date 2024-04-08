import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/wordmark-registration/A_description_of_products.svg";
interface HeroProps {
    cityName: string;
}
const Products = ({ cityName }: HeroProps) => {
  return (
    <div id="Products">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="A description of products/services Involved"
            className="Products-img w-100"
            height={400}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
        <p> The products or services associated with a wordmark must be clearly defined in the trademark application. {cityName} follows the Nice Classification system, which categorizes goods and services into different classes (45 classes for goods and 11 classes for services). Applicants must specify the relevant classes under which their goods/services fall. For instance:</p>
            <p><strong>1. Goods: Class 25 – Clothing, footwear, headgear.</strong></p>
            <p><strong>2. Services: Class 35 – Advertising, business management, retail services.</strong></p>
        <p>A detailed description ensures that the wordmark is protected only for the specific goods/services mentioned in the application.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Products;


