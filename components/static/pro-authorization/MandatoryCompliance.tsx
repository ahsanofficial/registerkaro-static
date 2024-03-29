import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/pro-authorization/Mandatory_Compliance_aft.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps {
    cityName: string;
}
export const MandatoryCompliance  = ({ cityName }: HeroProps) => {
  return (
    <div >
        
      <div className='flex justify-content-center' id='MandatoryCompliance'>
        <Image alt="Mandatory Compliance after getting PRO Authorization" className="MandatoryCompliance-img w-100" height={502} loading="lazy" src={dft} />
      </div>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <p>The applicant is required to comply with the following mandatory requirements attached with the service of obtaining PRO authorization:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should comply with all the terms and conditions of the PRO authorization granted by the CPCB and should implement the EPR plan, the collection mechanism, the channelization mechanism, the documentation mechanism, the record-keeping mechanism, the reporting mechanism and the verification mechanism as per the E-Waste (Management) Rules, 2016 and the guidelines issued by the CPCB.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should comply with all the applicable laws and regulations related to the e-waste management and should obtain and maintain the consent to establish or the consent to operate or the authorization or the registration or the license or any other document that indicates the approval of the concerned regulatory authority for the collection and channelization of e-waste.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should conduct regular monitoring of the e-waste parameters and should submit periodic reports on the e-waste performance and compliance to the CPCB or the State Pollution Control Boards or the Pollution Control Committees or the concerned regulatory authority as per the prescribed frequency and format.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should conduct annual verification or validation of the e-waste performance and compliance by the CPCB or the State Pollution Control Boards or the Pollution Control Committees or any other authority and should submit the verification or validation report to the CPCB or the State Pollution Control Boards or the Pollution Control Committees or the concerned regulatory authority as per the prescribed frequency and format.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should display the PRO authorization and the verification or validation report or the e-waste statement or the e-waste performance report or the e-waste compliance report or any other document that indicates the performance and compliance of the applicant with respect to the e-waste management at a conspicuous place at the office of the applicant or the website of the applicant or the CPCB.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should cooperate with the inspection or verification or audit or investigation or inquiry or enforcement or adjudication or litigation or arbitration or mediation or conciliation or any other process or action initiated by the CPCB or the State Pollution Control Boards or the Pollution Control Committees or the concerned regulatory authority or the court or the tribunal or any other competent authority with respect to the e-waste management and should provide all the necessary information and documents and should implement all the directions or orders or decisions or awards or settlements or agreements or any other outcomes of such process or action.</li>
          </ul>
      </div>
      </div>
    </div>
  )
}