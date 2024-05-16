import dft from "../../../assets/images/static/gsp-registration/private (copy).svg";
import Image from 'next/image';

export const RegionalCumulationGroups = () => {
    return (
        <div>
            <p className="main-para">Regional cumulation applies to three distinct groups of beneficiary countries under GSP:</p>
            <div className='regionalCumulationGroups flex w-80 m-auto mobile-flex-column'>
                <div className='flex-3'>
                    <div>
                        <Image
                            alt="Regional cumulation of origin "
                            className="Importance-img-h-100 w-100"
                            height={225}
                            loading="lazy"
                            src={dft}
                        />
                    </div>
                </div>
                <div className="flex-7">
                    <p><strong>Group I: </strong> Brunei-Darussalam, Cambodia, Indonesia, Laos, Malaysia, Philippines, Thailand & Vietnam.</p>
                    <p><strong>Group II: </strong>Bolivia, Colombia, Costa Rica, Ecuador, El Salvador, Guatemala, Honduras, Nicaragua, Panama, Peru & Venezuela.</p>
                    <p><strong>Group III: </strong>Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan & Sri Lanka</p>
                    <p><strong>Group IV: </strong>Argentina, Brazil, Paraguay, and Uruguay.</p>
                </div>                
            </div>
        </div>
    )
}