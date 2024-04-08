import certificate from '../../../assets/images/static/shareholders-agreement/certificate.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A Shareholders’ Agreement stands as a foundational document governing the relationships and operations within a company, particularly focusing on the interactions among its shareholders. This comprehensive legal instrument plays a crucial role in providing clarity, structure, and guidelines for various facets of corporate governance. In the context of {cityName}, where corporate entities are thriving and dynamic, the significance of a well-crafted Shareholders’ Agreement cannot be overstated.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Importance" className="scrollTo">
                                <li>Importance of Shareholders’ Agreement</li>
                            </a>
                            <a href="#Clauses" className="scrollTo">
                                <li>Key Clauses in a Shareholders’ Agreement</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of a Shareholders’ Agreement</li>
                            </a>
                            <a href="#HowCreate" className="scrollTo">
                                <li>How to Create a Shareholders’ Agreement?</li>
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
                <p className="small-heading text-center">Shareholders’ Agreement</p>
                <div>
                    <Image alt="What is a Shareholders’ Agreement?" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}