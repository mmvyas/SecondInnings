import React, { Component } from 'react';
import './Disclaimer.css';

export default class Disclaimer extends Component {
  
  render() {
    let pStyle = {
        maxWidth:'1000px',
        alignSelf:'center'
        }
      let aStyle = {
        color: '#49a942',
        fontWeight:'bold'
        
        } 

        

    return (
        <div className="disclaimerContent">
        
      <h1>Disclaimer and Copyright</h1>
      <h2>Disclaimer</h2>
      <p style = {pStyle}>While we attempt to ensure that the information on this website is accurate at
                            the time of publication, it provides no express or implied warranties or makes any representations
                            in relation to this website or any content. The information on this website is provided 'as is'
                            and without any guarantees as to its accuracy, completeness or reliability.  
                            The Escapers group reserves the right to amend the information on this website at any time and 
                            without notice.
        </p>
        <h2>Copyright</h2>
        <p style = {pStyle}>This website and its content are subject to copyright under the laws of Australia.
            Unless otherwise indicated, copyright in this website and its content is owned by the Escapers group.
            <p></p>
            In addition, third parties may own the copyright in some materials incorporated within this website
            which we attribute to here:</p>

            <table alignSelf='çenter'>
                
                    <tr>
                        <th> Resource </th>
                        <th>Place used/ Description </th>
                        <th> Attribution </th>
                    </tr>
                    <tr>
                        <td><img src="/assets/eco-home.png" width='30' height='30'/></td>
                        <td>Second Innings website logo</td>
                        <td><div>Icons made by <a href="https://www.freepik.com/?__hstc=57440181.481873f0c57e0ec15ade498570e12b94.1556534650986.1557745200231.1557837130169.6&__hssc=57440181.3.1557837130169&__hsfp=496828104" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/assets/Gpeople.png" width='20' height='20'/>
                            <img src="/assets/Opeople.png" width='20' height='20'/>
                            <img src="/assets/Rpeople.png" width='20' height='20'/>
                        </td>
                        <td>Population icon in <a href = "https://secondinning.online/compare">Compare page</a></td>
                        <td><div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/assets/Ghouse.png" width='20' height='20'/>
                            <img src="/assets/Ohouse.png" width='20' height='20'/>
                            <img src="/assets/Rhouse.png" width='20' height='20'/>
                        </td>
                        <td>House price icon in <a href = "https://secondinning.online/compare">Compare page</a></td>
                        <td><div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/assets/Ghospital.png" width='20' height='20'/>
                            <img src="/assets/Ohospital.png" width='20' height='20'/>
                            <img src="/assets/Rhospital-buildings.png" width='20' height='20'/>
                        </td>
                        <td>Hospital icon in <a href = "https://secondinning.online/compare">Compare page</a></td>
                        <td><div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/assets/Gportfolio.png" width='20' height='20'/>
                            <img src="/assets/Oportfolio.png" width='20' height='20'/>
                            <img src="/assets/Rportfolio.png" width='20' height='20'/>
                        </td>
                        <td>Jobs icon in <a href = "https://secondinning.online/compare">Compare page</a></td>
                        <td><div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/assets/Groad.png" width='20' height='20'/>
                            <img src="/assets/Oroad.png" width='20' height='20'/>
                            <img src="/assets/Rroad.png" width='20' height='20'/>
                        </td>
                        <td>Travel distance icon in <a href = "https://secondinning.online/compare">Compare page</a></td>
                        <td><div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/assets/Gthief.png" width='20' height='20'/>
                            <img src="/assets/Othief.png" width='20' height='20'/>
                            <img src="/assets/Rthief.png" width='20' height='20'/>
                        </td>
                        <td>Criminal Rate icon in <a href = "https://secondinning.online/compare">Compare page</a></td>
                        <td><div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div></td>
                    </tr>
                    <tr>
                        <td><img src="/assets/adv.jpg" width='50' height='30'/></td>
                        <td>Banner image in <a href = "https://secondinning.online/introduction/advantage">Why Regional Victoria? page</a></td>
                        <td>Photo by Derek Zhang on Unsplash is licensed by the Creative Commons Zero (CC0) license.</td>
                    </tr>
                    <tr>
                        <td><img src="/assets/jumbotron2.jpg" width='50' height='30'/></td>
                        <td><a href = "https://secondinning.online">Home Banner image </a></td>
                        <td>Photo by Federico Respini on Unsplash is licensed by the Creative Commons Zero (CC0) license.</td>
                    </tr>
                    <tr>
                        <td><img src="/assets/card1.jpg" width='50' height='30'/></td>
                        <td><a href = "https://secondinning.online">Visa card image </a></td>
                        <td>Photo by Pixabay on Pexels is licensed by the Creative Commons Zero (CC0) license.</td>
                    </tr>
                    <tr>
                        <td><img src="/assets/card2.jpg" width='50' height='30'/></td>
                        <td><a href = "https://secondinning.online">Why Regional Victoria? card image </a></td>
                        <td>Photo by rawpixel.com on Pexels is licensed by the Creative Commons Zero (CC0) license.</td>
                    </tr>
                    <tr>
                        <td><img src="/assets/card3.jpg" width='50' height='30'/></td>
                        <td><a href = "https://secondinning.online">Why Regional Victoria? card image </a></td>
                        <td>Photo by Leah Kelley on Pexels is licensed by the Creative Commons Zero (CC0) license.</td>
                    </tr>
                    <tr>
                        <td><img src="/assets/visajumbo.jpg" width='50' height='30'/></td>
                        <td>Banner Image used in <a href = "https://secondinning.online/visa">Visa page</a></td>
                        <td>Photo by Pixabay on Pexels is licensed by the Creative Commons Zero (CC0) license.</td>
                    </tr>
                    <tr>
                        <td><img src="/assets/nextsteps.jpg" width='50' height='30'/></td>
                        <td>Banner Image used in <a href = "https://secondinning.online/introduction/nextsteps">Nextsteps page </a></td>
                        <td>Photo by rawpixel.com on Pexels is licensed by the Creative Commons Zero (CC0) license.</td>
                    </tr>
                    <tr>
                        <td><img src="/assets/activity-jumbo.jpg" width='50' height='30'/></td>
                        <td>Banner Image used in <a href = "https://secondinning.online/introduction/activity">Fun activities page </a></td>
                        <td>Photo by rawpixel.com on Pexels is licensed by the Creative Commons Zero (CC0) license.</td>
                    </tr>
                    <tr>
                        <td>ABS, General Community Profile for 2016 suburb and LGA</td>
                        <td style={{fontSize:'11px'}}>This dataset pack contains several datasets of community profile in LGA. The datasets selected for this project are population profile data with nationality, age, gender in LGAs of Victoria, and number of jobs by industry.</td>
                        <td>Taken from <a href = "https://datapacks.censusdata.abs.gov.au/datapacks/">ABS website </a>is licensed CC2.5 by <a href = "https://creativecommons.org/licenses/by/2.5/">Creative Commons Attribution 2.5 International</a></td>
                    </tr>
                    <tr>
                        <td>Hospital Locations in VIC from VIC Government Data Dictionary</td>
                        <td style={{fontSize:'11px'}}>This dataset contains hospital profile records in LGAs of VIC with several attributes including longitude, latitude, address, public/private type. It is used for providing number of hospitals in the LGAs and deriving population per hospital ratio.</td>
                        <td>Taken from <a href = "https://www.data.vic.gov.au/data/dataset/hospital-locations-spatial ">Victoria Government website </a>is licensed CC4.0 by <a href = "http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International</a></td>
                    </tr>
                    <tr>
                        <td>Victorian Property Sales Report - Median House by Suburb Time Series from VIC Government Data Dictionary</td>
                        <td style={{fontSize:'11px'}}>This dataset contains the time series records of median house prices and yearly growth rate of prices in VIC suburbs.</td>
                        <td>Taken from <a href = "https://www.data.vic.gov.au/data/dataset/victorian-property-sales-report-median-house-by-suburb-2004-2014">Victoria Government website </a>is licensed CC4.0 by <a href = "http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International</a></td>
                    </tr>
                    <tr>
                        <td>Quarterly median rents by LGA from Health and Human Services</td>
                        <td style={{fontSize:'11px'}}>This dataset contains the median property rent costs for different types of property and all properties in LGAs of VIC.</td>
                        <td>Taken from <a href = "https://dhhs.vic.gov.au/quarterly-median-rents-local-government-area-september-quarter-2018">DHHS Government website </a>is licensed CC3.0 by <a href = "http://creativecommons.org/licenses/by/3.0/au/">Creative Commons Attribution 3.0 International under the Copyright Act 1968 (Cth)</a></td>
                    </tr>
                    <tr>
                        <td>Employment by Industry Time Series (Nov 2018) from Department of Jobs and Small Business</td>
                        <td style={{fontSize:'11px'}}>This dataset contains the time series records of median house prices and yearly growth rate of prices in VIC suburbs.</td>
                        <td>Taken from <a href = "http://lmip.gov.au/default.aspx?LMIP/Downloads/ABSLabourForceRegion">DHHS Government website </a>is licensed CC3.0 by <a href = "http://creativecommons.org/licenses/by/3.0/au/">Creative Commons Attribution 3.0 International under the Copyright Act 1968 (Cth)</a></td>
                    </tr>
                    <tr>
                        <td>Criminal Incidents Visualisation from Criminal Statistics Agency</td>
                        <td style={{fontSize:'11px'}}>This dataset contains the criminal records of number of incidents and crime rate per 10k population. It comes with several attributes including criminal types, ages, areas.</td>
                        <td>Taken from <a href = "https://www.crimestatistics.vic.gov.au/sites/default/files/embridge_cache/emshare/original/public/users/201903/cf/2c21a0453/Data_tables_Criminal_Incidents_Visualisation_year_ending_December_2018.xlsx">Victoria Government website </a>is licensed CC3.0 by <a href = "http://creativecommons.org/licenses/by/3.0/au/">Creative Commons Attribution 3.0 Australia license</a></td>
                    </tr>
                    <tr>
                        <td>Employee Jobs and Employee income per job by Industry and Region, 2011-12 to 2015-16 </td>
                        <td style={{fontSize:'11px'}}>This dataset contains the employee jobs and employee income per job by job industry and SA2 regional areas.</td>
                        <td>Taken from <a href = "http://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/6160.02011-12%20to%202015-16?OpenDocument ">ABS website </a>is licensed CC4.0 by <a href = "http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International licence</a></td>
                    </tr>

                    <p>All images used in Fun activities page and Living factors page are taken from Pexel.com and Unsplash.com and all are licensed by the Creative Commons Zero (CC0) license.</p>
                    

                
           
            
            </table>
            
      </div>
           

        
        
        
    )
  }
}
