import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Eligible = () => {
  return (
    <div id="Eligible">
      <p className="main-para">
        If you intend to proceed ahead with the Copyright Registration, then in
        order to be eligible for the same under the Indian Copyright Act, you
        need to fall into one of the categories mentioned as follows:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            <strong>Author</strong>
          </p>
          <p>
            If you are an author, defining an individual who has originally
            created the work, has been a party in the making of the actual work,
            or has been an employer during whose employment course the work was
            created, or has been permitted to receive copyright for his work,
            then in such scenarios, you are eligible to file for copyright
            registration.
          </p>

          <p>
            <strong>Owner</strong>
          </p>
          <p>
            The owner of the original work is being exclusively provided with
            the exclusive rights under the Copyright Act to use, control, or
            distribute the original work by either making copies of the original
            work, performing, communicating the work to the people, or making
            variations of the originals. Consequently, the owner is entitled to
            file for copyright registration for his original work.
          </p>

          <p>
            <strong>Agent</strong>
          </p>
          <p>
            An authorized agent is also eligible to file for the copyright
            registration on the behalf of:
          </p>
          <ol className="ps-5">
            <li>The Owner or Co-Owner</li>
            <li>Author or Co-Author</li>
            <li>Copyright Claimant</li>
          </ol>
        </div>
        <div className="flex-3">
          <Image
            alt=""
            className="Eligible-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Eligible;
