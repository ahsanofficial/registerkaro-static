import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'

export const ChecklistDocumentRequired = () => {
  return (
    <div className='checklist' id='ChecklistDocumentRequired'>
        <div className='flex-3'>
        <p className='main-para'>Following is the list of all the documents required for Shop and Establishment Act Registration:</p>
        </div>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Sole Proprietorship;" />
          </div>
          <p>Identity proof of the Proprietor;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Firm constitute by the Notary Partnership Deed;" />
          </div>
          <p>PAN Card of the Proprietor;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Company is older than 10 years;" />
          </div>
          <p>Address proof of the shop or business establishment;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="If the annual turnover of the company is more than Rs. 100 crores." />
          </div>
          <p>Employees’ details;</p>
        </div>
        </div>
        <div className="checklist flex w-80 m-auto mobile-flex-column">

        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="If the annual turnover of the company is more than Rs. 100 crores." />
          </div>
          <p>Payment challan;</p>
        </div>

        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="If the annual turnover of the company is more than Rs. 100 crores." />
          </div>
          <p>Additional business licences vital for commencing the business.</p>
        </div>
      </div>
    </div>
  )
}