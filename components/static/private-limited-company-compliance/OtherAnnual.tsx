import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/pvt-reg/benefit.svg'

export const OtherAnnual = () => {
  return (
    <div id='OtherAnnual'>
      <p className='main-para mb-2'> Following are some other annual compliance for Private Limited Company in India:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={350} loading="lazy" src={bft} />
      </div>
     
      <div className='flex-5 pt-5'>
     <p><strong>1: </strong>GST returns, monthly, quarterly, and annual</p>
     <p><strong>2: </strong>Periodic TDS returns</p>
     <p><strong>3: </strong>Calculation of the tax liability in advance</p>
     <p><strong>4: </strong>Income tax return filing</p>
     <p><strong>5: </strong>Report of tax audit filed</p>
     <p><strong>6: </strong>Submitting semi-annual easy returns</p>
     <p><strong>7: </strong>Submitting PF returns</p>
     <p><strong>8: </strong>Professional tax return filing</p>
     <p><strong>9: </strong>Regulation evaluation and reporting by various laws (Eg. Environment and Protection Act, Competition Act, Factory Act, etc.)</p>
      </div>
      </div>
      </div>
  )
}
