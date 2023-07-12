import {MdArrowDropDown}  from "react-icons/md"
import {BiSearch} from "react-icons/bi"
const HeaderInput = () => {
  return (
    <div className="w-[100%] flex border h-[80%] rounded">
      <div className="self-center px-4 text-xl text-black border h-[100%] flex bg-[#edecec]">
        <button className="text-center self-center"><span className="inline">All</span> <MdArrowDropDown className="inline mb-1" size={15}/></button>
      </div>

      <div className="grow">
        <input type="text" className="w-[100%] h-[100%] outline-none border-none text-black px-4 text-2xl" placeholder="Search Amazon" />
      </div>

      <div className="border px-4 bg-[aqua] flex items-center h-[100%] cursor-pointer">
        <BiSearch size={27} color="black"/>
      </div>
    </div>
  )
}

export default HeaderInput
