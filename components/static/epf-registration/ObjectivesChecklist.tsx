import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'


export const ObjectivesChecklist = () => {
  return (
    <div id='ObjectivesChecklist'>
      <p className='main-para'>Following are some important details need to provide for EPF Registration:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="No. of employees;" />
          </div>
         <p>No. of employees</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Complete name and address of your Company;" />
          </div>
         <p>Complete name and address of your Company</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Head office and branch details;" />
          </div>
         <p>Head office and branch details</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Type of business activity;" />
          </div>
         <p>Type of business activity</p>
        </div>
        </div>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Nature of the business;" />
          </div>
         <p>Nature of the business</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Company Registration date;" />
          </div>
         <p>Company Registration date</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Details of all the Directors or Partners;" />
          </div>
         <p>Details of all the Directors or Partners</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Basic details of the employees;" />
          </div>
         <p>Basic details of the employees</p>
        </div>
      </div>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Salary details of the employees;" />
          </div>
         <p>Salary details of the employees</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Company’s bank account details;" />
          </div>
         <p>Company’s bank account details</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="PAN Card." />
          </div>
         <p>PAN Card</p>
        </div>
      </div>
    </div>
  )
}
