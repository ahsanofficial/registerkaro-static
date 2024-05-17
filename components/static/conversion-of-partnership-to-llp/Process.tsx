import certificate from '../../../assets/images/static/conversion-of-partnership-to-llp/conversion_of_partnership_tollp.svg';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
  }

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Limited Liability Partnership (LLP) has been governed in {cityName} by the Limited Liability Partnership Act, 2008. LLP is a separate legal entity and it has limited liability for its partners to the extent of their contribution. It combines the advantages of both Partnership and Company. LLP is one of the easiest forms of business to incorporate and manage. This comprehensive guide outlines the legal requirements, provisions, and steps involved in converting a partnership into an LLP. It emphasizes the importance of compliance, planning, and communication throughout the conversion process to ensure a smooth transition and successful integration into an LLP structure. </p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhyChoose" className="scrollTo">
                            <li>Why Choose LLP?</li>
                            </a>
                            <a href="#CorporateEntity" className="scrollTo">
                            <li>Limited Liability Partnership (LLP) as a Corporate Entity</li>
                            </a>
                            <a href="#Requirements" className="scrollTo">
                            <li>Requirements for Conversion of Partnership into LLP</li>
                            </a>
                            <a href="#ToIncorporate" className="scrollTo">
                            <li>To incorporate a Limited Liability Partnership (LLP)</li>
                            </a>
                            <a href="#ProcessConversion" className="scrollTo">
                            <li>Process for Conversion from Partner to Limited Liability Partnership</li>
                            </a>
                            <a href="#IncorporationRegistration" className="scrollTo">
                            <li>Incorporation by registration </li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                            <li>Incorporation Document Requirements for Limited Liability Partnerships </li>
                            </a>
                            <a href="#Penalties" className="scrollTo">
                            <li>Penalties for False Statements:</li>
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
                <p className="small-heading text-center">Conversion of Partnership To LLP</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="An Overview of Conversion of Partnership To LLP" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}