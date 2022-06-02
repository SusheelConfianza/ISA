import React, { useEffect, useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";

const TopBanner = () => {
    const initial_state=[
        {
            "id": 1,
            "created_at": "2022-05-20T16:36:24.000000Z",
            "updated_at": "2022-05-28T07:44:21.000000Z",
            "status": 1,
            "date": "2022-05-09",
            "heading": "2021 Dubai Building steel",
            "subheading1": "and Raw Materials",
            "subheading2": "Hybrid Confrence",

            "image": "628dcada30337.png",
            "description": "Indian Steel Association (ISA) announced Friday that former executive director of state-owned SAIL, Alok Sahay has assumed office as its new Secretary-General and Executive Head from 1st October 2021, taking over from Bhaskar Chatterjee.",
            "url": "bb",
            "location": "hh",
            "year": null,
            "filter": null
        },
        {
            "id": 2,
            "created_at": "2022-05-21T07:54:17.000000Z",
            "updated_at": "2022-05-25T06:22:53.000000Z",
            "status": 1,
            "date": "2022-02-10",
            "heading": "2021 Dubai Building steel",
            "subheading1": "and Raw Materials",
            "subheading2": "Hybrid Confrence",

            "image": "628dcb3d8cb4b.jpg",
            "description": "Order allows direct sales as opposed to e-auctions only; three-judge bench asks mining firms to comply with Centre's rules on the matter",
            "url": "https://www.business-standard.com/article/economy-policy/supreme-court-allows-export-of-iron-ore-from-key-mines-in-karnataka-122052001543_1.html",
            "location": "New Delhi",
            "year": 2022,
            "filter": null
        },
        {
            "id": 3,
            "created_at": "2022-05-25T05:47:13.000000Z",
            "updated_at": "2022-05-25T05:47:13.000000Z",
            "status": 1,
            "date": "2022-05-11",
            "heading": "2021 Dubai Building steel",
            "subheading1": "and Raw Materials",
            "subheading2": "Hybrid Confrence",
            "image": "628dc2e11b4c2.png",
            "description": `"Coal gasification is the future. It is considered a cleaner option compared to the burning of coal. Gasification facilitates utilization of the chemical properties of coal.`,
            "url": "https://economictimes.indiatimes.com/industry/indl-goods/svs/steel/alok-sahay-appointed-as-secretary-general-and-executive-head-of-indian-steel-asso",
            "location": "Delhi",
            "year": null,
            "filter": null
        }
    ]

    const data = [
      {
        "id": 1,
        "created_at": "2022-05-20T16:36:24.000000Z",
        "updated_at": "2022-05-28T07:44:21.000000Z",
        "status": 1,
        "date": "2022-05-09",
        "heading": "2021 Dubai Building steel",
        "subheading1": "and Raw Materials",
        "subheading2": "Hybrid Confrence",

        "image": "628dcada30337.png",
        "description": "Indian Steel Association (ISA) announced Friday that former executive director of state-owned SAIL, Alok Sahay has assumed office as its new Secretary-General and Executive Head from 1st October 2021, taking over from Bhaskar Chatterjee.",
        "url": "bb",
        "location": "hh",
        "year": null,
        "filter": null
    },
    ]
  const [state, setstate] = useState(initial_state);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = new URL(window.api_url + "/events");

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    fetch(url, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        // setstate(data);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <React.Fragment>
      <div className="container text-left">
        <div className="row top_banner">
            <div className="col col-5 bg11">
            <div className="text-left mt-8">
            <button type="button" class="btn btn-outline-light mt-8 text-left mx-4 mb-2">Hybrid Event</button></div>

            <SliderItem block_detail={data} />
          
            </div>
        </div>

      </div>
    </React.Fragment>
  );
};

const SliderItem = (props) => {
  console.log(props.block_detail);
  return (
    <React.Fragment>
      {props.block_detail.map((e) => (
        <div class="px-4" id="topBanner-heading-container"> 
          <h1 className="my-2 p-2 bg-light "> {e.heading} </h1>
          <h1 className="my-2 p-2 bg-light ">{e.subheading1}</h1>
          <h1 className="my-2 p-2 bg-light ">{e.subheading2}</h1>
          <p className="text-left text-white  fw-bolder py-2">{e.description}</p>
          <DateFunction date={e.date} />
         <div className="text-right">
           <button className="btn btn-primary my-4">Read More <i class="fa-solid fa-angle-right"></i></button>
         </div>
      
         
        </div>
      ))}
    </React.Fragment>
  );
};

function DateFunction(params) {
  const d = new Date(params.date)
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return(
      <>
              <p className='text-left fw-bold dateColor'> {d.getDate()} {months[d.getMonth()]}, {d.getFullYear()} </p> 
          
      </>
  )
}

export default TopBanner;
