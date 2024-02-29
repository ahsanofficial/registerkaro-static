import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'


export const NeedRNI = () => {
  return (
    <div id='NeedRNI'>
      <p className='main-para'>You will have to opt for RNI registration in case you are conduction one of the following activities:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Minimum 2 directors" />
          </div>
          <p><strong>Newspaper [Indian & Foreign]:</strong> To start their own newspaper, individuals must complete out the RNI newspaper registration form.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Unique business name" />
          </div>
          <p><strong>Editorials & Magazines:</strong> If you intend to release magazines on a regular basis. For magazines, you must have an RNI registration.</p>
        </div>
      </div>
      <p className='main-para'><strong>Note: </strong>You don’t need to know how to apply for an RNI number if you operate a news site because electronic news portals are exempt from RNI regulations. Moreover, you can obtain additional details regarding the qualifying requirements by visiting the website of the Indian newspaper registrar. If time is of the essence, peruse our numerous blogs on the subject. </p>
    </div>
  )
}
