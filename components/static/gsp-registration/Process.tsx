import certificate from '../../../assets/images/static/gsp-registration/Vector Smart Object2 80.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-7'>
                <p className='text-justify'>Generalised System of Preferences (GSP) are unilateral preference granted by some developed countries for exports from {cityName}. However, the exporters are to satisfy the rules of origin for exports. However, exporters must adhere to stringent rules of origin to qualify for these preferential tariffs. These regulations made under this comply with that the product must be originating from {cityName} and exporters must adhere to stringent rules of origin to get eligible for GSP benefits. Compliance with these rules is imperative for Indian exporters seeking to capitalise on the advantages offered by GSP schemes in target markets.</p>
                
                <div className='page-point'>
                    <ul>
                        <ul>
                            
                            <a href="#WhatIsGSP" className="scrollTo">
                             <li>What is GSP?</li>
                            </a>
                            <a href="#WhoIssues" className="scrollTo">
                             <li>Who issues GSP Certificate of Origin in {cityName}?</li>
                            </a>
                            <a href="#Cumulation" className="scrollTo">
                             <li>Cumulation</li>
                            </a>
                            <a href="#RegionalCumulation" className="scrollTo">
                             <li>Regional cumulation of origin</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                             <li>Procedure for online application</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                             <li>Documents Required for GSP</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                             <li>Benefits of GSP</li>
                            </a>
                            <a href="#DifferenceGSPnUsual" className="scrollTo">
                             <li>Difference between GSP and the Usual Trade Law</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How RegisterKaro Can Assist You in the GSP Registration Process?</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a> 

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Generalised System of Preferences</p>
                <div>
                    <Image alt="Introduction to GSP" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}