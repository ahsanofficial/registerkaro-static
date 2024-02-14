import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/consumer-complaints/challenges.svg'


export const WindingUp = () => {
 return (
    <div id='WindingUp'>
     
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
       <div className='flex-7 pt-5'>
          <p><strong>Tedious Process</strong>The process for Consumer Complaint redressal is a multi dimensional process which demands heavy input when it comes to filing documents, evidence, and keeping a track of the follow up. These multidimensional prospects make the entire process tedious.</p>
          <p><strong>Complex filing</strong>Being a multidimensional process, there are a number of documents that are required to be filed at different stages of the process such as application, response to the application, etc.</p>
          <p><strong>Rigorous Follow-up</strong>The other important step in the consumer complaint process is the rigorous follow up to be taken care of at every stage. This creates a challenge in the process while proceeding ahead with the complaint at the consumer forum</p>
           </div>
           <div className='flex-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={350} loading="lazy" src={dft} />
          </div>
        </div>
      </div>
  )
}