import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Contact = () => {
  return (
    <div id="Contact">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>Navigating the incorporation process is more intricate than it appears. It’s crucial to steer clear of any oversights during application filing or document submission, as this can be a laborious and time-consuming endeavor. If time constraints or a lack of familiarity with registration compliances pose challenges, consider leveraging the services of RegisterKaro.</p>
            <p>Our relentless commitment revolves around eliminating factors that could impede the efficiency of the system, ensuring that our services are not only seamless but also easily accessible. This commitment to excellence is the driving force behind our reputation for unparalleled professionalism and quality.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Contact-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;


