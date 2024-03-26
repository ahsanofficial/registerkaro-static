import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/shop-and-establishment-act-registration/Which_entities_have_to_register.svg'

export const WhichEntities = () => {
  return (
  <div  id='WhichEntities'>
      <p className='main-para'>Following is the list of entities that can apply for Shop and Establishment Act Registration:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column'>
      <div className='flex-4 '>
          <Image alt="Which entities have to register under the Shop and Establishment Act?" className="WhichEntities-img w-100" height={500} loading="lazy" src={bft} />
      </div>
      <div className='flex-7 pt-5'>
      <p>1: Wholesale and Retail Shops;</p>
      <p>2: Restaurant or eating house;</p>
      <p>3: Residential hotels;</p>
      <p>4: Warehouse, godown, or storeroom;</p>
      <p>5: Theatre or amusement or place of public entertainment;</p>
      <p>6: Workhouse or workplace used for trade/business;</p>
      <p>7: Premises where services are provide to customers including offices;</p>
      <p>8: Commercial establishment.</p>
      </div>
    
     </div>
     </div>
  )
}
