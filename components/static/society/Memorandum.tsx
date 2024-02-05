import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'
import five from '../../../assets/images/pvt-reg/checklist/five.svg'
import six from '../../../assets/images/pvt-reg/checklist/six.svg'

export const Memorandum = () => {
  return (
    <div className='checklist' id='Checklist'>
      <p className='main-para'>Following are some checklist for Society Registration in India:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="A Society can be created by a minimum of 7 or more persons. Apart from persons from India, companies, foreigners, as well as other registered societies can also register for the Memorandum of association of the society."/>
          </div>
          <p>The Memorandum of Association of the society along with Rules & Regulations of society must be signed by every establishing member, witness by Gazetted Officer, Notary Public, Chartered Accountant, Oath Commissioner, Advocate, Magistrate first-class or Chartered Accountant with their official stamping and complete address.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Similar to Partnership firms, society can also be either unregistered or registered. But, only the registered societies will be able to withstand consigned properties and/or have an ensemble filed against or by the society."/>
          </div>
          <p>The memorandum must contain the name of the society, the object of the society. Also, it consists of details of members of the society registration along with their names, addresses, designations, and occupations. The following document has to be prepared, submitted and signed for the sake of registration</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Similar to Partnership firms, society can also be either unregistered or registered"/>
          </div>
          <p>Requesting society registration by providing covering letter, signed by all establishing members.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="Only the registered societies will be able to withstand consigned properties and/or have an ensemble filed against or by the society"/>
          </div>
          <p>Duplicate copy of Memorandum of Association of society along with certified copy.</p>
        </div>
      </div>
    <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="Only the registered societies will be able to withstand consigned properties and/or have an ensemble filed against or by the society"/>
          </div>
          <p>Duplicate copy of Rules & Regulations of society along with duplicate copy duly signed by all establishing members.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="Only the registered societies will be able to withstand consigned properties and/or have an ensemble filed against or by the society"/>
          </div>
          <p>Address proof of registered office of society as well as no-objection certificate (NOC) issued by landlord.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="Only the registered societies will be able to withstand consigned properties and/or have an ensemble filed against or by the society"/>
          </div>
          <p>Affidavit avowed by secretary or president of society declaring relationship among subscribers</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="Only the registered societies will be able to withstand consigned properties and/or have an ensemble filed against or by the society"/>
          </div>
          <p>Few minutes of meeting regarding the society registration along with providing some essential documents.</p>
        </div>
      </div>
    </div>
  


  )
}
