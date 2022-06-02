import React from "react";
import NewsDate from "../date_time/news_date";

const Slider2Item = (props) => {
  console.log(props.block_detail);
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
      <div class="event_item">
        <h3> {props.block_detail.heading} </h3>
        <p> {props.block_detail.description} </p>
        <NewsDate data={props.block_detail} />
        
        <button className="btn btn-primary"> Read More</button>
      </div>
    );
  };
export default Slider2Item;
