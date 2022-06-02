import React from "react";

const MainBlock = (props) => {
  return (
    <React.Fragment>
      {props.block_detail.map((e) => (
        <div key={e.id} className="row event_block_row m-3 mb-4">
          <div className="col col-4 p-0">
            <img
              src="https://indsteel.org/images/default-usage/video-img.jpg"
              alt="ISA Event"
            />
          </div>
          <div className="col col-8 text-left">
            <h3 className=" p-3"> {e.heading} </h3>
            <p className="pl-3">{e.detail}</p>
            <button className="btn btn-primary m-3">Read More </button>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default MainBlock;
