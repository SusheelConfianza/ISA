import React from "react";
import NewsDate from "./date_time/news_date";



const Block2 = (props) => {
    return (
        <React.Fragment>
            {props.block_detail.map((e) => (
        <div key={e.id} className="row event_block_row m-3 mb-4">
          <div className="col col-4 p-0">
            <img
              src={window.api_storage_url+"/images/events/"+e.image}
              alt="ISA Event"
            />
          </div>
          <div className="col col-8 text-left">
            <h3 className=" p-3"> {e.heading} </h3>
            <NewsDate data={e} />
            <p className="pl-3">{e.detail}</p>
          </div>
        </div>
      ))}
        </React.Fragment>
    )
}

 
export default Block2;