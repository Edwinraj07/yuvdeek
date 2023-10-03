import React from 'react'

export const AwardAndRecognitions = () => {
    const openPdfInNewTab = () => {
        const pdfUrl = 'http://localhost:3000/pdfs/2.5.1ANNUAL-REPORT-2021-2022.pdf'; 
        window.open(pdfUrl, '_blank');
      };
  return (
    <div className="content-wrapper">
       <div className='container  para2 '>
        
        <div className='row '>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-3'>
              <p className='custom-div'> 3.6 Extension Activities</p>
              </div>
              <div className='col-lg-5'>
             
              </div>
              <div className='col-lg-3'>
              <p className='curricular-aspects'>3. Research, Innovations & Extension
</p> 
              </div>

            </div>

          </div>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-3'>
              
              </div>
              <div className='col-lg-6 p-1  mt-5 content1'>
              <p className='custom-div text-center text-white'> 3.6.2 Award And Recognitions</p>
              </div>
              <div className='col-lg-3'>
             
              </div>

            </div>

          </div>
          <div className='col-lg-12 '>
          
            <div className='row '>
              <div className='col-lg-2  '>
              
             
               
              </div>
              <div className='col-lg-1.5'>  
            
            
            
             
             

            </div>
          </div>
          <div className='col-lg-12 mb-5'>
            <div className='row '>
              <div className='col-lg-1 '>
              
              </div>
              <div className='col-lg-1 '>
              
              </div>
              
              
              <div className='col-lg-6 mb-5'>
              <button class="custom-button1 center mb-3  ">E-Copy of Award  Letter and  Award  Reciving  Photos  </button>

              </div>
              <div className='col-lg-12 '>
             
              </div>
              <div className='col-lg-12 '>
          
            <div className='row '>
              <div className='col-lg-2  '>       
              </div>
              <div className='col-lg-8 custom-table'>
                <table  className='table table-bordered table-hover table-striped'>
                  <thead className='custom-table'>
                    <tr className='custom-row table1'>
                      
                      <th>2021-2022</th>
                      <th>2020-2021	</th>
                      <th>2019-2020	</th>
                      <th>2018-2019</th>
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
    </div>
  )
}
