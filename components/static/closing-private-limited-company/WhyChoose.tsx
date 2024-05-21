import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/closing-private-limited-company/How RegisterKaro Can Assist You in the Franchise Agreement Process_.svg"

export const WhyChoose = () => {
  return (
    <div id="WhyChoose">
      <p className="main-para">RegisterKaro has been one stop solution for the SSI registration for the varied ranges of benefits such as:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6">
           <p><strong> Pool of Experts:</strong> RegisterKaro holds a large pool of Experts from all over the world specializing in SSI registration services.  Our team of experts makes sure that your work is taken care of in the most effective manner possible.</p>
           <p><strong> Cost-effective:</strong> RegisterKaro SSI registration services are of premium quality at the most efficient rate, which suits the client's pocket, making sure that quality service is not the only thing the client gains on our platform.</p>
           <p><strong> Client-oriented Approach:</strong> Our team of experts is well trained and equipped with a client-oriented approach, keeping in mind that the process must be client-centric, focusing on meeting all the requirements of their business and, therefore, satisfying their needs.</p>
           <p><strong> Process Alteration:</strong> For the fact that we focus on a Client-centric approach, we keep our process structurization open for the client to alter it as per their need, requirements, and vision.  For us, obtaining the best results is the focus, along with the Client satisfaction.</p>
           <p><strong> Trusted partner of 10000+ Clients:</strong> RegisterKaro has earned the trust of more than 10000+ clients who have availed our SSI registration services.  Their trust in us from a term in continuity is proof of our services backed by quality and assurance.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="How RegisterKaro helps you in the Registration process?"
            className="Importance-img-h-100 w-100"
            height={550}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};