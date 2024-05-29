import bft from '../../../assets/images/pvt-reg/benefit.svg';
import Image from 'next/image';

export const WhenToStrike = () => {
    return (
        <div id="WhenToStrike">
            <div className='WhenToStrike flex w-80 m-auto mobile-flex-column'>
                <div className='flex-3'>
                    <Image
                        alt="When to Strike Off an LLP"
                        className="WhenToStrike-img w-100 Importance-img-h-100"
                        height={125}
                        loading="lazy"
                        src={bft}
                    />
                </div>
                <div className="flex-7">
                    <p>Closure of an LLP can happen for various reasons, including voluntary winding up or compulsory winding up following the LLP close process. This can happen if members do not follow certain terms of the agreement, partners decide to exit or are unable to do so, funds are not distributed as per the contract, or debts are not paid on time by the business.</p>
                </div>
            </div>
        </div>
    )
}