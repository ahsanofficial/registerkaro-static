import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'

export const Checklist = () => {
  return (
    <div className='checklist' id='Checklist'>
      
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Minimum two directors for a company" />
          </div>
          <p>Sole Proprietorship;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="minimum one director should be an Indian Resident" />
          </div>
          <p>Firm constitute by the Notary Partnership Deed;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Digital Signature Certificate" />
          </div>
          <p>Company is older than 10 years;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="DIN or Director Identification Number" />
          </div>
          <p>If the annual turnover of the company is more than Rs. 100 crores.</p>
        </div>
      </div>
    </div>
  )
}