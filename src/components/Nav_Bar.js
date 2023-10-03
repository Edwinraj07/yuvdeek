import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, settheme] = useState("light-mode");
  const toggletheme = () => {
    if (theme === "light-mode") {
      settheme("dark-mode");
    } else {
      settheme("light-mode");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


 
  return (
    <>
    
  
      <nav className="main-header  navbar1 navbar navbar-expand navbar-white navbar-light">
     
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
             
            >
              <i className="fas fa-bars clr2" />
            </a>
          </li>
        </ul>
        <div className="animated-text">
      JAMAL MOHAMED COLLEGE (Autonomous)
      </div>
      
        <ul className="navbar-nav ml-auto">
          <li>
            <div className="form-group mt-2">
              <div className="">
                
                
                  <p className="CYCLEIV"> 
SELF STUDY REPORT - CYCLE IV </p>
              
                
              </div>
            </div>
          </li>
        </ul>
       
      </nav>
     

      <aside class="control-sidebar control-sidebar-dark"></aside>
    </>
  );
}
