import React, {useState, useEffect} from "react"

import Wrapper from "../layouts/wrapper"
import CalenderYear from "./components/calender_year"
import MainBlock from "./components/block1"
import MainBlockLoading from "./components/loading_block1"
import PageHeading from "./components/page_heding"
import SignupBox from "./components/signup_box"
import InnerWrapper from "./components/wrapper_3_9"
import FilterBlock from "./components/filter_block"

const Media = () => {
    return (
        <Wrapper menu="Media">
            <PageHeading h1="Government Notifications" />
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
    const [state, setstate] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const url = new URL(window.api_url+"/govtNotifications");

    
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    
    fetch(url, {
        method: "GET",
        headers,
    })
    .then(response => response.json()).then(data => {
      setstate(data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, []);
    
    return (
        <React.Fragment>
            {isLoading 
            ? <MainBlockLoading />
            : <MainBlock block_detail={state} />
            }

        </React.Fragment>
    )
}







export default Media