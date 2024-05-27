import bft from '../../../assets/images/pvt-reg/benefit.svg';
import Image from 'next/image';

export const HowRegisterKaro = () => {
    return (
        <div id="HowRegisterKaro">
            
            <div className='HowRegisterKaro flex w-80 m-auto mobile-flex-column'>
                <div className='flex-5'>
                    <div>
                        <Image
                            alt="How can RegisterKaro help?"
                            className="HowRegisterKaro-img w-100 Importance-img-h-100"
                            height={225}
                            loading="lazy"
                            src={bft}
                        />
                    </div>
                </div>
                <div className="flex-7">
                    <p>RegisterKaro, India’s leading compliance platform, integrates many advanced technologies to offer a cutting-edge compliance framework for businesses, helping them minimize their risks. At RegisterKaro, we understand how important it is to ensure NBFC compliance for your business growth and success. Our team of experts has extensive experience and knowledge in handling NBFC compliances and procedures. With our expertise, you can trust that your compliance will be handled effectively and professionally so that you can focus on your business. If you're seeking a reliable and experienced team to manage your NBFC compliance, look no further than RegisterKaro.</p>
                </div>
            </div>
        </div>
    )
}