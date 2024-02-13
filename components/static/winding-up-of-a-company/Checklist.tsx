import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'


export const Checklist = () => {
  return (
    <div className='checklist' id='Checklist'>
          <p className='main-para'>The process for a tribunal for winding up of a company involuntarily is as follows:</p>
          <div className="checklist flex w-80 m-auto mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={one} alt="PAN Card of the Proprietor"/>
                  </div>
                  <p>Section 275 of the Companies Act mandates that the company designate a liquidator. In order to determine if the company qualifies for a mandatory wind-up by the tribunal, the liquidator will need to review the company’s debts and credits. </p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={two} alt="Registration under the Shop & Establishment Act of the respective state"/>
                  </div>
                  <p>The liquidator will then be required to submit a report to the tribunal in accordance with Section 281 of the Act.</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={three} alt="Registration under GST, if the turnover of the business exceeds Rs. 20 lakhs"/>
                  </div>
                  <p>The tribunal then orders the liquidator to begin the process of dissolving the company in accordance with Section 281 of the Companies Act, 2013 after reviewing the report.</p>
              </div>
           
          </div>
      </div>

  )
}
