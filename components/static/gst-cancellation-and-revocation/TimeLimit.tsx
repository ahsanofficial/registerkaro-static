import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/gst-cancellation-and-revocation/Time Limit for filling the revocation application.svg";

const TimeLimit = () => {
  return (
    <div id="TimeLimit">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>The time limit for revocation of GST registration varies depending on whether it's initiated by the taxpayer or the tax authorities. If then Revocation is being sought by the taxpayer in that case they need to apply for revocation within 30 days from the relevant event which led to the revocation in form<strong> GST REG-21</strong>. Whereas if the Revocation is being sought by tax authorities, then in that case they can revoke the registration by an order within 30 days from the date of initiating the revocation proceedings in form<strong> GST REG-22</strong>. Moreover, if the reason for cancellation was non-filing of returns then in such cases the application for revocation can’t be made until the concerned returns are filled along with the payment of subsisting tax, interest and penalty.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Time Limit for filling the revocation application"
            className="Importance-img-h-100 w-100"
            height={250}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default TimeLimit;


