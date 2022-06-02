import React, { useState } from 'react'

function Gallery() {
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
            "description": "The global metal ore market is expected to grow from $417.68 billion in 2021 to $478.85 billion in 2022 at a compound annual growth rate (CAGR) of 14.6%. The metal ore market is expected to grow to $831.22 billion in 2026 at a CAGR of 14.8%.",
            "url": "https://economictimes.indiatimes.com/industry/indl-goods/svs/steel/alok-sahay-appointed-as-secretary-general-and-executive-head-of-indian-steel-asso",
            "location": "Delhi",
            "year": null,
            "filter": null,
            "type": "Confrence"
        },
        {
            "id": 3,
            "created_at": "2022-05-25T05:47:13.000000Z",
            "updated_at": "2022-05-25T05:47:13.000000Z",
            "status": 1,
            "date": "2022-05-11",
            "heading": "Heading 3",
            "image": "628dc2e11b4c2.png",
            "description": "The global metal ore market is expected to grow from $417.68 billion in 2021 to $478.85 billion in 2022 at a compound annual growth rate (CAGR) of 14.6%. The metal ore market is expected to grow to $831.22 billion in 2026 at a CAGR of 14.8%.",
            "url": "https://economictimes.indiatimes.com/industry/indl-goods/svs/steel/alok-sahay-appointed-as-secretary-general-and-executive-head-of-indian-steel-asso",
            "location": "Delhi",
            "year": null,
            "filter": null,
            "type": "Confrence"
        },
        {
            "id": 3,
            "created_at": "2022-05-25T05:47:13.000000Z",
            "updated_at": "2022-05-25T05:47:13.000000Z",
            "status": 1,
            "date": "2022-05-11",
            "heading": "Heading 3",
            "image": "628dc2e11b4c2.png",
            "description": "The global metal ore market is expected to grow from $417.68 billion in 2021 to $478.85 billion in 2022 at a compound annual growth rate (CAGR) of 14.6%. The metal ore market is expected to grow to $831.22 billion in 2026 at a CAGR of 14.8%.",
            "url": "https://economictimes.indiatimes.com/industry/indl-goods/svs/steel/alok-sahay-appointed-as-secretary-general-and-executive-head-of-indian-steel-asso",
            "location": "Delhi",
            "year": null,
            "filter": null,
            "type": "Confrence"
        },
        {
            "id": 3,
            "created_at": "2022-05-25T05:47:13.000000Z",
            "updated_at": "2022-05-25T05:47:13.000000Z",
            "status": 1,
            "date": "2022-05-11",
            "heading": "Heading 3",
            "image": "628dc2e11b4c2.png",
            "description": "The global metal ore market is expected to grow from $417.68 billion in 2021 to $478.85 billion in 2022 at a compound annual growth rate (CAGR) of 14.6%.",
            "url": "https://economictimes.indiatimes.com/industry/indl-goods/svs/steel/alok-sahay-appointed-as-secretary-general-and-executive-head-of-indian-steel-asso",
            "location": "Delhi",
            "year": null,
            "filter": null,
            "type": "Confrence"
        },
    ]
    const [state, setstate] = useState(initial_state);
  

  return (
   
    <div className='container recent-development-container px-20 py-4'>
        <h2 className='text-left my-2'>Recent <span className='development'>Development</span> </h2>
        <div className='row  py-2'>
            {state.map((e)=> {
                return (
                    <>
                    <div className='col-4 p-2'>
                        <img src= {window.api_storage_url+"/images/media/6290708f9705b.jfif"} alt={e.heading} className='border border-dark img-fluid'/>
                        <p className='text-xl'>{e.description}</p>
                    </div>
                    </>
                )
            })}
        </div>
    </div>
   
  )
}

export default Gallery