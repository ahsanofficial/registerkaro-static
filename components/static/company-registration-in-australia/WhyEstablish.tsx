import dft from "../../../assets/images/static/company-registration-in-australia/one.svg";
import Image from 'next/image';

export const WhyEstablish = () => {
    return (
        <div id="WhyEstablish">
            <div className='whyEstablish flex w-80 m-auto mobile-flex-column-reverse'>       
                <div className="flex-7">
                    <p>Establishing a business in Australia offers owners limited liability protection, ensuring their personal assets are distinct from the company's. The Australian government is supportive of business growth, providing tax incentives and grants. </p>
                    <p>Australia has a low corporate tax rate and offers tax benefits for small businesses. Companies in Australia have access to various funding options, including venture capital, angel investors, and government grants. </p>
                    <p>With strong trade connections to Asia, Europe, and North America, Australia is an appealing choice for businesses seeking international expansion. The country boasts a well-educated workforce, particularly in technology and professional services, with a high standard of living that can attract and retain top talent.</p>
                    <p>A firm provides shareholders with limited liability, making them responsible for the company's debts only up to their investment value. In Australia, companies can benefit from tax concessions and a lower corporate tax rate. Registering a company can boost credibility, attracting customers, suppliers, and investors. </p>
                    <p>Different business models and ownership structures can be accommodated within companies, offering flexibility. Equity and debt financing are available to registered companies for growth, while shares can be easily bought and sold, facilitating efficient ownership transfers.</p>
                </div>
                <div className='flex-5'>
                    <div>
                        <Image
                            alt="Why to establish a business in Australia"
                            className="WhyEstablish-img w-100 Importance-img-h-100"
                            height={550}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}