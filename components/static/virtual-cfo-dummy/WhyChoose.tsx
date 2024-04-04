import React from 'react'
interface HeroProps {
    cityName: string;
}
export const WhyChoose = ({ cityName }: HeroProps) => {
    return (
        <div id='WhyChoose' className='m-auto w-80'>
            <table>
                <tr>
                    <th className='first'>Particulars	Virtual </th>
                    <th>CFO	Traditional </th>
                    <th className='last'>CFO</th>
                </tr>
                <tr>
                  <td>Scope of services</td>
                  <td>Virtual CFOs handle numerous clients at once. They customyize their involvement to meet the unique demands of each customer, offering their services on a part-time, project-based, or fractional basis. Virtual CFOs specialize in offering financial analysis, planning, forecasting, and support with critical financial choices in addition to strategic financial guidance.</td>
                  <td>A traditional CFO usually works for one company full-time, giving their complete attention to that business and only that company. They oversee the finance team and are responsible in developing financial strategies as well as day-to-day financial operations.</td>
                </tr>
                <tr>
                  <td>Cost and Scalability	</td>
                  <td>Virtual CFO services are a desirable choice for startups and SMEs since they can be customized to fit the needs and budget of the business. Because virtual CFOs are scalable, organizations may modify the degree of financial expertise and support they receive as their needs change and their operations change.</td>
                  <td>A traditional CFO requires hefty financial outlays to be hired. Companies need to take into account the costs of professional growth and training in addition to competitive wage, perks, and office space. On the other hand, adopting a virtual CFO might offer companies more financial flexibility.</td>
                </tr>
                <tr>
                  <td>Expertise & Network</td>
                  <td>Virtual CFOs frequently contribute a plethora of expertise and specific knowledge from their work with several clients in a variety of industries. They keep abreast of the most recent developments in accounting and finance, including laws and best practices.</td>
                  <td>Traditional CFOs usually have expertise and experience unique to their business from their work in a certain field or organization. Although this can be advantageous, it also implies that their knowledge may be restricted to a certain sector or specialty.  </td>
                </tr>
                <tr>
                  <td>Flexibility</td>
                  <td>Due to remote setting, Virtual CFO is generally timelessly available to resolve the matter, even outside the working hours</td>
                  <td>The traditional CFOs are quite marked with their office hours which becomes rigid with the time input outside the office hours</td>
                </tr>
                <tr>
                  <td>Technology</td>
                  <td>Virtual CFO offers technological advanced services due to integration of CFO friendly tools to make the job easier</td>
                  <td>The traditional CFOs are less equipped with advanced technology, which sometimes setback them with the current market practices.</td>
                </tr>
              
            </table>
        </div>
    )
}