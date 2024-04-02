import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/copyright-registration/Benefits_of_Copyright.svg";
interface HeroProps {
    cityName: string;
}
const Benefits = ({ cityName }: HeroProps) => {
  return (
    <div id="Benefits">
      <p className="main-para">
        Copyright registration brings a wide range of benefits to itself, which
        promotes its usage. A few of such benefits are as follows:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
          <Image
            alt="Benefits of Copyright Registration"
            className="Benefits-img w-100"
            height={780}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p>
            <strong>Authenticity</strong>
          </p>
          <p>
            When an artistic work, be it sound, painting, music, graphic, etc.,
            is registered and has been granted a copyright certificate, the work
            is classified as authentication in the market. This means that the
            work is an original creation of the owner and has not been copied
            from any other previous work. This grants the ease to the audience
            to bifurcate the original work from its pirated form.
          </p>

          <p>
            <strong>Protection from Infringement</strong>
          </p>
          <p>
            When an art is created, which becomes a masterpiece of the time, it
            is generally expected that people would try to copy the art form in
            one way or another to utilize the goodwill built under the name of
            such art. In order to protect the original creator of the piece from
            being a victim of credit theft in the name of art, a copyright
            certificate becomes the shield of protection, giving the damages to
            the owner in case of infringement and further restoring the rights
            with one.
          </p>

          <p>
            <strong>Monetization</strong>
          </p>
          <p>
            When you obtain a copyright certificate over your creation, you are
            allowed to monetize over such art form created. Expected that people
            would like to utilize the form of art to gain money, whether it be a
            sound, music, graphics, etc., you as an owner can sell your
            permission in return for the usage, which brings the road for
            monetization without risking the authentication and the rights.
          </p>

          <p>
            <strong>Ownership status</strong>
          </p>
          <p>
            A certificate for copyright grants you the ownership status for your
            work, stating that the work has been created by you. In some cases,
            even if the work has not been created by you, but the real owner has
            sold his copyright to you, now all the rights are vested with you
            regarding the usage, copy, sale, and rent of the work.
          </p>

          <p>
            <strong>Creativity Promotion</strong>
          </p>
          <p>
            The protection offered to creative work frees people from fear of
            misuse, which further promotes creativity, and therefore, more
            artistic works are produced.
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default Benefits;
