import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/rubber-board-registration/Eligibility.svg";
interface HeroProps {
    cityName: string;
}
export const Types = ({ cityName }: HeroProps) => {
  return (
    <div id="Types">
        
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-5">
          <Image
            alt="Eligibility "
            className="Importance-img-h-100 w-100"
            height={600}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
            <p><strong> Types of business: </strong>The type of business a company is operating depends on whether they are eligible to register under the Rubber Board of India, this includes rubber cultivation, trading and manufacturing of products, research and development in rubber technology and other activities. And also the business structure and the methodology the company operates on.</p>
            <p><strong> Legal Entity: </strong>The company must be a recognised legal entity, meaning that it must be registered in simple terms it means that it must have its existence on paper.</p>
            <p><strong> Compliance: </strong>Just like The point discussed above the company must have complied with all the laws and regulations that are necessary besides having its registration, if the company has complied then this would increase the trust of the board to make the company its member.</p>
            <p><strong> Financial Standing: </strong> Companies seeking Registration under this board may be required to show their financial planning, the business they ma, and their books of accounts for the board to show their financial position and health in the industry to conduct business.</p>
            <p><strong> Reputation: </strong>The reputation of the company seeking recognition under the board or any board matters a lot, their ethical conduct and reputation in the marketplace a big role in whether they stand a chance or not.</p>
        </div>
       
      </div>
    </div>
  );
};
