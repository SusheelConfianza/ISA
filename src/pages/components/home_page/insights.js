import React from "react";
import InsightCard from "./insight_card";
import Podcast from "./podcast_card";
import TwitterCard from "./twitter_card";

const Insight = () => {
  return (
    <React.Fragment>
      <div className="insight_div row p-5">
        <div className="container">
          <h2 className="insight_h2"> Insights</h2>

          <div className="row">
            <div className="col col-4">
              <InsightCard />
            </div>
            <div className="col col-4 bg21">
              <TwitterCard />
            </div>
            <div className="col col-4">
              <Podcast />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Insight;
