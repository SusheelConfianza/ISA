import React from 'react'
import '../about_page/about.css'

function Vision() {
  return (
    <section>
    <div className='container vison-container'>
        <div className='row'>
            <div className='col-4 py-16 bg11' id='vision-content'>
                <div className='row flex-col mx-4 text-left color11 '>
                   <div className='col-6 bg-light mb-2'><h1 className='text-4xl'>Vision</h1></div>
                   <div className='bg-light'><h1 className='text-4xl px-2'>and Mision</h1></div>
                   <p className='py-4 text-2xl mb-4 text-light'>Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt </p>
                </div>
            </div>
            <div className='col-8'>2</div>
        </div>
    </div>
    <div className='container py-4'>
        <h1 className='text-center text-3xl color11'>Our Vision</h1>
        <p className='py-4 text-xl text-left'>The VISION of Indian Steel Association is to “work towards transforming the Indian Steel Industry as a global leader acclaimed for its Quality, Productivity and Competitiveness, with focus on health, safety and environment, along with growing thrust on innovation through R&D, adopting an inclusive and collective approach”.</p>
        <div className='row px-8'>
            <div className='col' id='mission'>
               <img src='http://www.ubalt.edu/merrick/uploads/660x450-mobile-homepage/660x450-Infographic%20Icons_Data%20Analytics.jpg' alt='img'/>
            </div>
            <div className='col' id='mission'>
               <img src='http://www.ubalt.edu/merrick/uploads/660x450-mobile-homepage/660x450-Infographic%20Icons_Data%20Analytics.jpg' alt='img'/>
            </div>
            <div className='col rounded-circle' id='mission'>
               <img src='http://www.ubalt.edu/merrick/uploads/660x450-mobile-homepage/660x450-Infographic%20Icons_Data%20Analytics.jpg' className='rounded-circle' alt='img'/>
            </div>
        </div>
       
    </div>
    <div className='container py-8'>
        <h1 className='text-3xl py-2 color11'>Mision</h1>
        <p className='text-xl text-left'>Indian Steel as the platform for Indian iron and steel industry shall facilitate addressal of issues,concerns and challenges common to its members with Government and other stakeholders within and outside India in compliance with all applicable laws and regulations, including but not limited to the competition laws in India and abroad, for the time being, in force.</p>
    </div>
    </section>
  )
}

export default  Vision