import certificate from '../../../assets/images/static/qatar-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In India, a trademark objection arises when the Trademark Registry expresses doubts over a trademark application, thereby impeding its prompt registration. Usually, this occurs because the mark has the capacity to violate one of the Trade Marks Act, 1999’s absolute grounds for denial or infringe upon an already-registered brand, i.e., be too similar and would confuse consumers. These justifications consist of:</p>
                <p><strong>1. </strong>Absence of uniqueness (using terms that are descriptive or generic)</p>
                <p><strong>2. </strong>Being dishonest (giving false information about a good or service)</p>
                <p><strong>3. </strong>resemblance to banned names or insignia</p>
                <p><strong>4. </strong>Unethical behaviour or controversy</p>
                <p><strong>5. </strong>An examiner issues an Examination Report outlining the objection(s) when they find such flaws.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhenRecieveObjection" className="scrollTo">
                                <li>When do you receive a trademark objection?</li>
                            </a>
                            <a href="#HowToReply" className="scrollTo">
                                <li>How do you reply to Trademark Objections?</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                             <li>Documents required for the Trademark Objection</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How can RegisterKaro help you in the process?</li>
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
                <p className="small-heading text-center">Company Registration in Qatar</p>
                <div>
                    <Image alt="What is Trademark Objection?" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}