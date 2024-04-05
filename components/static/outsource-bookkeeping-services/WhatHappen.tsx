import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const WhatHappen = () => {
  return (
    <div id="WhatHappen">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p>
            <strong>Expensive process :</strong>
            Sustaining bookkeeping work might bring a heavy burden to your
            pocket. This mere process itself costs thousands of dollars, which
            could have been used in another tangent of business to enhance the
            operations. Yet, after a good investment, quality assurance might
            not be promised.
          </p>

          <p>
            <strong>Time-consuming :</strong>
            Bookkeeping is a time-consuming process demanding a good amount of
            manpower along with a fine range of hours. This becomes a tedious
            process to handle yourself and be taken over with qualitative
            results.
          </p>

          <p>
            <strong>Complexity :</strong>
            Bookkeeping is a tedious process to cover owing to its complexity,
            which demands expertise in the field to deliver quality work. If you
            do not intend to outsource the bookkeeping services, the complexity
            of the process becomes a good reason for the halt in the process.
          </p>

          <p>
            <strong>Time restraint :</strong>
            Outsourced bookkeeping offers services even during off hours, like
            outside the office hours. However, this becomes a problem if you do
            not intend to outsource, as it is hard to retain employees after
            office hours to offer the services required for any reason. This
            problem is less faced if you outsource the services.
          </p>
        </div>
        <div className="flex-3">
          <Image
            alt=""
            className="WhatHappen-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatHappen;
