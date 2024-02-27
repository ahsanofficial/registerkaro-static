import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'


export const Cancellation = () => {
  return (
    <div id='Cancellation'>
      <p className='main-para'>The SPCB or UTPCC can cancel, suspend, or revoke the plastic waste authorization if the authorization holder:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Minimum 2 directors" />
          </div>
          <p>Fails to comply with the conditions and terms of the authorization</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Unique business name" />
          </div>
          <p>Fails to submit the annual returns or the renewal application</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="At least one director should be the resident of India" />
          </div>
          <p>Provides false or misleading information or documents</p>
        </div>
      </div>
    <div className="checklist flex w-80 m-auto mobile-flex-column">
      <div className="checklist-divs flex flex-column text-center align-center">
        <div>
          <Image height={125} width={125} src={one} alt="Minimum 2 directors" />
        </div>
        <p>Causes or is likely to cause environmental damage or harm to human health</p>
      </div>
      <div className="checklist-divs flex flex-column text-center align-center">
        <div>
          <Image height={125} width={125} src={one} alt="Minimum 2 directors" />
        </div>
        <p>Violates any provision of the Plastic Waste Management Rules, 2016 and 2018 or any other applicable law</p>
      </div>
      </div>
      <p className='main-para'>The SPCB or UTPCC will issue a notice to the authorization holder, giving them an opportunity to show cause why the authorization should not be cancelled, suspended, or revoked. The SPCB or UTPCC will consider the response of the authorization holder and decide whether to cancel, suspend, or revoke the authorization or not. The SPCB or UTPCC will communicate the decision to the authorization holder and the CPCB within 15 days of the decision.</p>
    </div>
  )
}
