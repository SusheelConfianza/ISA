import React, { useEffect, useState } from 'react'

import MainBlock from "./../block1"
import MainBlockLoading from "./../loading_block1"



const InTheNews = () => {
    const [state, setstate] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const url = new URL(window.api_url+"/media");

    
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

export default InTheNews