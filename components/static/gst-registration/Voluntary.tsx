import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/gst-registration/voluntry.svg";
interface HeroProps {
    cityName: string;
}
const Voluntary = ({ cityName }: HeroProps) => {
  return (
    <div id="Voluntary">
        <p className="main-para">Any businesses with an annual turnover of less than Rs. 20 Lakhs can voluntarily register under GST even though it is not mandatory by Laws. Following are some advantages of Voluntary GST Registration in {cityName}:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p><strong>1. </strong>SMEs in {cityName} can increase the scope of their businesses & find prospective clients & explore online platforms.</p>
            <p><strong>2. </strong>In GST, there is a complete flow of Input Credit right from manufacturers of the goods to the clients across the nation. Input Credit means a taxpayer while paying tax on output can deduct the tax that has been paid already on inputs & pay only the remaining amount. Voluntarily registered businesses can increase their margins & profits via this.</p>
            <p><strong>3. </strong>SMEs in {cityName} can extend their market by simply registering their e-commerce websites.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Voluntary Registration under GST"
            className="Voluntary-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Voluntary;


