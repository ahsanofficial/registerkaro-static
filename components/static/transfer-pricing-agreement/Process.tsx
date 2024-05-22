import certificate from '../../../assets/images/static/transfer-pricing-agreement/What Transfer Pricing Agreement_.svg';
import Image from 'next/image';
 
export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                
            <p>Intercompany agreements or contracts play a vital role in transfer pricing documentation. An agreement between companies in a group should make sense commercially for each party involved. Taxpayers risk facing additional tax audits, fines, and penalties when intercompany agreements are absent or faulty.</p>
           
            <p>Transfer pricing remains an important global concern for companies around the world. It applies to controlled transactions that are deemed as cross-border transactions between related parties. Related parties encompass not just parties within the same group, but also parties with a connection of direct or indirect control, such as control over the board of directors.</p>
            
            <p>Transfer pricing involves setting the prices for transactions between companies that are related to each other. Related party transactions must adhere to the arm's length principle. Prices in transactions between related parties should be the same as prices in transactions with third parties, given similar circumstances (market value).</p>
           
           
           
            


               

              

                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Why" className="scrollTo">
                                <li>Things to Know About Transfer Pricing Agreement</li>
                            </a>
                            <a href="#Whytransfer" className="scrollTo">
                                <li>Why Transfer Pricing</li>
                            </a>
                            <a href="#transferpricing" className="scrollTo">
                                <li>What to be there in Transfer Pricing Agreement:</li>
                            </a>
                            <a href="#pricingagreement" className="scrollTo">
                                <li>What to Take Care in Transfer Pricing Agreement</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li> How RegisterKaro helps you in the Registration process?</li>
                            </a> 
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Transfer pricing Agreement</p>
                <div>
                    <Image alt="transfer pricing agreement " className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}