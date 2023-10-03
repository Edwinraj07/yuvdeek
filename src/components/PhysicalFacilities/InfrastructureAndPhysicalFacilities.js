import React from 'react'

export const InfrastructureAndPhysicalFacilities = () => {
  const openPdfInNewTab = () => {
    const pdfUrl = 'http://localhost:3000/pdfs/Feedback-Analysis-Report-2017-2018.pdf'; 
    window.open(pdfUrl, '_blank');
  };
  return (
    <>
   <div className="content-wrapper">
       <div className='container  para2 '>
        
        <div className='row '>
          <div className='col-lg-12'>
            <div className='row '>
              <div className='col-lg-3'>
              <p className='custom-div  '> 4.1 Physical Facilities
</p>
              </div>
              <div className='col-lg-5'>
             
              </div>
              <div className='col-lg-3'>
              <p className='curricular-aspects'> 4. Infrastructure & Learning Resources


</p> 
              </div>

            </div>

          </div>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-3'>
              
              </div>
              <div className='col-lg-6 p-1  mt-5 content1'>
              <p className='custom-div custom-div1  text-center text-white'> 4.1.1 Infrastructure And
Physical Facilities</p>
              </div>
              <div className='col-lg-3'>
             
              </div>

            </div>

          </div>
          <div className='col-lg-12 '>
          
            <div className='row '>
              <div className='col-lg-1 '>
              
             
               
              </div>
              <div className='col-lg-2'>  
            
                <img className='img-div img-div1 img-div2 '
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVV4xbypePCBuInnSGRADPwvpIcSmLpHXXMQ&usqp=CAU'
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
               
                <img className='img-div img-div1 img-div2'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKDsgxwJ5qAKT2gxDNwWtRbAOnDKrzO0Sng&usqp=CAU'
                  alt='PDF Icon'
                  onClick={openPdfInNewTab}
                  style={{
                    cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
                  }}
                />
              </div>
              
              
              <div className='col-lg-1'>

              </div>
              <div className='col-lg-3'>
                {/* Attach the openPdfInNewTab function to the onClick event of the image */}
                <img className='img-div img-div2 '
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MSN6BsG_dkmhZF3YptIXtWC-W9-ks7LNTg&usqp=CAU'
                  alt='PDF Icon'
                  onClick={openPdfInNewTab}
                  style={{
                    cursor: 'pointer', 
                  }}
                />
              </div>
              <div className='col-lg-1'>
                {/* Attach the openPdfInNewTab function to the onClick event of the image */}
                <img className='img-div img-div2 '
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MSN6BsG_dkmhZF3YptIXtWC-W9-ks7LNTg&usqp=CAU'
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
              <div className='col-lg-1'>
              
              </div>
              <div className='col-lg-2 p-1 mb-5 mt-3 '>
              <span className='custom-div text-center clr '>Blocks and ' <br/><span className='text-center '>Departments</span></span>
              </div>
              <div className='col-lg-1'>
              
              </div>
              <div className='col-lg-2 p-1 mb-5 mt-3 '>
              <span className='custom-div text-center  clr '>Class Rooms &    <br/><span className='text-center '>Seminar Halls</span></span>
              </div>
              <div className='col-lg-1'>
              
              </div>
              <div className='col-lg-2 p-1 mb-5 mt-3 '>
              <span className='custom-div text-center clr '>Laboratories <br/><span className='text-center ml-5'></span></span>
              </div>
              <div className='col-lg-1'>
             
              </div>
              <div className='col-lg-1 p-1 mb-5 mt-3 '>
              <span className='custom-div  clr '>Sports   <br/><span className='text-center ml-5'>Facilities</span></span>
              </div>
            </div>

          </div>
          <div className='col-lg-4'>

          </div>
          <div className='col-lg-3 mb-5 img-div2'>
                {/* Attach the openPdfInNewTab function to the onClick event of the image */}
                <iframe
                  width="300px"   
                  height="130px"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                  frameborder="0"
                  allowfullscreen
                ></iframe>
               <p className='text-center clr'>College video</p>
              </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
