import Slider2Item from "./slider2_item";
import React, { useEffect, useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import Slider3Item from "./slider3_item";

const EventsMeetings = () => {
  const initial_state = [
    {
        "id": 1,
        "created_at": "2022-05-20T16:36:24.000000Z",
        "updated_at": "2022-05-27T06:25:44.000000Z",
        "status": 1,
        "date": "2022-05-09",
        "heading": "Alok Sahay appointed as Secretary-General and Executive Head of Indian Steel Association",
        "description": "Indian Steel Association (ISA) announced Friday that former executive director of state-owned SAIL, Alok Sahay has assumed office as its new Secretary-General and Executive Head from 1st October 2021, taking over from Bhaskar Chatterjee.",
        "url": "https://economictimes.indiatimes.com/industry/indl-goods/svs/steel/alok-sahay-appointed-as-secretary-general-and-executive-head-of-indian-steel-association/articleshow/86681598.cms",
        "source": "The Economic Times--",
        "year": null,
        "filter": null,
        "image": "62906ee82616a.webp"
    },
    {
        "id": 2,
        "created_at": "2022-05-21T07:54:17.000000Z",
        "updated_at": "2022-05-27T06:32:47.000000Z",
        "status": 1,
        "date": "2022-02-10",
        "heading": "Supreme Court allows export of iron ore from key mines in Karnataka",
        "description": "Order allows direct sales as opposed to e-auctions only; three-judge bench asks mining firms to comply with Centre's rules on the matter",
        "url": "https://www.business-standard.com/article/economy-policy/supreme-court-allows-export-of-iron-ore-from-key-mines-in-karnataka-122052001543_1.html",
        "source": "Busines Standard",
        "year": 2022,
        "filter": null,
        "image": "6290708f9705b.jfif"
    },
    {
        "id": 3,
        "created_at": "2022-05-25T10:13:50.000000Z",
        "updated_at": "2022-05-27T06:32:11.000000Z",
        "status": 1,
        "date": "2022-05-05",
        "heading": "Steel Association writes to Sitharaman, seeks withdrawal of export duty",
        "description": "The Indian Steel Association (ISA) representing major companies has written to Finance Minister Nirmala Sitharaman, seeking withdrawal of export duty on iron and steel intermediates.",
        "url": "https://www.business-standard.com/article/economy-policy/steel-association-writes-to-sitharaman-seeks-withdrawal-of-export-duty-122052301769_1.html",
        "source": "Business Standerds",
        "year": null,
        "filter": null,
        "image": "6290706be1e43.webp"
    }
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
        setstate(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <section class="events_section container">
      <h2 className="p-4"> Events & Meetings</h2>
      <div class="flex events_div">
        <div class="w-2/3 slider2_div">
          <ReactOwlCarousel
            className="owl-theme"
            items="1"
            navText={['<','>']}
            navClass={['arrow_left','arrow_right']}
            loop
            margin={10}
            autoplay
            dots={false}
            nav
          >
            {isLoading ? <Slider2Item block_detail={state} /> : <Slider2Item block_detail={state} />}
          </ReactOwlCarousel>
        </div>
        <div class="w-1/3 bg21 fluid">
          <ReactOwlCarousel
            className="owl-theme"
            items="1"
            navText={['<','>']}
            navClass={['arrow_left slider-3_item','arrow_right slider-3_item']}
            loop
            margin={10}
            autoplay
            nav
            dots={false}
          >
            {isLoading ? <Slider3Item block_detail={state} /> : <Slider3Item block_detail={state} />}
          </ReactOwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default EventsMeetings;
