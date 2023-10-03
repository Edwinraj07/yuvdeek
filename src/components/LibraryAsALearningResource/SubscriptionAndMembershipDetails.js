import React from 'react'

export const SubscriptionAndMembershipDetails = () => {
    const openPdfInNewTab = () => {
        const pdfUrl = 'http://localhost:3000/pdfs/2.5.1ANNUAL-REPORT-2021-2022.pdf'; 
        window.open(pdfUrl, '_blank');
      };
  return (
    <>
     <div className="content-wrapper">
       <div className='container  para1 '>
        
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
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-3'>
              
              </div>
              <div className='col-lg-6 p-1  mt-5 content1'>
              <p className='custom-div text-center text-white'> 4.2.2 Subscription And
Membership Details</p>
              </div>
              <div className='col-lg-3'>
             
              </div>

            </div>

          </div>
          <div className='col-lg-12 '>
          
            <div className='row '>
              <div className='col-lg-2 '>       
              </div>
              <div className='col-lg-8'>
                <table  className='table  table table-bordered  table-striped'>
                  <thead>
                    <tr>
                      <th>E-Resources</th>
                      <th>Subscription /
Membership	</th>
                      <th>Screenshots</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>E-Journals
N-List</td>
                      <td>  <img className='div-img1 '
                  src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
                  alt='PDF Icon'
                  onClick={openPdfInNewTab}
                  style={{
                    cursor: 'pointer', 
                  }}
                /></td>
                   <td>  <img className='div-img1 '
                  src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
                  alt='PDF Icon'
                  onClick={openPdfInNewTab}
                  style={{
                    cursor: 'pointer', 
                  }}
                /></td>
                
                
                
                    </tr>
                    <tr>
                      <td>Shodhsindhu</td>
                      <td>  <img className='div-img1 '
                  src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
                  alt='PDF Icon'
                  onClick={openPdfInNewTab}
                  style={{
                    cursor: 'pointer', 
                  }}
                /></td>
                   <td>  <img className='div-img1 '
                  src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
                  alt='PDF Icon'
                  onClick={openPdfInNewTab}
                  style={{
                    cursor: 'pointer', 
                  }}
                /></td>
                   
                
                
                    </tr>
                    <tr>
                      <td>Shodhganga</td>
                      <td>  <img className='div-img1 '
                  src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
                  alt='PDF Icon'
                  onClick={openPdfInNewTab}
                  style={{
                    cursor: 'pointer', 
                  }}
                /></td>
                <td>  <img className='div-img1 '
                  src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
                  alt='PDF Icon'
                  onClick={openPdfInNewTab}
                  style={{
                    cursor: 'pointer', 
                  }}
                /></td>
                
                   
                   
                    </tr>
                    <tr>
                      <td>e-books
DELNET</td>
                      <td>  <img className='div-img1 '
                  src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
                  alt='PDF Icon'
                  onClick={openPdfInNewTab}
                  style={{
                    cursor: 'pointer', 
                  }}
                /></td>
                <td>  <img className='div-img1 '
                  src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
                  alt='PDF Icon'
                  onClick={openPdfInNewTab}
                  style={{
                    cursor: 'pointer', 
                  }}
                /></td>
                
                   
                   
                    </tr>
                  </tbody>

                </table>

              </div>
            

            </div>
          </div>
          
        </div>
      </div>
    </div>
    
    </>
  )
}
