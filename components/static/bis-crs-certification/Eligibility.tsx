
import React from 'react'

interface HeroProps { cityName: string; }
export const Eligibility =({ cityName }: HeroProps)  => {
  return (
    <div id='Eligibility'>
       <p className='main-para my-2'>Manufacturers producing items encompassed by the Compulsory Registration Order must seek BIS CRS Certification. Various forms, including Application, Undertaking, Affidavit, and others, are imperative for this process.</p>
    </div>
  )
}