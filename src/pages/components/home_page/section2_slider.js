import React, { useEffect, useState} from 'react'
import ReactOwlCarousel from 'react-owl-carousel'


function Section2_slider() {
    const initial_state=[
        {
            "id": 1,
            "created_at": "2022-05-20T16:36:24.000000Z",
            "updated_at": "2022-05-28T07:44:21.000000Z",
            "status": 1,
            "date": "2022-05-09",
            "heading": "Heading",
            "image": "628dcada30337.png",
            "description": "Indian Steel Association (ISA) announced Friday that former executive director of state-owned SAIL, Alok Sahay has assumed office as its new Secretary-General and Executive Head from 1st October 2021, taking over from Bhaskar Chatterjee.",
            "url": "bb",
            "location": "hh",
            "year": null,
            "filter": null,
            "type": "Event"
        },
        {
            "id": 2,
            "created_at": "2022-05-21T07:54:17.000000Z",
            "updated_at": "2022-05-25T06:22:53.000000Z",
            "status": 1,
            "date": "2022-02-10",
            "heading": "Supreme Court ",
            "image": "628dcb3d8cb4b.jpg",
            "description": "Order allows direct sales as opposed to e-auctions only; three-judge bench asks mining firms to comply with Centre's rules on the matter",
            "url": "https://www.business-standard.com/article/economy-policy/supreme-court-allows-export-of-iron-ore-from-key-mines-in-karnataka-122052001543_1.html",
            "location": "New Delhi",
            "year": 2022,
            "filter": null,
            "type": "Meeting"
        },
        {
            "id": 3,
            "created_at": "2022-05-25T05:47:13.000000Z",
            "updated_at": "2022-05-25T05:47:13.000000Z",
            "status": 1,
            "date": "2022-05-11",
            "heading": "Heading 3",
            "image": "628dc2e11b4c2.png",
            "description": "bbbbbbbbbbbbbb",
            "url": "https://economictimes.indiatimes.com/industry/indl-goods/svs/steel/alok-sahay-appointed-as-secretary-general-and-executive-head-of-indian-steel-asso",
            "location": "Delhi",
            "year": null,
            "filter": null,
            "type": "Confrence"
        }
    ]
      const [state, setstate] = useState(initial_state);
      const [isLoading, setIsLoading] = useState(true);    
  return (
    <section>
        <div className='container' id='slider2'>
            <div className='row'>
            <ReactOwlCarousel
            className="owl-theme"
            items="3"
            navText={['<','>']}
            navClass={['arrow_left','arrow_right',]}
            center
            loop
            margin={3}
            autoplay={false}
            dots={false}
            nav
          >
              {state.map(e=>
                <div className='bg-secondary'>
                <div className='text-right'>
                <button className='bg-primary p-3'>{e.type}</button></div>
                <h1 className='text-3xl py-2'>{e.id} <span>{e.heading}</span></h1>
                
                <DateFunction date={e.date} />
            </div>
                )}
             
          </ReactOwlCarousel>
            </div>
        </div>
    </section>
  )
}

function DateFunction(params) {
    const d = new Date(params.date)
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return(
        <>
                <p className='pb-8'> {d.getDate()} {months[d.getMonth()]}, {d.getFullYear()} </p> 
            
        </>
    )
}

export default Section2_slider