import dft from "../../../assets/images/static/petrol-pump-license/Required Investment for the Procurement of a Fuel Pump License.svg";
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}
export const RequiredInvestment = ({ cityName }: HeroProps) => {
    return (
        <div id="RequiredInvestment">
            <p className="main-para">To initiate a conventional gas pump, the candidate must demonstrate the potential to invest a minimum of Rs. 25 lakh, and for rural gas pumps, the candidate must demonstrate a minimum investment of Rs. 12 lakh. The following formats are possible for the investment fund:</p>
            <div className='requiredInvestment flex w-80 m-auto mobile-flex-column-reverse'>
                <div className="flex-7 pb-5">
                    <p><strong>1. </strong>Money in savings accounts, bank deposits, or registered businesses</p>
                    <p><strong>2. </strong>Certificates of National Savings</p>
                    <p><strong>3. </strong>Bonds</p>
                    <p><strong>4. </strong>Dematerialization Form Shares of Listed Companies</p>
                    <p><strong>5. </strong>Mutual Funds</p>
                </div>
                <div className='flex-5'>
                    <div>
                        <Image
                            alt="Required Investment for the Procurement of a Fuel Pump License"
                            className="Importance-img-h-100 w-100"
                            height={220}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>          
            </div>
            <p className="main-para">It said that things like money, jewelry, and other things whose ownership cannot be established will not be taken into consideration. The balance of the current account will also not be taken into consideration. Bonds, mutual funds, and share values will only be taken into account to the extent of 60%. Obtain a CA's valuation certificate for the assets.</p>
        </div>
    )
}