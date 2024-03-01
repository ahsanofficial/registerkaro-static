import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import objective_of_bis from '../../../assets/images/static/bis-certification/objective_of_bis.svg'
interface HeroProps {
  cityName: string;
}

export const ObjectivesChecklist = ({ cityName }: HeroProps) => {
  return (
    <div id='ObjectivesChecklist'>
      <div className='flex mt-3' id='KeyInitiatives'>
        <Image alt="Objectives of BIS,The Bureau of Indian Standards (BIS) operates with a set of core objectives aimed at fostering the continual and harmonious development of standardization, quality certification, and marking. These objectives encompas" className="ObjectivesChecklist-img w-100" height={482} loading="lazy" src={objective_of_bis} />
      </div>

      <p className='main-para'>The Bureau of Indian Standards (BIS) operates with a set of core objectives aimed at fostering the continual and harmonious development of standardization, quality certification, and marking. These objectives encompass:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Minimum 2 directors" />
          </div>
          <p><strong>Continual Development:</strong>Facilitating the ongoing and harmonious development of standardization, quality certification, and marking processes.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Unique business name" />
          </div>
          <p><strong>National Strategy Formation:</strong>Developing a seamless national strategy for the recognition of standards, synchronizing them with product development and exports.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="At least one director should be the resident of India" />
          </div>
          <p><strong>Thrust on Quality Control:</strong>Ensuring a renewed emphasis on quality control and standardization.</p>
        </div>
     
      </div>
    </div>
  )
}
