import React from 'react'

export const DepartmentsHavingResearchProjects324 = () => {
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
           <p className='custom-div '> 3.1. Promotion of Research and Facilities</p>
           </div>
           <div className='col-lg-4 ml-5'>
          
           </div>
           <div className='col-lg-3'>
           <p className='curricular-aspects'> 3. Research, Innovations & Extension
</p> 
           </div>

         </div>

       </div>
       <div className='col-lg-12'>
         <div className='row'>
           <div className='col-lg-3'>
           
           </div>
           <div className='col-lg-6 p-1  mt-5 content1'>
           <p className='custom-div text-center text-white clr'> 3.2.4 Departments Having
Research Projects

</p>
           </div>
           <div className='col-lg-3'>
          
           </div>

         </div>

       </div>
       <div className='col-lg-12 '>
       
         <div className='row '>
           <div className='col-lg-5  '>
           
          
            
           </div>
           <div className='col-lg-4'>
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
          
       </div>
       <div className='col-lg-12'>
         <div className='row'>
           <div className='col-lg-5'>
           
           </div>
           <div className='col-lg-4 p-1 mb-5 mt-3 '>
           <span className='custom-div text-center ml-3 clr'>Research Projects


<br/><span className='text-center ml-5  clr'></span></span>
           </div>
           <div className='col-lg-1'>
           
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
