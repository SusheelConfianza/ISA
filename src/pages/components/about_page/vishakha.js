import React from 'react'
import Wrapper from '../../../layouts/wrapper'

const submenu = [
    
    {
        "menu" : "Vision & Mission",
        "to" : "/about/vision"
    },
    {
        "menu" : "Vishaka Comitee",
        "to" : "/about/vishakha"
    },
    {
        "menu" : "Our Team",
        "to" : "/about/ourTeam"
    },
]

function vishakha() {
  return (
    <Wrapper menu="About" submenu={submenu}>
    <div className='container'>
        <h1 className='text-5xl text-left py-4 fw-bolder'>Vishakha Commitee</h1>
        <div className='row' id='vishaka-comitee-banner'>
            <div className='col'>
            </div>
            <div className='col'>

            </div>
        </div>
    </div>
</Wrapper>
    
  )
}

export default vishakha