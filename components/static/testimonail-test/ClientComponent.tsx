import Image from "next/image";
import React from "react";
import star from '../../../assets/images/icons/private-limited-company-registration/Hero/star.svg'

interface ColorProps {
  clientName: string;
  review: string;
  image: string;
  stars: number;
}

const ClientComponent: React.FC<ColorProps> = ({  clientName, review,image,stars}) => {
  return (
    <div className="client-testimonial-cards">
      <div className="cardss">
        <div className="avatar">
          <Image src={image} alt="avatar-client" className="rounded-circle" width={89}  height={89}/>
        </div>
        <div className="client">
          <div className="stars">
            {
              Array.from({ length: stars }, (_, index) => {
                return (
                  <Image
                  key={index}
                  src={star}
                  alt="star"
                  width={20}
                  height={20}
                  />
                );
              })
            }
          </div>
          <h5>{clientName}</h5>
        </div>
        <div className="review-text">
          <p>
            {review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientComponent;
