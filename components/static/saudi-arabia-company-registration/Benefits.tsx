import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/pvt-reg/benefit.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">Saudi Arabia has been a prominent choice of entrepreneurs for starting a business for many known reasons such as :</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong> Flexible Management:</strong> The flexibility of LLCs in Saudi Arabia with regard to corporate operations is one of its key advantages. Owners are able to alter the structure to suit their own requirements, allocating gains and losses as they see fit. For business owners, this flexibility offers a great level of independence.</p>
           <p><strong> Foreign Direct Investment:</strong> Saudi Arabia has worked hard in recent years to attract foreign investment in an attempt to diversify its economy away from the oil and gas sector. Establishing an LLC offers foreign investors a compelling chance to penetrate the local market. To make it easier for foreign investors and companies to incorporate in Saudi Arabia, the Ministry of Investment Saudi Arabia (MISA) has streamlined its regulations. MISA has aggressively pushed incentives to pique international companies' interest in making investments in the nation. </p>
           <p><strong> Ownership:</strong> There is a lot of flexibility in this corporate structure, especially when it comes to the management structure. An LLC permits its owners to maintain ownership and control over their company, in contrast to public corporations where stockholders have substantial power. Entrepreneurs and organizations can grow and expand their operations in accordance with their preferences and adjust to local market conditions and business practices by using the LLC structure, which empowers them to make decisions in line with the company vision and objectives. </p>
           <p><strong> Tax benefits:</strong> LLCs may benefit from lower tax rates in Saudi Arabia if they operate in certain industries and activities. Moreover, Zakat also apply to some Saudi companies run by Saudi citizens, however there are incentives and exemptions in place to promote investment. Furthermore, to avoid taxing the same income in both Saudi Arabia and the business person's home country, the Kingdom has negotiated double taxation treaties with a number of nations. These agreements might lessen the tax burden on international businesses. Additionally, depending on how the business is run, a firm may have to pay withholding taxes on dividends, interest, and royalties, among other payments.</p>
           <p><strong> Local Market Access:</strong> A business can function in the Saudi market, providing goods and services to the native populace and bolstering the nation's economy. Since an LLC is one of the most popular and well-known business forms in the Kingdom, having one in place makes it simpler to enter the Saudi market. One of the biggest and most active markets in the Middle East is the Saudi market, which is a major economic force. Having a presence in Saudi Arabia can result in more prospects and market expansion because of the country's quick innovation and substantial development.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Benefits of company registration in United Kingdom"
            className="Benefits-img w-100"
            height={550}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
