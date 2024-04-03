import certificate from '../../../assets/images/static/italy-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Ireland is one of the world's most accessible and linked nations, therefore, It is a wonderful choice due to its geographic location, closeness to Europe, America, and the Middle East, and membership that grants access to some of the world's newest markets. Despite the fact that many people do not view Ireland as a tax haven, it can offer substantial advantages to people and companies wishing to establish a presence there. Ireland has minimal bureaucracy and cheap taxes, making it simple to form a corporation there and Foreign direct investments are also encouraged in this atmosphere which makes entrepreneurs to go for company registration in Ireland if the matter is of starting a new business.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of starting a Business in Ireland</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types of companies for Company Registration in Ireland</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents to carry for registration process</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Company Registration Process in Ireland</li>
                            </a>
                            <a href="#Prerequisites" className="scrollTo">
                                <li>Types of taxes applicable in Ireland</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why Choose RegisterKaro for Company Registration in Ireland?</li>
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
                <p className="small-heading text-center">Company Registration in Italy</p>
                <div>
                    <Image alt="An Overview of Company Registration in Italy" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}