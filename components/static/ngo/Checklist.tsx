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
            <Image height={125} width={125} src={one} alt="For private limited companies, a minimum of two directors is required" />
          </div>
          <p>For private limited companies, a minimum of two directors is required.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Public limited companies mandate a minimum of three directors." />
          </div>
          <p>Public limited companies mandate a minimum of three directors.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Private limited companies can have a maximum of 200 members, while there is no member limit for public limited companies." />
          </div>
          <p>Private limited companies can have a maximum of 200 members, while there is no member limit for public limited companies.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="No registration fee is required for NGO" />
          </div>
          <p>No registration fee is required for NGOs.</p>
        </div>
      </div>
      



    </div>
  )
}