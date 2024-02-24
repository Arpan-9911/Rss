import React from 'react'
import DesktopNav from '../Components/Navbar/DesktopNav'
import MobileNav from '../Components/Navbar/MobileNav'
import { useEffect , useState} from 'react'
import DateTime from '../Components/DateTime/DateTime'

const Navbar = () => {


     const [width, setWidth] = useState(window.innerWidth);
     const breakpoint = 900;
      useEffect(() => {
       const handleWindowResize = () => setWidth(window.innerWidth)
       window.addEventListener("resize", handleWindowResize);
       return () => window.removeEventListener("resize", handleWindowResize);
     }, []);

  return (
     <>

     {width < breakpoint ? <MobileNav /> : <DesktopNav />}
     <DateTime/>
          
     </>
  )
}

export default Navbar