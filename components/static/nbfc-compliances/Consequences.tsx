import bft from '../../../assets/images/static/nbfc-compliances/Consequences of Non-Compliance with NBFC Regulations.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Consequences = ({ cityName }: HeroProps) => {
    return (
        <div id="Consequences">
            
            <div className='Consequences flex w-80 m-auto mobile-flex-column-reverse'>
                <div className="flex-7">
                    <p>Failure to adhere to regulatory compliances in a timely manner as an NBFC can result in severe penalties imposed by the RBI. These penalties vary depending on the type of NBFC. Among the most significant repercussions is the potential revocation of the NBFC license, which could ultimately lead to the closure of the company. Additionally, monetary fines may be levied, impacting the financial stability and reputation of the institution. Moreover, repeated instances of non-compliance may attract even harsher penalties and increased regulatory scrutiny, further jeopardizing the business operations and sustainability of the NBFC. Therefore, it is imperative for NBFCs to diligently comply with regulatory requirements to avoid such detrimental consequences and uphold the integrity of their operations within the financial ecosystem.</p>
                </div>
                <div className='flex-5'>
                    <Image
                        alt="Consequences of Non-Compliance with NBFC Regulations"
                        className="Consequences-img w-100 Importance-img-h-100"
                        height={325}
                        loading="lazy"
                        src={bft}
                    />
                </div>
            </div>
        </div>
    )
}