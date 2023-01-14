import React,{useState} from 'react'
import {RiStoreLine, RiBarChartBoxLine, RiCalendarTodoLine, RiPaintBrushLine, RiDatabase2Line, RiGradienterLine, RiFile2Line, RiPriceTag2Line, RiAnchorLine, RiDiscLine, RiBaseStationLine, RiFingerprint2Line,RiInstagramLine,RiLinkedinFill, RiSearchLine} from "react-icons/ri"
import Achivement from './Achivement';


const Navbar = () => {
    const [toggle,setToggle]=useState('hidden lg:visible')
    const [align,setAlign] = useState('flex-row-reverse')
    const[disp,setDisp]=useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white mt-0 border-blue-500" style={{borderBottom: ' 3rem solid #071437'}}>
  <div className="flex items-center flex-shrink-0 text-black mr-2">
   <a href="/"><span className="font-bold text-navy-blue text-3xl md:text-5xl tracking-tight p-24">CampusIQ</span></a>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white" onClick={(e)=>{
        if(disp===false){
        setToggle('block lg:visible');setDisp(true);
        setAlign('justify-center items-center')
    }
        else{
         setToggle('hidden lg:visible')
         setAlign('flex-row-reverse')
         setDisp(false);
        }
    }}>
     <img src="hamburg.png"></img>
    </button>
  </div>
  <div className={`w-full block  flex-grow lg:flex lg:justify-end flex-col gap-6 lg:w-auto ${toggle} font-medium`}>
   <div className="flex justify-end mt-0 mx-0"> 
  <div className='flex gap-10 bg-navy-blue w-4/5 px-2 py-2 radius rounded-bl-lg'>
  <div className="inline-block relative w-24">
  <select className="inline appearance-none w-full bg-blue-900 text-white border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option>I'm a</option>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
  </div>
</div>
      <span>
      <a href="/bankRegister" className="inline mt-4 text-md md:text-xl lg:mt-0 text-white hover:text-blue-500">
      Visit
      </a>
      </span>
      <span>
      <a href="/userLogin" className="inline mt-4 text-md md:text-xl  lg:mt-0 text-white hover:text-blue-500">
      News
      </a>
      </span>
      <span>
      <a href="/bankLogin" className="inline mt-4 text-md md:text-xl  lg:mt-0 text-white hover:text-blue-500">
      Events
      </a>
      </span>
      <span>
      <a href="/bankLogin" className="inline mt-4 text-md md:text-xl  lg:mt-0 text-white hover:text-blue-500">
      Admissions
      </a>
      </span>
      <span>
      <a href="/bankLogin" className="inline mt-4 text-md md:text-xl  lg:mt-0 text-white hover:text-blue-500">
      Contact
      </a>
      </span>
    </div>
    <span className='bg-navy-blue p-2 px-2'>
      <RiSearchLine size={30} color={"white"}/>
      </span>
    </div>
    <div className="flex justify-end mt-0 mx-0"> 
  <div className='flex w-4/5 py-2 justify-around radius mb-6'>
    <div>
    <span>
      <a href="/userRegister" className="inline mt-2 text-md md:text-xl px-10 lg:mt-0 text-black hover:text-blue-500 border-gray-400" >
      Academics 
      </a>
      </span>
      <span>
      <a href="/bankRegister" className="inline mt-2 text-md md:text-xl px-10 lg:mt-0 text-black hover:text-blue-500 border-gray-400 border-l-2">
      Gallery
      </a>
      </span>
      <span>
      <a href="/userLogin" className="inline mt-2 text-md md:text-xl px-10 lg:mt-0 text-black hover:text-blue-500 border-gray-400 border-l-2">
      Campus 
      </a>
      </span>
      <span>
      <a href="/bankLogin" className="inline mt-2 text-md md:text-xl px-8 lg:mt-0 text-black hover:text-blue-500 border-gray-400 border-l-2">
      Achivements 
      </a>
      </span>
      </div>
      <div><button className="bg-navy-blue hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"><a href="/login">LOGIN</a></button></div>
    </div>
    </div>   
  </div>
</nav>
  )
}

export default Navbar