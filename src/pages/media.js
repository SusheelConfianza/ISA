import React, {useState, useEffect} from "react"

import Wrapper from "../layouts/wrapper"
import CalenderYear from "./components/calender_year"
import PageHeading from "./components/page_heding"
import SignupBox from "./components/signup_box"
import InnerWrapper from "./components/wrapper_3_9"
import FilterBlock from "./components/filter_block"
import { useLocation } from "react-router-dom"
import InTheNews from "./components/media/in_the_news"
import Contact from "./components/media/contact"


const submenu = [
    
    {
        "menu" : "Press Release",
        "to" : "/media/pressRelease"
    },
    {
        "menu" : "In The News",
        "to" : "/media/inTheNews"
    },
    {
        "menu" : "Media Contact",
        "to" : "/media/contact"
    },
]
const Media = () => {


    return (
        <Wrapper menu="Media" submenu={submenu}>
            <PageHeading h1="In The News" />
            <InnerWrapper col3={<Col3/>} col9={<Col9/>} />
        </Wrapper>
    )
}

const year = [2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011]
const filter = ["Steel Industry","Steel Association","Import Duties","Raw Material","Industrial Sector","ISA","Budget 2022"]
const Col3 = () => {
    return (
        <React.Fragment>
            <FilterBlock filter={filter} />
            <CalenderYear year ={year} />
            <SignupBox />

        </React.Fragment>
    )
}


const Col9 = () => {
   
    const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("http://localhost:3000/");
  console.log(splitLocation);
    return (
        <React.Fragment>
            {splitLocation=='/media/inTheNews'
            ? <InTheNews />
            : ''
            }
            {splitLocation=='/media/contact'
            ? <Contact />
            : ''
            }
        </React.Fragment>
    )
}







export default Media