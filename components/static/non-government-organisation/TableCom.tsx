import React from 'react'
interface HeroProps {
    cityName: string;
}
export const TableCom = ({ cityName }: HeroProps) => {
    return (
        <div id='Tablecom' className='w-80 m-auto' >
            
            <table>
                <tr>
                    <th className='first'>Trusts</th>
                    <th >Societies</th>
                    <th className='last '>Section 8 companies</th>
                </tr>
                <tr>
                    <td>Trusts are governed by the Indian Trusts <br/>Act and involve a trustee managing assets <br/> for the benefit of beneficiaries</td>
                    <td>Societies are registered under the Societies <br/> Registration Act and are managed by a governing body. </td>
                    <td>Section 8 companies are registered under <br/> the Companies Act and are incorporated <br/> for promoting charitable objectives</td>
                </tr>
                <tr>
                    <td>The owner of the property/assets called <br/> the ‘author of the trust’,entitles its ‘trustee’ to hold his <br/> property/assets for the benefit of other authors and beneficiaries.</td>
                    <td>A society is the simplest form of a Non-Governmental <br/> Organization in {cityName} and can be registered to operate <br/> on state level or national level for educational,  <br/>charitable, religious, and social welfare purposes or the promotion <br/> of art, music, culture, science, literature, and political education.</td>
                    <td>All the income, donations, and grants that <br/> are earned by a Section 8 Company, must be  <br/>completely spent on the promotion of the prescribed objects only.</td>
                </tr>
               
            </table>
        </div>
    )
}
