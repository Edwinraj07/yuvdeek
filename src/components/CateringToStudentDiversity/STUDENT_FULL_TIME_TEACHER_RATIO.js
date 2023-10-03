import React from 'react'

export const STUDENT_FULL_TIME_TEACHER_RATIO = () => {

    const openPdfInNewTab = () => {
        const pdfUrl = 'http://localhost:3000/pdfs/2.5.1ANNUAL-REPORT-2021-2022.pdf'; 
        window.open(pdfUrl, '_blank');
      };

  return (
   <>
   
   <div className="content-wrapper">
       <div className='container  para2 '>
        
        <div className='row '>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-3'>
              <p className='custom-div'> 1.2. Academic Flexibility</p>
              </div>
              <div className='col-lg-6'>
             
              </div>
              <div className='col-lg-3'>
              <p className='curricular-aspects'> 1. Curricular Aspects</p> 
              </div>

            </div>

          </div>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-3'>
              
              </div>
              <div className='col-lg-6 p-1  mt-5 content1'>
              <p className='custom-div text-center text-white'> 1.2.2 CBCS / Elective Course System</p>
              </div>
              <div className='col-lg-3'>
             
              </div>

            </div>

          </div>
          <div className='col-lg-12 '>
          
            <div className='row '>
              <div className='col-lg-2  '>
              
             
               
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
          </div>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-2'>
              
              </div>
              <div className='col-lg-4 p-1 mb-5 mt-3  clr '>
              <span className='custom-div text-center clr '>Minutes of Board of Studies
 <br/><span className='text-center ml-5 clr '>2021-2022</span></span>
              </div>
              <div className='col-lg-1'>
              
              </div>
              <div className='col-lg-2 p-1 mb-5 mt-3 '>
              <span className='custom-div text-center clr'>Minutes of Academic Council
 <br/><span className='text-center ml-5 clr '>2021-2022</span></span>
              </div>
              <div className='col-lg-1'>
              
              </div>
              <div className='col-lg-3'>
                  
              </div>
              <div className='col-lg-12 '>
          
            <div className='row '>
              <div className='col-lg-2  '>       
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
