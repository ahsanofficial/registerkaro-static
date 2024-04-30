import React from 'react'

export const Tablerenewal = () => {
    return (
        <div id='renewal'>
            
            <table>
                <tr>
                    <th className='first'>SI.NO.</th>
                    <th >Membership category</th>
                   
                    <th className='last'>Fees as per financial year</th>
                </tr>
                <tr>
                    <td>1.</td>
                    <td>Individual Ordinary Members<br/>(Proprietorship/partnership)</td>
                    
                  

                    <td>Rs.8850/- membership renewal <br/>(including GST 18%)<br/></td>
                </tr>
                <tr>
                <td>2.</td>
                    <td>Institutional/ corporate Members (All Pvt.  ltd.<br/> Public Limted Companies, Association,Institutions<br/> etc.)</td>
                    
                  

                    <td>Rs.23600/- membership renewal fee <br/>(including GST 18%)<br/></td>
                </tr>
                
              
            </table>
        </div>
    )
}
