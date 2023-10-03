import React from 'react'

export const ICT_ENABLED_TOOLS_FOR_EFFECTIVE_TEACHING_AND_LEARNING_PROCESS = () => {
    const openPdfInNewTab = () => {
        const pdfUrl = 'http://localhost:3000/pdfs/2.5.1ANNUAL-REPORT-2021-2022.pdf'; 
        window.open(pdfUrl, '_blank');
      };
  return (
    <div className="content-wrapper  ">
    <div className='container   para1 '>
     
     <div className='row '>
       <div className='col-lg-12'>
         <div className='row'>
           <div className='col-lg-3'>
           <p className='custom-div'>2.3. Teaching-Learning Process</p>
           </div>
           <div className='col-lg-6'>
          
           </div>
           <div className='col-lg-1 pr-5 mr-5'>
           <p className='curricular-aspects'> 2. Teaching-Learning </p> 
           </div>

         </div>

       </div>
       <div className='col-lg-12'>
         <div className='row'>
           <div className='col-lg-3'>
           
           </div>
           <div className='col-lg-6 p-1  mt-5 content1'>
           <p className='custom-div text-center text-white'>2.3.2 ICT Enabled Tools
For Effective Teaching
And Learning Process</p>
           </div>
           <div className='col-lg-3'>
          
           </div>

         </div>
 

           
         </div>
       
       </div>
       <div className='row col-lg-12 '>
        <div className='col-lg-1'>

        </div>

        <div className='col-lg-'>
        
        </div>


         <div className='row '>
            
           <div className='col-lg-2  '>
           </div>
           <div className='col-lg-1'>  
         
             <img className='img-div '
               src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
               alt='PDF Icon'
               onClick={openPdfInNewTab}
               style={{
                 cursor: 'pointer', 
                 marginRight: '200px'
               }}
             />
      
           </div>

           <div className='col-lg-1'>

           </div>
           <div className='col-lg-1  '>
             {/* Attach the openPdfInNewTab function to the onClick event of the image */}
             <img className='img-div'
               src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
               alt='PDF Icon'
               onClick={openPdfInNewTab}
               style={{
                 cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
                 marginRight: '10px'
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
                 marginRight: '10px'
               }}
             />
           </div>
           <div className='col-lg-2'>
             {/* Attach the openPdfInNewTab function to the onClick event of the image */}
             <img className='img-div'
               src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
               alt='PDF Icon'
               onClick={openPdfInNewTab}
               style={{
                 cursor: 'pointer', 
                 marginRight: '10px'    
               }}
             />
           </div>
           <div className='col-lg-2'>
             {/* Attach the openPdfInNewTab function to the onClick event of the image */}
             <img className='img-div'
               src='https://img.freepik.com/premium-vector/modern-flat-design-pdf-file-icon-web_599062-7115.jpg?w=2000'
               alt='PDF Icon'
               onClick={openPdfInNewTab}
               style={{
                 cursor: 'pointer', 
                 marginRight: '10px'
               }}
             />
           </div>   
            

         </div>
       </div>
       
       <div className='col-lg-12  '>
      

         <div className='row '>
         <div className='col-lg-2 ml-4'>
            
           </div>
           <div className='col-lg-1 mr-5'>
            
            <p>ICT Tools</p>
          
            
           </div>
           <div className='col-lg-2 mr-2 clr '>  
         
           <p className='clr'>Photographs of <br/> ICT Enabled Teaching</p>
      
           </div>

           <div className='col-lg-2 mr-1 clr'>
           <p className='clr'>ICT Resources</p>

           </div>
          
           <div className='col-lg-1 ml-4'>
           <p className='clr'>NPTEL Details</p>
           </div>

           <div className='col-lg-2 ml-5'>
           <p className='clr'>E-Content</p>
           </div>
          
           </div>
        
               
            

           
         </div>
       
       </div>
       
     </div>

 
  )
}
