import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/common-images/Why _choose.svg"

export const WhyChoose = () => {
  return (
    <div id="WhyChoose">
      <p className="main-para">RegisterKaro has been one step solution for getting Petrol Pump License, because of the varied ranges of benefits such as:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">        
        <div className="flex-7">
          <p><strong>Group of Experts: </strong>RegisterKaro holds a large group of experts from all over the world having specialization in getting Petrol Pump License. Our team of experts make sure that you work is taken care of in the most effective possible manner.</p>
          <p><strong>Cost-effective: </strong>RegisterKaro Petrol Pump License registration are of premium quality at the most efficient rate, which suits the client’s pocket, making sure that quality service is not the only thing which client gets on our platform.</p>
          <p><strong>Client-oriented approach: </strong>Our team of experts is well trained and equipped with a client-oriented approach, keeping in mind that the process must be client-centric, focusing on meeting all the requirements of their business and, therefore, satisfying their needs.</p>
          <p><strong>Trust builders: </strong>RegisterKaro builds the trust among its clients and because of only this trust we have built a good network in worldwide marketplace.</p>
          <p><strong>Trusted partner of 10000+ Clients: </strong>RegisterKaro has earned the trust of more than 10000+ clients who have availed our Petrol Pump License registration services.  Their trust in us from a term in continuity is proof of our services backed by quality and assurance.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="How RegisterKaro helps you in getting Petrol Pump License?"
            className="Importance-img-h-100 w-100"
            height={500}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
