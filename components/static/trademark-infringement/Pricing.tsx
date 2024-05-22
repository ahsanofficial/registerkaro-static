import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/trademark-infringement/Pricing for Institution of the Suit.png";
interface HeroProps {
    cityName: string;
}
export const Pricing = ({ cityName }: HeroProps) => {
  return (
    
    <div id="Pricing">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
        <p>Generally, two costs are involved for the institution of an infringement suit, the first one is case filing and court fees which are paid to the court and the second one is the legal representation fee which is paid to an Advocate. Trademark infringement poses significant challenges for companies seeking to protect their brand identities. The unauthorised use of trademarks confuses consumers and undermines the value and reputation built by the trademark owner. RegisterKaro is a legal services platform that provides businesses and individuals with a wide range of legal solutions. There are several reasons why someone should choose RegisterKaro for their legal needs:</p>

          <p><strong>1. Experienced team:</strong> It has a team of experienced lawyers who specialise in various areas of law. This means that clients can receive expert advice and representation for their legal matters.</p>
          <p><strong>2. Convenience:</strong> It offers online legal services, which means that clients can access legal solutions from the comfort of their own homes or offices. This can save time and make the legal process more convenient.</p>
          <p><strong>3. Affordability:</strong>It offers transparent and affordable pricing for its legal services. Clients can choose from various packages and pay only for their needed services.</p>
          <p><strong>4. Range of services:</strong>It offers a wide range of legal services such as incorporation, trademark registration, GST services, resolving disputes etc. This means that clients can meet all their legal needs in one place.</p>
          <p><strong>5. Technology-enabled:</strong>It uses technology to streamline legal processes and make them more efficient. This can result in faster turnaround times and better communication with clients.</p>
          <p>Contact RegisterKaro experts now to get professional guidance for your trademark infringment.</p>
          
            

        </div>
        <div className="flex-4">
          <Image
            alt=" Pricing for Institution of the Suit"
            className="Importance-img-h-100 w-100"
            height={750}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
