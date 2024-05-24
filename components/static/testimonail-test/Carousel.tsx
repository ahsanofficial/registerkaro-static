import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import left_arrow from "../../../assets/images/icons/private-limited-company-registration/carousel/left_arrow.svg";
import right_arrow from "../../../assets/images/icons/private-limited-company-registration/carousel/right_arrow.svg";
import ClientComponent from "./ClientComponent";
import Image from "next/image";
import clientimg1 from '../../../assets/images/icons/private-limited-company-registration/carousel/client-one.svg'
import clientimg2 from '../../../assets/images/icons/private-limited-company-registration/carousel/client-two.svg'
import clientimg3 from '../../../assets/images/icons/private-limited-company-registration/carousel/client-three.svg'



const testimonialsList = [
  {
    image: clientimg1,
    stars: 5,
    clientName: "NASIR AHMED",
    review:"There was a bit of to and fro but the RegisterKaro team kept me updated on the whole process. Special shout out to Joel for being so helpful!. Overall, I'm very pleased with the service and would definitely recommend it to anyone who's looking for an easy way to register a business.Onwards and upwards!"
  },
  {
    image: clientimg2,
    stars: 5,
    clientName: "NASIR AHMED",
    review:"Team Register Karo helped our company incorporated into MCA.Team was very professional and cooperative.Response to all our doubts were cleared well."
  },
  {
    image: clientimg3,
    stars: 5,
    clientName: "NASIR AHMED",
    review:"RegisterKaro, Enough said.If you want prompt service and precise direction get in touch with RegisterKaro.Amazing service, on-time response, and super courteous people make the business experience beautiful."
  },
  {
    image: clientimg1,
    stars: 5,
    clientName: "NASIR AHMED",
    review:"RegisterKaro, Enough said.If you want prompt service and precise direction get in touch with RegisterKaro.Amazing service, on-time response, and super courteous people make the business experience beautiful."
  },
  {
    image: clientimg2,
    stars: 5,
    clientName: "NASIR AHMED",
    review:"There was a bit of to and fro but the RegisterKaro team kept me updated on the whole process. Special shout out to Joel for being so helpful!. Overall, I'm very pleased with the service and would definitely recommend it to anyone who's looking for an easy way to register a business.Onwards and upwards!"
  },
  {
    image: clientimg3,
    stars: 5,
    clientName: "NASIR AHMED",
    review:"Team Register Karo helped our company incorporated into MCA.Team was very professional and cooperative.Response to all our doubts were cleared well."
  },
]


interface ColorProps {
  clientTestmonailColor?: string;
}
const Carousel: React.FC<ColorProps> = ({ clientTestmonailColor })=> {
  const CustomPrevArrow: React.FC<CustomArrowProps> = ({
    className,
    onClick,
  }) => {
    return (
      <div onClick={onClick} className="left-arrow">
        {/* Desktop arrow */}
        <div>
          <Image onClick={onClick} src={left_arrow} alt="Previous" />
        </div>
      </div>
    );
  };

  const CustomNextArrow: React.FC<CustomArrowProps> = ({
    className,
    onClick,
  }) => {
    return (
      <div onClick={onClick} className="right-arrow">
        {/* Desktop arrow */}
        <div >
          <Image onClick={onClick} src={right_arrow} alt="next" />
        </div>
      </div>
    );
  };

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
     variableWidth: false,
    adaptiveHeight: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          arrows:false,
          slidesToShow: 1.1,
          slidesToScroll: 1,
          infinite:false,
        }
      },
      
        {
          breakpoint: 600,
          settings: {
            arrows:false,
            slidesToShow: 1.1,
            slidesToScroll: 1,
            infinite:false,
          }
        
      }
    ]
  };

  return (
    <div className="client-para-testimonail">
    <div className="container">
        <Slider {...settings}>
          {
            testimonialsList.map((testimonial, index) => {
              return (
                <ClientComponent
                  key={index}
                  image={testimonial.image.src}
                  stars={testimonial.stars}
                  clientName={testimonial.clientName}
                  review={testimonial.review}
                />
              )
            })
          }
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
