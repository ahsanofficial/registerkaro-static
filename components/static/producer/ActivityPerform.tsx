import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'
import five from '../../../assets/images/pvt-reg/checklist/five.svg'
import six from '../../../assets/images/pvt-reg/checklist/six.svg'
import seven from '../../../assets/images/pvt-reg/checklist/seven.svg'

export const ActivityPerform = () => {
  return (
    <div className='checklist' id='Activity'>
      <p className='main-para'>Following is the list of activities performed by a Producer Company in India:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Provide education to the mutual support principle to its members & others;"/>
          </div>
          <p>Provide education to the mutual support principle to its members & others;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Activities for the promotion of the interest of their members;"/>
          </div>
          <p>Activities for the promotion of the interest of their members;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Insurance of producers/their primary produce;"/>
          </div>
          <p>Insurance of producers/their primary produce;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="Sale, supply, or manufacture of equipment, machinery, or consumables mainly to their members;"/>
          </div>
          <p>Sale, supply, or manufacture of equipment, machinery, or consumables mainly to their members;</p>
        </div>
      </div>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={five} alt="Processing includes distilling, canning, preserving, brewing, packaging, drying & venting its members’ producer;"/>
          </div>
          <p>Processing includes distilling, canning, preserving, brewing, packaging, drying & venting its members’ producer;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={six} alt="Provide technical services, training, R&D, consultancy services & all other activities to promote its members’ interests;"/>
          </div>
          <p>Provide technical services, training, R&D, consultancy services & all other activities to promote its members’ interests;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={seven} alt="Promoting unique techniques of mutual & mutuality support;"/>
          </div>
          <p>Promoting unique techniques of mutual & mutuality support;</p>
        </div>
          
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={seven} alt="Promoting unique techniques of mutual & mutuality support"/>
          </div>
          <p>Financing of procurement, marketing, processing or other activities which comprise extending of the credit facilities or any other financial services to their members</p>
        </div>
        </div>
        <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={seven} alt="Promoting unique techniques of mutual & mutuality support;"/>
          </div>
          <p>Welfare measures/facilities for the members’ benefits as decided by the Board</p>
        </div>
       
      
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={seven} alt="Promoting unique techniques of mutual & mutuality support;"/>
          </div>
          <p>Any other activity, similar to any of the actions which promote or encourage the principles of mutual support among the members in any different manner</p>
        </div>
      </div>
    </div>
  )
}
