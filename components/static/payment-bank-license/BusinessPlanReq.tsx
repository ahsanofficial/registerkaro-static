import bft from '../../../assets/images/static/payment-bank-license/Business Plan Requirements for Payment Bank.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const BusinessPlanReq = ({ cityName }: HeroProps) => {
    return (
        <div id="BusinessPlanReq">
            <div className='BusinessPlanReq flex w-80 m-auto mobile-flex-column-reverse'>
                <div className="flex-7">
                    <p>Applicants seeking a Payment Bank license are required to submit project reports and business plans along with their applications. These plans must outline how the bank intends to achieve the objectives of establishing Payment Banks. The business plan provided by the applicant must be both accurate and feasible. Preference will be given to applicants proposing to establish Payment Banks with access points primarily in underdeveloped states or districts within the Central, East, and North-East regions of the country. Payment Banks must ensure a wide network of access points, especially in remote areas, either through Business Correspondents (BCs), their branches, or through networks provided by others. They are expected to employ technological solutions to expand their network and reduce costs.</p>
                    <p>If a Payment Bank strays from its stated business plan after receiving the license, the regulatory authority may take action. This could include restricting the bank's expansion, changing its management, or imposing other penalties as deemed appropriate.</p>
                </div>
                <div className='flex-3'>
                    <Image
                        alt="Business Plan Requirements for Payment Bank"
                        className="BusinessPlanReq-img w-100 Importance-img-h-100"
                        height={375}
                        loading="lazy"
                        src={bft}
                    />
                </div>
            </div>
        </div>
    )
}