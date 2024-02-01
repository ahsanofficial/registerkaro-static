import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/pvt-reg/benefit.svg'

export const Validity = () => {
    return (
        <div className='Validity flex w-80 m-auto mobile-flex-column' id='Benefits'>
            <div className='flex-5'>
                <Image alt="Private Limited Company sample" className="benefits-img w-100" height={382} loading="lazy" src={bft} />
            </div>
            <div className='flex-5'>
                <p>Once a Public Limited Company is registered, it remains valid unless it is dissolved or removed from the Company Register. Renewal is generally not required unless there are changes to the Company's information or legal obligations.</p>
            </div>
        </div>
    )
}
