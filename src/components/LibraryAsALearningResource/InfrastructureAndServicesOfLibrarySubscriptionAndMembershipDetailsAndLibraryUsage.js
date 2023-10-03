import React from 'react'

export const InfrastructureAndServicesOfLibrarySubscriptionAndMembershipDetailsAndLibraryUsage = () => {
    const openPdfInNewTab = () => {
        const pdfUrl = 'http://localhost:3000/pdfs/2.5.1ANNUAL-REPORT-2021-2022.pdf'; 
        window.open(pdfUrl, '_blank');
      };
  return (
    <>
    <div className="content-wrapper">
       <div className='container  para2  '>
        
        <div className='row '>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-3'>
              <p className='custom-div'> 4.2 Library as a Learning Resource</p>
              </div>
              <div className='col-lg-6'>
             
              </div>
              <div className='col-lg-3'>
              <p className='curricular-aspects'> 4. Infrastructure & Learning Resources</p> 
              </div>

            </div>

          </div>
          <div className='col-lg-12 mb-5'>
            <div className='row'>
              <div className='col-lg-3'>
              
              </div>
              <div className='col-lg-6 p-1  mb-2 content1'>
              <p className='custom-div text-center text-white'> 4.2.1 Infrastructure And
Services Of Library</p>
              </div>
              <div className='col-lg-3'>
             
              </div>

            </div>

          </div>
          <div className='col-lg-12 '>
          
            <div className='row '>
              <div className='col-lg-2  '>
              
             
               
              </div>
            </div>
          </div>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-2 '>
              
              </div>
              
            
              <div className='col-lg-1'>
              
              </div>
              <button className="custom-button div-img2 center mb-3 h5  ">Genaral Library</button>
            
              <div className='col-lg-1'>
              </div>
              <div className='col-lg-3'>
              <button className="custom-button div-img2 center mb-3  h5 ">Departments Library </button>

              </div>
              <div className='col-lg-12 mb-5 '>
          
          
          </div>
          </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
