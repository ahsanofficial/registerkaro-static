import Image from 'next/image'
import React from 'react'
import bft from "../../../assets/images/pvt-reg/benefit.svg";

export const HowRegisterKaroHelps = () => {
  return (
    <div id='HowRegisterKaroHelps'>
      <div className="howRegisterKaroHelps flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <ul>
            <li><strong>Pool of Experts</strong>RegisterKaro holds a large pool of Experts from all over the world specializing in Trademark Related Services.  Our team of experts makes sure that your work is taken care of in the most effective manner possible.</li>
            <li><strong>Cost-effective</strong>RegisterKaro Trademark Related Services are of premium quality at the most efficient rate, which suits the client’s pocket, making sure that quality service is not the only thing the client gains on our platform.</li>
            <li><strong>Client-oriented approach</strong>Our team of experts is well trained and equipped with a client-oriented approach, keeping in mind that the process must be client-centric, focusing on meeting all the requirements of their business and, therefore, satisfying their needs.</li>
            <li><strong>Process Alteration</strong>For the fact that we focus on a client-centric approach, we keep our process structurization open for the client to alter it as per their need, requirements, and vision.  For us, obtaining the best results is the focus, along with the Client satisfaction.</li>
            <li><strong>Trusted partner of 10000+ Clients</strong>RegisterKaro has earned the trust of more than 10000+ clients who have availed of Trademark Related Services.  Their trust in us from a term in continuity is proof of our services backed by quality and assurance.</li>
          </ul>
        </div>
        <div className="flex-4">
          <Image
            alt="How RegisterKaro helps you with the International Trademark Registration?"
            className="HowRegisterKaroHelps-img w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        </div>     
      </div>      
    </div>
  )
}
