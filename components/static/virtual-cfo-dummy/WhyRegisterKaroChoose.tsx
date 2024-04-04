import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/virtual-cfo-services/why_registerkaro_for.svg";
interface HeroProps {
    cityName: string;
}
const WhyRegisterKaroChoose = ({ cityName }: HeroProps) => {
  return (
    <div id="WhyRegisterKaroChoose">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            <strong>Pool of Experts : </strong>
            RegisterKaro holds a large pool of Experts from all over the world
            specializing in the CFO services. Our team of experts makes sure
            that your work is taken care of in the most effective manner
            possible.
          </p>

          <p>
            <strong>Cost effective : </strong>
            RegisterKaro Virtual CFO services are of premium quality at the most
            efficient rate which suits the client’s pocket making sure that
            quality service is not the only thing client gain on our platform.
          </p>

          <p>
            <strong>Client-oriented approach : </strong>
            Our team of experts are well trained and equipped with the
            client-oriented approach, keeping in mind that the process must be
            client-centric, focusing on meeting all the requirement of their
            business, and therefore, satisfying their need.
          </p>

          <p>
            <strong>Process Alteration : </strong>
            For the fact that we focus on Client-centric approach, we keep our
            process structurization open for the client to alter it as per their
            need, requirements, and vision. For us, obtaining the best results
            is the focus, along with the Client satisfaction.
          </p>

          <p>
            <strong>Trusted partner of 10000+ Clients : </strong>
            RegisterKaro has earned the trust of more than 10000+ clients who
            have availed our virtual CFO services. Their trust with us from a
            term in continuity is the proof of our services backed by quality,
            and assurance.
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt="Why RegisterKaro for Virtual CFO Services?"
            className="WhyRegisterKaroChoose-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyRegisterKaroChoose;
