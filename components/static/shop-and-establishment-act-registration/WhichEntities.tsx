import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/private-reg/benefit.svg'

export const WhichEntities = () => {
  return (

    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' id='WhichEntities'>
      
      <div className='flex-7 pt-5'>
      <p>Following is the list of entities that can apply for Shop and Establishment Act Registration:</p>
      <p>1: Wholesale and Retail Shops;</p>
      <p>2: Restaurant or eating house;</p>
      <p>3: Residential hotels;</p>
      <p>4: Warehouse, godown, or storeroom;</p>
      <p>5: Theatre or amusement or place of public entertainment;</p>
      <p>6: Workhouse or workplace used for trade/business;</p>
      <p>7: Premises where services are provide to customers including offices;</p>
      <p>8: Commercial establishment.</p>
      </div>
      <div className='flex-4 mt-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="WhichEntities-img w-100" height={350} loading="lazy" src={bft} />
      </div>
     </div>

  )
}
