import certificate from '../../../assets/images/pvt-reg/benefit.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Our everyday use of technology has had a significant impact on how we conduct financial transactions. For many people, executing financial transactions has become more convenient and effective with the introduction of digital payment methods. Digital payments provide a faster way to complete transactions—no more standing in line or fretting about misplacing paper cheques. With just a few smartphone touches, we can now make payments and transfer money, simplifying and speeding up banking operations. But even with the ease of digital payments, many people still prefer to trade financially with cheques. For many years, people have regarded cheques as a secure way to send money and make purchases. However, there is a chance of a “bounce” or “dishonor” when using cheques. A “dishonored cheque” is one that the bank has returned for any number of reasons; this can lead to fines, penalties, or even jail time which is conveyed to the other faulted through cheque bounce notice.
                <br/> A cheque is a formal promise made in exchange for a certain amount of money from the payer (the person writing the cheque) to the payee (the person receiving it). Ideally, money is transferred from the payer’s account to the payee’s account by the payer’s bank. Nevertheless, there are instances in which the bank of the payer or the bank of the payee declines to honor this agreement. There could be several causes for this “decline.” When this happens, the cheque bounces and is referred to as a “bounced cheque .”</p>
                
                 <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                                <li>What is the check bounce notice?</li>
                            </a>
                            <a href="#WhyReg" className="scrollTo">
                                <li>Cheque Bounce Notice Vis-a-vis Negotiable Instrumrnt Act</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>When do you receive a notice for Cheque Bounce?</li>
                            </a>
                            <a href="#whyregs" className="scrollTo">
                                <li>How RegisterKaro helps you in the Cheque Bounce Notice??</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why Choose RegisterKaro for Company Registration in Dubai?</li>
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