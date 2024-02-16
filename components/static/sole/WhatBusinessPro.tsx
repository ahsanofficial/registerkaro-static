import Image from 'next/image'
import React from 'react'

import groceryshop from '../../../assets/images/assets/sole-proprietorship/icon/grocery_shops.svg'
import fast_food_vendors from '../../../assets/images/assets/sole-proprietorship/icon/fast_food_vendors.svg'
import manufacturing_businesses from '../../../assets/images/assets/sole-proprietorship/icon/manufacturing_businesses.svg'
import small_traders from '../../../assets/images/assets/sole-proprietorship/icon/small_traders.svg'
import repair_and_maintenance_services from '../../../assets/images/assets/sole-proprietorship/icon/repair_and_maintenance_services.svg'
import parlours from '../../../assets/images/assets/sole-proprietorship/icon/parlours.svg'
import Boutiques from '../../../assets/images/assets/sole-proprietorship/icon/boutiques.svg'
import retail_stores from '../../../assets/images/assets/sole-proprietorship/icon/retail_stores.svg'
import local_transportation_services from '../../../assets/images/assets/sole-proprietorship/icon/local_transportation_services.svg'
import clinical_and_medical_management_facilities from '../../../assets/images/assets/sole-proprietorship/icon/clinical_and_medical_management_facilities.svg'
import tutoring_services_and_so_on from '../../../assets/images/assets/sole-proprietorship/icon/tutoring_services_and_so_on.svg'

export const WhatBusinessPro = () => {
  return (
    <div className='checklist' id='WhatBusinessPro'>
          <p className='main-para'>Following are the various types of businesses in India that can be Sole Proprietorships:</p>
          <div className="checklist flex w-80 m-auto mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={groceryshop} alt="Minimum 10 members are required for the Registration in India"/>
                  </div>
                  <p>Grocery Shops</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={fast_food_vendors} alt="A minimum capital of Rs. 5 lakhs required"/>
                  </div>
                  <p>Fast food vendors</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={manufacturing_businesses} alt="Out of 10 members, at least 5 Directors are required"/>
                  </div>
                  <p>Manufacturing businesses</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={small_traders} alt="This Company can be established by the joining of at least 2 Institutions"/>
                  </div>
                  <p>Small Traders</p>
              </div>
          </div>
          <div className="checklist flex w-80 m-auto mt-4 mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={repair_and_maintenance_services} alt="Producer Company cannot be converted into a Public Limited Company"/>
                  </div>
                  <p>Repair & Maintenance Services</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={parlours} alt="This Company can be established by the joining of at least 2 Institutions"/>
                  </div>
                  <p>Parlours</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={Boutiques} alt="This Company can be established by the joining of at least 2 Institutions"/>
                  </div>
                  <p>Boutiques</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={retail_stores} alt="This Company can be established by the joining of at least 2 Institutions"/>
                  </div>
                  <p>Retail Stores</p>
              </div>
          </div>
          <div className="checklist flex w-80 m-auto mt-4 mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={local_transportation_services} alt="This Company can be established by the joining of at least 2 Institutions"/>
                  </div>
                  <p>Local Transportation Services</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={clinical_and_medical_management_facilities} alt="This Company can be established by the joining of at least 2 Institutions"/>
                  </div>
                  <p>Clinical & Medical Management Facilities</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={tutoring_services_and_so_on} alt="This Company can be established by the joining of at least 2 Institutions"/>
                  </div>
                  <p>Tutoring Services and so on.</p>
              </div>
          </div>
      </div>

  )
}
