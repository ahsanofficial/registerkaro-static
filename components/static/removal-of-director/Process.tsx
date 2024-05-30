import certificate from '../../../assets/images/pvt-reg/benefit.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Even though a company is a separate legal entity, it relies on individuals called Directors to make decisions and take actions on its behalf. The Board of Directors, made up of directors, is tasked with overseeing the company's operations and prioritizing the shareholders' interests. Provisions such as appointment, resignation, casual vacancy, disqualification, removal of directors, etc. are outlined in the Companies Act 2013.</p>
          <p className='text-justify'>  The Companies Act 2013, in Section 169, allows a company to dismiss a director before their term ends by passing an ordinary resolution. Members wishing to suggest the dismissal of a director must provide advanced notice to the company a minimum of 14 days prior to the meeting where the resolution for dismissal will be discussed.</p>
               <p className='text-justify'>Section 169 will be enforced no matter how the director was appointed, even if it conflicts with the company's articles or any agreement with the director.</p>
               <p className='text-justify'>Section 241 of the Companies Act 2013 states that members have the option to file a petition with the National Company Law Tribunal (“Tribunal”) in two specific situations. If the company is conducting its business in a way that harms the public, oppresses its members, or damages the company's interests, then it is considered detrimental.</p>
               <p className='text-justify' >Secondly, in the event of a major change in the company's management and control, such as modifications to the board of directors, membership, or share capital, which may have a negative impact on the company or its members. Nevertheless, modifications benefiting creditors, debenture-holders, or specific shareholders are not considered significant changes according to this provision. Section 242(2) provides a list of actions that the Tribunal can take if it deems a company's actions to be oppressive after receiving an application. One of the possible actions includes the removal of the managing director, manager, or any company directors.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                             <li>How can a director be removed?</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>Why Choose RegisterKaro for Company Registration in Qatar?</li>
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
                <p className="small-heading text-center">Rmoval of director</p>
                <div>
                    <Image alt="Director’s Removal" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}