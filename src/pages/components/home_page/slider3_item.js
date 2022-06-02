import React from "react";
import NewsDate from "../date_time/news_date";

const Slider3Item = (props) => {
  return (
    <React.Fragment>
      {props.block_detail.map((e) => (
        <Card block_detail={e} />
      ))}
    </React.Fragment>
  );
};
const Card = (props) => {
    return (
      <div class="item my-8 text-left px-4">
        <h3> {props.block_detail.heading} </h3>
        <p className="pb-2"> {props.block_detail.description} </p>
        <NewsDate data={props.block_detail} />
        
        <button className="btn btn-primary"> Read More</button>
      </div>
    );
  };
export default Slider3Item;
