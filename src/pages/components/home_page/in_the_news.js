import React, { useEffect, useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";

const InTheNews = () => {
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
    const url = new URL(window.api_url + "/media");

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
    <React.Fragment>
      <div className="in_the_news_div row p-5">
        <div className="container">
          <h2> ISA in the News</h2>

          <div className="row">
            <ReactOwlCarousel
              className="owl-theme"
              loop
              margin={10}
              autoplay
              nav
            >
              {isLoading ?  <Cards block_detail={state} /> : <Cards block_detail={state} />}
            </ReactOwlCarousel>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Cards = (props) => {
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
    <div class="item">
      <div class="card">
        <img
          src={window.api_storage_url+"/images/media/"+props.block_detail.image}
          alt="Card image cap"
        />
        <div class="card-body">
          <h4 class="card-title text-left">{props.block_detail.heading}</h4>
          <div className="text-right">
          <a href="#" class="btn btn-primary">
            Know More
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InTheNews;
