import dft from "../../../assets/images/pvt-reg/benefit.svg";
import Image from 'next/image';

export const WhatIsTeaBoard = () => {
    return (
        <div id="WhatIsTeaBoard">
            
            <div className='WhatIsTeaBoard flex w-80 m-auto mobile-flex-column'>
                <div className='flex-3'>
                    <div>
                        <Image
                            alt="What is Tea Board of India?"
                            className="WhatIsTeaBoard-img w-100 Importance-img-h-100"
                            height={100}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
                <div className="flex-7">
                    <p>It is a governing body which regulates the tea business in India. It encourages tea cultivation, enforces quality standards, and supports tea producers, processors, exporters, etc. Registration with the board is referred to as  <em>“Tea Board registration”</em> which ensures legal compliance, advances high standards of quality, and supports the tea business in India.</p>
                </div>
            </div>
        </div>
    )
}