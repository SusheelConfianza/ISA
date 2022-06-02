import React from "react";
import NewsDate from "./date_time/news_date";



const Block1 = (props) => {
    return (
        <React.Fragment>
            {props.block_detail.map((e) => (
                
        <div key={e.id} className="row event_block_row m-3 mb-4">
         
          <div className="col col-12 text-left">
            <h3 className=" pl-3 pt-3"> {e.heading} </h3>
            <NewsDate data={e} />
            <p className="pl-3">{e.description}</p>
            {e.url.toLowerCase().startsWith("http", 0) 
            ? <a href={e.url} target="_blank" rel="noreferrer" className="btn btn-primary m-3">Read More </a> 
            : <button className="btn btn-primary m-3">Read More </button>
            }
            {e.attachment 
            ? <a href={window.api_storage_url+"/documents/govt_notifications/"+e.attachment} target="_blank" rel="noreferrer" className="btn btn-primary m-3"> Download <i class="fa-solid fa-download"></i> </a>  : ""}
          </div>
        </div>
      ))}
        </React.Fragment>
    )
}

 
export default Block1;