import React from 'react'
import amazon from "../assets/amazon_PNG.png"
// import SideMenu from './SideMenu'
import ChooseLocation from './ChooseLocation'
import { useState } from 'react'
import {HiLocationMarker} from "react-icons/hi"
import {MdArrowDropDown}  from "react-icons/md"
import {FaShoppingCart} from "react-icons/fa"
import HeaderInput from './HeaderInput'

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
      <header>
        <nav className="bg-black h-[65px] gap-2 flex justify-between px-7 items-center" name="Navbar1">

          <div className="flex gap-4" name="Left Nav for Logo & Map">
            <div className="hover:border px-2" name="logo">
              <img src={amazon} alt="Amazon" className='h-16 mt-7' />
            </div>

            <div className="hover:border flex items-center cursor-pointer px-3 pr-4" name="Map&Location" onClick={ShowChooseLocation}>
              <HiLocationMarker color='white' size={20} className='mt-3'/>
              <p className='text-[#e6e6e6]/[0.9] text-xl'>Deliver to <h2 className='font-bold text-[white]/[1]'>{SelectedNameof}</h2></p>
            </div>
          </div>

          <div className="text-white grow h-[80%] flex items-center" name="middle Nav for Input field">
            <HeaderInput/>
          </div>

          <div className="flex text-white items-center gap-2" name="Right Nav for Cart And Return">
            <div className='text-white hover:border text-xl px-2 py-2 rounded cursor-pointer' name="Account & List">
              <p>Hello,sign in</p>
              <span className='font-bold text-2xl'>Account & Lists</span> <MdArrowDropDown className='inline mb-1' color='white' size={20}/>
            </div>

            <div className='hover:border px-3 py-3 rounded cursor-pointer' name="Return & Order">
              <p className='text-xl'>Returns<h2 className='text-2xl font-bold'>& Orders</h2></p>
            </div>
            <div className='hover:border px-4 cursor-pointer py-4 pt-7 relative' name="Shopping Cart">
              <span className='absolute top-1 text-xl left-8 font-semibold text-[aqua]'>{0}</span>
              <FaShoppingCart color='white' size={25} className='inline'/>
              <span><h2 className='inline mx-2 font-semibold text-2xl relative top-2'>Cart</h2></span>
            </div>
          </div>

        </nav>
      <ChooseLocation  showLocate={showLocation} ShowChooseLocationFuntion={ShowChooseLocation} NameSelectedfunc={NameSelectedfunc} />
      </header>
    </React.Fragment>
  )
}
      
           
          


export default Header
