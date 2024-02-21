import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/private-reg/benefit.svg'

export const WhichEntities = () => {
  return (

    <div className='benefits flex w-80 m-auto mobile-flex-column' id='WhichEntities'>
       <div className='flex-4 mt-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="WhichEntities-img w-100" height={350} loading="lazy" src={bft} />
      </div>
      <div className='flex-7 pt-5'>
      <p>The following entities are eligible for MSME Registration Online:</p>
      <p>1: Individuals, startups, business owners, and entrepreneurs</p>
      <p>2: Private and public limited companies</p>
      <p>3: Sole proprietorship</p>
      <p>4: Partnership firm</p>
      <p>5: Limited Liability Partnerships (LLPs)</p>
      <p>6: Self Help Groups (SHGs)</p>
      <p>7: Co-operative societies</p>
      <p>8: Trusts</p>
      </div>
     </div>

  )
}
