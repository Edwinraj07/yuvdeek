import React from 'react'

export const ResearchPapersInJournalsNotifiedOnWebsite = () => {
    const openPdfInNewTab = () => {
        const pdfUrl = 'http://localhost:3000/pdfs/2.5.1ANNUAL-REPORT-2021-2022.pdf'; 
        window.open(pdfUrl, '_blank');
      };
  return (
    <>
    <div className="content-wrapper  ">
    <div className='container   para1 '>
     
     <div className='row '>
       <div className='col-lg-12'>
         <div className='row'>
           <div className='col-lg-3'>
           <p className='custom-div'>3.4. Research Publications and Awards</p>
           </div>
           <div className='col-lg-5'>
          
           </div>
           <div className='col-lg-1 pr-5 mr-5'>
           <p className='curricular-aspects'> 3. Research, Innovations & Extension </p> 
           </div>

         </div>

       </div>
       <div className='col-lg-12'>
         <div className='row'>
           <div className='col-lg-3'>
           
           </div>
           <div className='col-lg-6 p-1  mt-5 content1'>
           <p className='custom-div text-center text-white'>3.4.3 Research Papers In
Journals Notified On UGC
Website</p>
           </div>
           <div className='col-lg-3'>
          
           </div>

         </div>
 

           
         </div>
       
       </div>
       
      
       <div className='row col-lg-12 '>
        <div className='col-lg-5 mb-5'>

        </div>
       
        <div className='col-lg-3 mt-5 mr-5  '>
            
            <p className="text-center  mb-5 clr1"> Research Publications</p>
          
            
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
         <div className='col-lg-2 '>
            
           </div>
           <div className='col-lg-2 clr'>
            
            <p>2021-2022</p>
          
            
           </div>
           
           <div className='col-lg-2 clr '>  
         
           <p>2020-2021 <br/> </p>
      
           </div>

           <div className='col-lg-1 mr-5 clr'>
           <p>2019-2020</p>

           </div>
          
           <div className='col-lg-1 ml-5 clr'>
           <p>2018-2019</p>
           </div>

           <div className='col-lg-2 ml-5 clr'>
           <p>2017-2018</p>
           </div>
          
           </div>
        
               
            

           
         </div>
       
       </div>
       
     </div>
    </>
  )
}
