import Image from 'next/image'
import React from 'react'
import bft from "../../../assets/images/static/international-trademark-registration/Madrid Protocol & Madrid Agreement.svg";

export const MadridProtocol = () => {
  return (
    <div id='MadridProtocol'>
      <div className='main-para'>
        <p>The Madrid Agreement was created exclusively to offer a means for an individual to submit a single trademark registration, resulting in trademark recognition in many countries at once. Not only was this procedure a more straightforward method of registering a trademark globally, but it also made it more affordable. In addition to streamlining the worldwide trademark registration process, the Madrid Agreement did away with the necessity of submitting, pursuing, or keeping up separate registration applications in several nations. The Madrid Agreement grants the mark the same legal standing in all of the participating nations as it does in the nation of registration from which it is assigned if the designated country’s Trademark Office fails to submit a rejection to the World Intellectual Property.</p>
        <p>Although there are numerous parallels between the Madrid Agreement and the Madrid Protocol, there are also certain differences that should be noted. These distinctions are as follows:</p>
      </div>
      <div className="madridProtocol flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Madrid Protocol & Madrid Agreement"
            className="Importance-img-h-100 w-100"
            height={420}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p><strong>1. </strong>While both states and intergovernmental organizations can accede to the protocol, only states can do so under the terms of the agreement.</p>
          <p><strong>2. </strong>While the cost structure in the protocol is basic, individual, and complementary, it is basic, complementary, and supplementary in the agreement.</p>
          <p><strong>3. </strong>While the protocol specifies an initial 18-month refusal term that can be extended, the agreement stipulates a 12-month refusal time.</p>
          <p><strong>4. </strong>The agreement specifies a 5-year dependency period, whereas the protocol specifies a 5-year period with potential for transformation.</p>
          <p><strong>5. </strong>The agreement’s validity is for 20 years, while the protocol only specifies ten years.</p>
          <p><strong>6. </strong>In the agreement, the office of origin is designated as a genuine or effective industrial or commercial establishment, but in the protocol, the domicile of origin is the establishment.</p>
        </div>        
      </div>      
    </div>
  )
}
