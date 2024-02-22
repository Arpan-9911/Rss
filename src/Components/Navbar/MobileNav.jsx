import { 
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import Aos from 'aos'
import 'aos/dist/aos.css'

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []); 
  return (
    <>
      <div className="sticky w-screen top-0 z-10">
        <div className="`w-full bg-blue-600 p-2 h-fit text-right flex justify-between items-center`">
          <div>
            <TypeAnimation
              sequence={[
                'RSS ASSOCIATES',
                3000, 
                'Ravi Sriwastava',
                500,
                'Industrial Consultant',
                500,
                'Labour Law Advisor',
                500,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '25px', display: 'inline-block', fontWeight: 'bolder', color: 'white'}}
              repeat={Infinity}
            />
          </div>
          {isOpen? <Button onClick={onClose} className="text-white"><AiOutlineClose size={"30"}/></Button>:<Button onClick={onOpen} className="text-white"><AiOutlineMenu size={"30"}/></Button>}
        </div>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay/>
          <DrawerContent className="bg-blue-400 px-2 mt-12">
            <DrawerBody>
              <VStack className="text-xl text-white mt-5">
                <Link to={"/login"} data-aos="fade-left" data-aos-delay="100" className="hover:text-red-300 w-full text-left" onClick={onClose}>Login</Link>
                <Link to={"/"} data-aos="fade-left" data-aos-delay="200" className="hover:text-red-300 w-full text-left" onClick={onClose}>Home</Link>
                <Link to={"/"} data-aos="fade-left" data-aos-delay="300" className="hover:text-red-300 w-full text-left" onClick={onClose}>About</Link>
                <Link to={"/contact"} data-aos="fade-left" data-aos-delay="400" className="hover:text-red-300 w-full text-left" onClick={onClose}>Contact</Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}

export default MobileNav