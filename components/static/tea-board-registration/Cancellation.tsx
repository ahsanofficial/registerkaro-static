import dft from "../../../assets/images/pvt-reg/benefit.svg";
import Image from 'next/image';

export const Cancellation = () => {
    return (
        <div id="Cancellation">
            <div className='Cancellation flex w-80 m-auto mobile-flex-column'>
                <div className='flex-3'>
                    <div>
                        <Image
                            alt="Cancellation Of Licenses or Registrations"
                            className="Cancellation-img w-100 Importance-img-h-100"
                            height={100}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
                <div className="flex-7">
                    <p>The Licenses and Registrations will be revoked if there has been deliberate misrepresentation of facts, and the licensee has violated any of the provisions of the Tea Act, 1953. If the licensee has failed to follow the directions issued by the authority, or if the Authority has found about any unfair trade practice the licensee is dealing in the appropriate license is to be cancelled immediately.</p>
                </div>
            </div>
        </div>
    )
}