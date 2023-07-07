import React from 'react'
import amazon from "../assets/amazon_PNG.png"
import { LocationIcon } from '../assets/Icons'
import SideMenu from './SideMenu'
import ChooseLocation from './ChooseLocation'
import { useState } from 'react'
const Header = () => {
  const [showLocation,setShowLocation] = useState("hidden");
  const [SelectedNameof,setSelectedNameof] = useState("Afganistan");
  const ShowChooseLocation = () => {
    if(showLocation === "hidden"){
      setShowLocation("block");
    }else{
      setShowLocation("hidden");
    }
  }
  const NameSelectedfunc = (SelectedName) => {
    let SelectedValue = SelectedName.value
    setSelectedNameof(SelectedValue);
  };
  return (
    <React.Fragment>
      <header className="block">
        <div className='flex gap-3 md:gap-0 h-[55px] md:h-[65px] w-[100%] bg-[#131921] items-center p-6 z-10'>
          <SideMenu/>
          <span className='inline-block hover:border border-1 py-[-10px] px-2 cursor-pointer'>
              <img src={amazon} alt="Amazon logo" className='h-[30px] md:h-[30px] mt-6 md:mt-5 xl:h-[40px] xl:mt-8 xl:px-[4] '/>
          </span>
          <div onClick={ShowChooseLocation} className='hidden md:flex text-white hover:border cursor-pointer p-2'>
            {LocationIcon}
            <p className=' opacity-[80%] text-[0.9rem] xl:text-[1.2rem]'>Deliver to <span className='font-extrabold text-[1.1rem] xl:text-[1.4rem] block'>{SelectedNameof}</span></p>
          </div>
        </div>
      </header>
      <ChooseLocation  showLocate={showLocation} ShowChooseLocationFuntion={ShowChooseLocation} NameSelectedfunc={NameSelectedfunc} />
        
    </React.Fragment>
  )
}
      
           
          


export default Header
