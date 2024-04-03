import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const HowDoes = () => {
  return (
    <div id="HowDoes">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt=""
            className="HowDoes-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <h3>Pool of Experts</h3>
          <p>
            RegisterKaro holds a large pool of Experts from all over the world
            specializing in TDS Return Filing registration. Our team of experts
            makes sure that your work is taken care of in the most effective
            manner possible.
          </p>

          <h3>Cost-effective</h3>
          <p>
            RegisterKaro TDS Filing services are of premium quality at the most
            efficient rate, which suits the client’s pocket, making sure that
            quality service is not the only thing the client gains on our
            platform.
          </p>

          <h3>Client-oriented approach</h3>
          <p>
            Our team of experts is well trained and equipped with a
            client-oriented approach, keeping in mind that the process must be
            client-centric, focusing on meeting all the requirements of their
            business and, therefore, satisfying their needs.
          </p>

          <h3>Process Alteration</h3>
          <p>
            For the fact that we focus on a client-centric approach, we keep our
            process structurization open for the client to alter it as per their
            need, requirements, and vision. For us, obtaining the best results
            is the focus, along with the Client satisfaction.
          </p>

          <h3>Trusted partner of 10000+ Clients</h3>
          <p>
            RegisterKaro has earned the trust of more than 10000+ clients who
            have availed of TDS Filing Services. Their trust in us from a term
            in continuity is proof of our services backed by quality and
            assurance.
          </p>
        </div>
   
      </div>
    </div>
  );
};

export default HowDoes;
