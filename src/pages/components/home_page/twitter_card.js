import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterCard = () => {
    return ( 
        <div className="twitter_timeline">
            <TwitterTimelineEmbed
  sourceType="profile"
  screenName="steel_indian"
  options={{height: 420}}
/>
        </div>
     );
}
 
export default TwitterCard;