import React from 'react'

export const FULL_TIME_TEACHERS_WITH_PHD = () => {
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
              <p className='custom-div text-center text-white'> 2.4.2 Full Time Teachers With
Ph.D.</p>
              </div>
              <div className='col-lg-3'>
             
              </div>

            </div>

          </div>
          <div className='col-lg-12 '>
          
            <div className='row '>
              <div className='col-lg-2  '>
              
             
               
              </div>
              <div className='col-lg-2'>  
            
                <img className='img-div '
                  src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
                  alt='PDF Icon'
                  onClick={openPdfInNewTab}
                  style={{
                    cursor: 'pointer', 
                  }}
                />
         
              </div>

              <div className='col-lg-1'>

              </div>
              <div className='col-lg-2'>
                {/* Attach the openPdfInNewTab function to the onClick event of the image */}
                <img className='img-div'
                  src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
                  alt='PDF Icon'
                  onClick={openPdfInNewTab}
                  style={{
                    cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
                  }}
                />
              </div>
              <div className='col-lg-1'>

              </div>
              <div className='col-lg-2'>
                {/* Attach the openPdfInNewTab function to the onClick event of the image */}
                <img className='img-div'
                  src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
                  alt='PDF Icon'
                  onClick={openPdfInNewTab}
                  style={{
                    cursor: 'pointer', 
                  }}
                />
              </div>

            </div>
          </div>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-2'>
              
              </div>
              <div className='col-lg-2 p-1 mb-5 mt-3 '>
              <span className='custom-div text-center clr'>List of Full Time  <br/><span className='text-center ml-5'>Teachers with Ph.D.</span></span>
              </div>
              <div className='col-lg-1'>
              
              </div>
              <div className='col-lg-2 p-1 mb-5 mt-3 '>
              <span className='custom-div text-center clr '>Subjectwise number   <br/><span className='text-center ml-5'>of Full Time</span><br/> <span className='text-center ml-5'>Teachers with Ph.D.</span></span>
              </div>
              <div className='col-lg-1'>
              
              </div>
              <div className='col-lg-3 p-1 mb-5 mt-3 '>
              <span className='custom-div text-center clr '>Copies of Ph.D.

<br/><span className='text-center ml-5 clr'> Degree Certificates</span></span>
              </div>
              <div className='col-lg-3'>
             
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
   
   </>
  )
}
