import certificate from '../../../assets/images/static/trademark-opposition/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A legal challenge made against a trademark’s registration by a third party is known as trademark opposition. Through this procedure, third parties can object to the registration of a new trademark application that they feel may violate their rights to an existing brand or confuse customers by being confusingly similar to an already-registered trademark. The Trademark opposition is filed within four months from the date of advertisement of the re-advertisement of the trademark in the Indian Trademark Journal by filing a form TM-O along with the prescribed fee.</p>
                
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhoCanOppose" className="scrollTo">
                                <li>Who can oppose the trademark?</li>
                            </a>                            
                            <a href="#WhenRecieveOpposition" className="scrollTo">
                                <li>When do you receive the Trademark Opposition?</li>
                            </a>
                            <a href="#HowToDeal" className="scrollTo">
                             <li>How to deal with Trademark Opposition?</li>
                            </a>
                            <a href="#DifferenceOppositionObjection" className="scrollTo">
                             <li>How is trademark opposition different from Trademark Objection?</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                             <li>How does RegisterKaro help with the Trademark Opposition?</li>
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
                <p className="small-heading text-center">What is Trademark Opposition</p>
                <div className='flex justify-content-center'>
                    <Image alt="What is Trademark Opposition?" className="certificate h-75 w-75" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}