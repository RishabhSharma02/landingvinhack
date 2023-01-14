import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="flex justify-center" id="home" data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out">
    <div className="flex flex-col justify-center">
    <h1 className="font-extrabold leading-tight text-9xxl pl-10 md:text-7xl lg:text-left mt-0 mb-2 text-navy-blue z-20 ">Enhances Your <br></br> Academic Experience
    </h1>
    <p className="font-regular p-6 leading-tight pl-10 md:text-sm w-4/5 lg:text-left mt-0 mb-2 text-navy-blue z-20 ">where students are empowered to reach their full potential through a dynamic and innovative education. Our dedicated faculty and staff provide a supportive and engaging learning environment, where students can gain the knowledge and skills necessary to excel in their chosen field.</p>
    </div>
    <img src="Hero2.png" className='w-1/2 flex items-start'></img>    
    </div><br></br>
    </>
  )
}

export default Hero 