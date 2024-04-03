import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/pvt-reg/benefit.svg";

const Happens = () => {
  return (
    <div id="Happens">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p>In the case where you do not file the TDS Return within the prescribed timeline, you will be subject to penalty imposition under Section 234E of the Indian Income Tax Act. Consequently, Rs 200 will be imposed on you for each day delayed in the filing. However, in the matter where you do not file a TDS Return, a penalty of Rs 10,000 can be imposed on you, which can extend up to Rs. 1,00,000, along with the late filing fee. Moreover, not just non-filing but filing an incorrect TDS/TCS return can also result in penalties. However, if you can demonstrate that you have paid the due taxes, late filing fees, and any applicable interest to the government, and you have filed the return within one year from the due date, you will not incur penalties for delayed filing.</p>
        </div>
        <div className="flex-3">
        <Image
            alt=""
            className="Happens-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Happens;


