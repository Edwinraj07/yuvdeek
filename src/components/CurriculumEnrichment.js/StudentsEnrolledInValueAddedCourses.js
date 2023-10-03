import React from 'react'

const StudentsEnrolledInValueAddedCourses = () => {

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
              <p className='custom-div'> 1.2. Academic Flexibility</p>
              </div>
              <div className='col-lg-6'>
             
              </div>
              <div className='col-lg-3'>
              <p className='curricular-aspects'> 1. Curricular Aspects</p> 
              </div>

            </div>

          </div>
          <div className='col-lg-12 mb-5'>
            <div className='row'>
              <div className='col-lg-3'>
              
              </div>
              <div className='col-lg-6 p-1  mb-2 content1'>
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
            </div>
          </div>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-5'>
              
              </div>
              <button className="custom-button center mb-3  ">List Of Student </button>
            
              <div className='col-lg-1'>
              
              </div>
              
            
              <div className='col-lg-1'>
              
              </div>
              <div className='col-lg-3'>
                  
              </div>
              <div className='col-lg-12 mb-5 '>
          
            <div className='row '>
              <div className='col-lg-2  '>       
              </div>
              <div className='col-lg-9 custom-table'>
                <table  className='table table-bordered table-hover table-striped mb-5 mr-2'>
                  <thead className='custom-table table1 '>
                    <tr>
                      <th>2021-2022</th>
                      <th>2020-2021</th>
                      <th>2019-2020	</th>
                      <th>2018-2019	</th>
                      <th>2017-2018</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      
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
        </div>
      </div>
    
    
    </>
  )
}

export default StudentsEnrolledInValueAddedCourses