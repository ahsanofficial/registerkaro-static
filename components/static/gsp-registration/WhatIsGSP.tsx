import dft from "../../../assets/images/static/gsp-registration/pre-incorporation.svg";
import Image from 'next/image';

export const WhatIsGSP = () => {
    return (
        <div id="WhatIsGSP">
            <div className='whatisGSP flex w-80 m-auto mobile-flex-column'>
                <div className='flex-5'>
                    <div>
                        <Image
                            alt="What is GSP?"
                            className="Importance-img-h-100 w-100"
                            height={275}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
                <div className="flex-7">
                    <p><strong>1. </strong>GSP is a scheme facilitating preferential access for products originating from specific developing countries to the markets of the European Union.</p>
                    <p><strong>2. </strong>The EU has concluded trade agreements with certain non-EU countries which allow exports from the EU to enter the markets of these countries at a reduced or nil rate of duty.</p>
                    <p><strong>3. </strong>The primary objective of the GSP scheme is to provide essential access to EU markets for certain developing countries, thereby fostering their economic growth and development.</p>
                </div>            
            </div>
        </div>
    )
}