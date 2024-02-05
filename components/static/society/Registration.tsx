import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'
import five from '../../../assets/images/pvt-reg/checklist/five.svg'
import six from '../../../assets/images/pvt-reg/checklist/six.svg'

export const Registration = () => {
  return (
    <div className='checklist' id='Registration'>
      <p className='main-para'>Following are some checklist for Society Registration in India:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="A Society can be created by a minimum of 7 or more persons. Apart from persons from India, companies, foreigners, as well as other registered societies can also register for the Memorandum of association of the society."/>
          </div>
          <p>A Society can be created by a minimum of 7 or more persons. Apart from persons from India, companies, foreigners, as well as other registered societies can also register for the Memorandum of association of the society.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Similar to Partnership firms, society can also be either unregistered or registered. But, only the registered societies will be able to withstand consigned properties and/or have an ensemble filed against or by the society."/>
          </div>
          <p>Similar to Partnership firms, society can also be either unregistered or registered. But, only the registered societies will be able to withstand consigned properties and/or have an ensemble filed against or by the society.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Similar to Partnership firms, society can also be either unregistered or registered"/>
          </div>
          <p>Society registration is maintained by state governments. Thus, the application for society registration must be created to the specific authority of the state, where the registered office of the society is situated.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="Only the registered societies will be able to withstand consigned properties and/or have an ensemble filed against or by the society"/>
          </div>
          <p>For Society registration, the establishing members must agree with the name of society first and then prepare for the Memorandum, followed by Rules & Regulations of the society.</p>
        </div>
      </div>
    </div>


  )
}
