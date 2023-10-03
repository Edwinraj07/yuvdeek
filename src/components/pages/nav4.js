import React from 'react';

const Nav4 = () => {
  // Function to handle opening the PDF in a new tab
  const openPdfInNewTab = () => {
    // Replace 'your-pdf-url.pdf' with the actual URL or path to your PDF file
    const pdfUrl = 'http://localhost:3000/pdfs/2.5.1ANNUAL-REPORT-2021-2022.pdf'; // Replace with your PDF URL

    // Open the PDF URL in a new tab
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="content-wrapper">
       <div className='container  para1 '>
        
        <div className='row '>
          <div className='col-lg-12 '>
            <div className='row '>
              <div className='col-lg-2  '>
              <p className='custom-div'> 1.1. Curriculum Design & Development</p>
              <p className='curricular-aspects'> 1. Curricular Aspects</p> 
               
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
                    cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
                  }}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav4;
