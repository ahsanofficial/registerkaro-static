import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/private-reg/benefit.svg'

export const FoodProduct = () => {
  return (
    <div id='FoodProduct'>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={550} loading="lazy" src={bft} />

      </div>
      <div className='flex-7 pt-5'>
      <p><strong>1:</strong>Syrups, synthetic beverages and sharbat</p>
      <p><strong>2:</strong>Vinegar</p>
      <p><strong>3:</strong>Pickles</p>
      <p><strong>4:</strong>Dehydrated vegetables and fruits.</p>
      <p><strong>5:</strong>Crushes, squashes, barley water, barrelled juice, cordials and other beverages containing fruit pulp, juice or nectar</p>
      <p><strong>6:</strong>Jellies, jams and marmalades</p>
      <p><strong>7:</strong>Tomato products, such as sauces and ketchup</p>
      <p><strong>8:</strong>Candied, preserved and crystallised peels and fruits</p>
      <p><strong>9:</strong>Chutneys</p>
      <p><strong>10:</strong>Bottled and canned fruits, pulps, juices and vegetables</p>
      <p><strong>11:</strong>Frozen vegetables and fruits</p>
      <p><strong>12:</strong>Sweetened aerated water without or with fruit pulps and juices</p>
      <p><strong>13:</strong>Any other item of vegetable or fruit not specified.</p>
      
      </div>
     </div>
      </div>
  )
}
