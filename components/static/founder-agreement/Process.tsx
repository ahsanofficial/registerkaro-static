import certificate from '../../../assets/images/pvt-reg/benefit.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A Founders’ Agreement is a legal document that defines the roles, responsibilities, and ownership of each founder in a business. It also covers important aspects such as intellectual property, decision making, dispute resolution, exit strategy, and more. A Founders’ Agreement is essential for any startup that wants to establish a clear and fair relationship among the co-founders and set the foundation for a successful venture.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                                <li>Component of Founders' Agreement</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Document Required for Founder's Agreement</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Procedure for Drafting Founder's Agreement </li>
                            </a>
                            <a href="#Whychoose" className="scrollTo">
                                <li>Meaning of terminating Founders' Agreement</li>
                            </a>
                            <a href="#Whychoose2" className="scrollTo">
                                <li>Why Choose RegisterKaro for Founder's Agreement Services</li>
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
                <p className="small-heading text-center">Company Registration in Dubai</p>
                <div>
                    <Image alt="An Overview Company Registration in Dubai After Abu Dhabi, the nation's capital, Dubai, the commercial center of the United Arab Emirates, is the second-richest emirate. Surprisingly," className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}