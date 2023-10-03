import React from 'react'

export const FULL_TIME_TEACHERS_AGAINST_SANCTIONED_POSTS = () => {
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
              <p className='custom-div'> 2.4. Teacher Profile and Quality</p>
              </div>
              <div className='col-lg-5 mr-5'>
             
              </div>
              <div className='col-lg-3'>
              <p className='curricular-aspects'> 2. Teaching-Learning & Evaluation
</p> 
              </div>

            </div>

          </div>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-3'>
              
              </div>
              <div className='col-lg-6 p-1  mt-5 content1'>
              <p className='custom-div text-center text-white'> 2.4.1 Full Time Teachers
Against Sanctioned Posts</p>
              </div>
              <div className='col-lg-3'>
             
              </div>

            </div>

          </div>
          <div className='col-lg-12 '>
          
            <div className='row '>
              <div className='col-lg-3  '>
              
             
               
              </div>
              <div className='col-lg-4'>  
            
                <img className='img-div '
                  src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
                  alt='PDF Icon'
                  onClick={openPdfInNewTab}
                  style={{
                    cursor: 'pointer', 
                  }}
                />
                 <div className='col-lg-12'>
                    <div className="row">
                        <div className="col-lg-1 ">
                        </div>
                        
                        
                            <div className='col-lg-1 clr '>
                              <p>Sanctioned Posts </p>
                    </div>
                    </div>
                   
                </div>
         
              </div>
              

              
              <div className='col-lg-1'>
                {/* Attach the openPdfInNewTab function to the onClick event of the image */}
                <img className='img-div'
                  src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
                  alt='PDF Icon'
                  onClick={openPdfInNewTab}
                  style={{
                    cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
                  }}
                /> <div>
               
        </div>
                <div>
                    <div className='col-lg-12'>
                        <div className="row">
                            <div className="col-lg-1">
                            </div>
                           
                                <div className='col-lg-1'>
                                  <p className='table-data1  clr '> Department-wise Staff Details </p>
                        </div>
                        </div>
                       
                    </div>
            </div>
          </div>
          </div>
            </div>

          </div>
        </div>
      </div>
   
   </>
  )
}
