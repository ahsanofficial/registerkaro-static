import certificate from '../../../assets/images/pvt-reg/benefit.svg';
import Image from 'next/image';
 
export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                
            <p>AYUSH, short for Ayurvedic, Yoga & Naturopathy, Unani, Siddha, and Homeopathy, represent ancient forms of medicine popular in India. Pre-2014, these therapies were unregulated until the establishment of an AYUSH Ministry. This Ministry introduced a regulatory framework for AYUSH businesses in manufacturing, selling, marketing, and exporting products domestically and internationally. AYUSH licenses are now a crucial aspect of this framework, with unlicensed businesses prohibited from operating in India. These licenses are granted by the state AYUSH Ministry under which the business operates, following provisions in the Drugs and Cosmetics Rules, 1945, business involving import/export, drugs, or cosmetics requires compliance with the Drugs and Cosmetics Act of 1940 and the Drugs and Cosmetics Rules of 1945. Any company dealing with herbal, Unani, or ayurvedic products must obtain an AYUSH License. Ancient Indian doctors treated patients with ayurvedic and Unani medicines, known for their lack of side effects, which has contributed to their global popularity over allopathic or homeopathic alternatives.</p>
            

              

                <div className='page-point'>
                    <ul>
                        <ul>
                        <a href="#Why" className="scrollTo">
                                <li>Types of AYUSH License</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Documents Required</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>How to Get AYUSH License</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>How RegisterKaro helps you in the Registration process?</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Types of AYUSH License</p>
                <div>
                    <Image alt="Ayush License" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}