import React from 'react'

const Achivement = () => {
  return (<>
    <div className="w-full flex justify-between p-12 rounded-lg border-2 bg-navy-blue">
        <div className="bg-white w-1/3 p-12 rounded-lg">
        <div className="p-2 flex items-center justify-center"><h1 className="text-2xl font-bold text-navy-blue p-2">VISION OF VIT</h1>
        </div>    
        VIT was established with the aim of providing quality higher education on par with international standards. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis. <br></br><br></br>Experienced and learned teachers are strongly encouraged to nurture the students. The global standards set at VIT in the field of teaching and research spur us on in our relentless pursuit of excellence.

        <div className="p-2 flex items-center justify-center"><button className="bg-navy-blue hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full text-center">SEE THE STORY</button>
        </div>
              </div>
              <img src="finaldraw.png" className='w-1/2'></img>
            </div>
            <p className="text-md py-24 w-3/5 mx-auto my-10 px-16">
            <h1 className="text-navy-blue text-3xl text-center font-bold p-3">DIVERSITY, EQUITY & INCLUSION</h1>
At VIT, we embrace diversity, equity and inclusion (DE&I) and invite you to learn more about the ongoing work as we strive to achieve inclusive excellence.<br></br><br></br>

We are dedicated to student success and to ensuring a positive experience for students and their families, from the beginning of the college search through graduation.
<div className="p-2 m-6 flex items-center justify-center"><button className="bg-navy-blue hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full text-center">HOW VIT OPERATES</button>
        </div>
            </p>
           
    <p className="text-5xl text-center p-6 mt-10 text-navy-blue font-bold">BUILDING GREATNESS</p>
    <div className='flex flex-row gap-24 flex-wrap items-center2 justify-center pb-6'>
   <div className='p-6'>
    <div className='flex flex-col py-6'><h1 className='text-center font-bold text-navy-blue text-2xl'>60+</h1><p className='text-xl'>Startups Founded</p></div>
    <div className='flex flex-col'><h1 className='text-center font-bold text-navy-blue text-2xl'>600+</h1><p className='text-xl'>Super Dream Offers</p></div></div>
    <div className='p-6'>
    <div className='flex flex-col py-6'><h1 className='text-center font-bold text-navy-blue text-2xl'>7:1</h1><p className='text-xl'>Student-to-Faculty Ratio</p></div>
    <div className='flex flex-col'><h1 className='text-center font-bold text-navy-blue text-2xl'>500+</h1><p className='text-xl'>Research Papers Published</p></div></div>
    <div className='p-6'>
    <div className='flex flex-col py-6'><h1 className='text-center font-bold text-navy-blue text-2xl'>100+</h1><p className='text-xl'>Acres of Campus</p></div>
    <div className='flex flex-col'><h1 className='text-center font-bold text-navy-blue text-2xl'>5000+</h1><p className='text-xl'>Students Enrolled</p></div></div>
    </div>
    </>
  )
}

export default Achivement