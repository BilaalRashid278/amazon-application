
import "../App.css"
import { MyCountries } from "../utils/Constant"
import PropTypes from 'prop-types';
const ChooseLocation = ({showLocate,ShowChooseLocationFuntion,NameSelectedfunc}) => {
  let SelectedName = document.getElementById("CountrySelector");
  const functionHandler = () => {
      NameSelectedfunc(SelectedName);
      ShowChooseLocationFuntion();
  }
  return (
    <div className={`${showLocate}`}>
       <div className="flex justify-center bg-slate-500 absolute  left-[50%] translate-x-[-50%] translate-y-[12%] z-50">
        
        <div className="w-[280px] sm:w-[320px] h-[370px] md:w-[370px] md:h-[380px] bg-white rounded-lg shadow-c2">
            
            <div className="flex items-center pl-10 h-[18%] bg-[#F0F2F2] rounded-t-lg  border-1 border-bottom-[#D5D9D9]">
                <h1 className="font-bold text-2xl">Choose your location</h1>
            </div>

            <div className="flex justify-center h-[calc(100%-18%)]">
                <div className="flex flex-col gap-6 w-[90%] h-[100%] pt-3">
                  
                  <div>
                  <h2 className="text-xl">Delivery options and delivery speeds may vary for different  locations</h2>
                  </div>

                  <div>
                  <input className="w-[100%] text-xl font-semibold bg-yellow-400 p-4 rounded-xl cursor-pointer " type="button" value="Sign in to see your  addresses" />
                  </div>

                  <div className="line-example">
                    <p className="text-center text-xl">or enter a US zip code</p>
                  </div>

                  <div className="flex justify-between gap-8">
                    <input className="border border-[black]/[0.8] rounded-lg grow outline-none focus-within:text-xl focus-within:pl-[3%] shadow" type="text"/>
                    <input className="border px-10 py-2 border-[black]/[0.2]  rounded-lg cursor-pointer hover:bg-slate-100 font-semibold text-xl shadow"  type="button" value="Apply" />
                  </div>

                  <div className="line">
                    <p className="text-center text-xl">or</p>
                  </div>

                  <div>
                        <select id="CountrySelector" className="w-[100%] text-2xl py-2 rounded-md px-3 border border-[black]/[0.7] outline-none">{MyCountries.map((country,index)=>{
                            return (<><option key={index}>{country.name}</option></>)
                        })}</select>
                  </div>
                    
                    <div className="w-[100%] flex justify-end">
                        <button onClick={()=>{
                            functionHandler()
                        }} className=" px-6 py-[6px] bg-yellow-400 text-lg font-semibold rounded-lg">Done</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
         
ChooseLocation.propTypes = {
  showLocate : PropTypes.string.isRequired,
  ShowChooseLocationFuntion : PropTypes.func.isRequired,
  NameSelectedfunc : PropTypes.func.isRequired
}

export default ChooseLocation
