import certificate from '../../../assets/images/pvt-reg/benefit.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>PESO certification is granted by the PESO organisation, also known as Chief Controller of Explosives(CCOE). This organisation administers, controls and looks after the safety requirements in the manufacturing, importing, exporting, selling, storage, transporting and handling of explosives, flammable material, pressure vessels petroleum and compressed gases, also petrol stations are administered by this organisation. It approves whether or not a company has passed on the important safety check, which builds trust in the company and its methodology of doing business.</p>
               <p>The mandatory licencing is for the following industries that deal with the following substances:</p>
               <p>1 . Petroleum/Gas Cylinders</p>
               <p>2 . Explosives/Aluminium Nitrate</p>
               <p>3 . Fabrication shops</p>
               <p>4 . Gas cylinder Testing Stations</p>
               <p>Generally, the timeline for obtaining a PESO certificate ranges from 90-100 days, this may vary depending upon the complexity of the application. The validity of the licence is mostly valid for three years and must be renewed after this time.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                                <li>Process of obtaining a licence </li>
                            </a>
    
                          
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents Required</li>
                            </a>
                           
                            
                            
                            <a href="#WhyChoose" className="scrollTo">
                                <li>How does Register Karo help ?</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                           

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">PESO(petroleum and Explosives and safety organisation)certificate</p>
                <div>
                    <Image alt="PESO certification is granted by the PESO organisation, also known as Chief Controller of Explosives(CCOE)." className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}