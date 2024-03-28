import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/epr-authorization-for-e-waste-dummy.tsx/Benefits_of_EPR_Registration_for_e-waste.svg'

interface HeroProps {
    cityName: string;
}
export const BenefitsOfState = ({ cityName }: HeroProps) => {
  return (
    <div id='BenefitsOfState'>
      <p className='main-para'></p>
      <div className="checklist flex w-80 m-auto mobile-flex-column-reverse">
          <div className='flex-7'>
          <p><strong>Accountability : </strong> E-waste EPR registration holds electronic device producers responsible for establishing collection and recycling systems for e-waste, ensuring prper disposal and preventing environmental and health hazards.</p>
          <p><strong>Collaboration : </strong> EPR registration encourages producers to collaborate with recycling facilities, fostering efficient and responsible e-waste recycling practices.</p>
          <p><strong>Resource Recovery : </strong> By partnering with specialized facilities, EPR registration for e-waste enables maximum resource recovery from e-waste, minimizing the environmental impact and promoting sustainable resource management.</p>
          <p><strong>Public Awareness : </strong> EPR registration promotes awareness and education about e-waste recycling initiatives, encouraging products to implement program that rise public consciousness about the importance of recycling electronic devices</p>
          <p><strong>Environmental Protection : </strong> e-waste EPR registration ensures a more systematic and responsible approach to managing e-waste, reduction of hazardous substances, and preservation of natural resources.</p>
          <p><strong>Sustainable Future : </strong> by implementing EPR registration for e-waste, we contribute to building a healthier, sustainable future by reducing the negative impacts of electronic waste on the environment and human health.</p>
          </div>
          <div className='flex-3'>

          <Image alt="Benefits of EPR Registration for e-waste" className="BenefitsOfState-img w-100" height={500} loading="lazy" src={bft} />

          </div>
      </div>
    </div>
  )
}
