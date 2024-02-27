import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'


export const HowEPRRegistration = () => {
  return (
    <div id='HowEPRRegistration'>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Minimum 2 directors" />
          </div>
          <p>Every Manufacturer in India who wants EPR Authorization should make an application in Form-1 of the E-Waste (M) Rules, 2016 and this application should be duly filled & accompanied with requested documentation.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Unique business name" />
          </div>
          <p>According to these Rules the applicant must provide the duly-filled application to the Member Secretary (CPCB).</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="At least one director should be the resident of India" />
          </div>
          <p>Form-1 should entail the legal information to the accumulation and channelization of E-Waste as mentioned under Section 2.1.1 to 2.1.7.</p>
        </div>
     
      </div>
    </div>
  )
}
