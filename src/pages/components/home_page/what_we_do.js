import React from "react";
import './home.css';
import WeDoBox from "./we_do_box";


const WeDo = () => {
    const we_do_data = [
        {
            "bg_color" : "bg11",
            "heading" : "Promoting Steel",
            "description" : "Steel has many advantages as a construction material. Not only is it strong, durable, and flexible, but also aesthetical.",
            "icon" : "fa-solid fa-gears",
            "url" : "ourWork/aa"
        },
        {
            "bg_color" : "bg12",
            "heading" : "Working With Government",
            "description" : "ISA is in close touch with the Government on matters affecting the steel industry.",
            "icon" : "fa-solid fa-scale-unbalanced-flip",
            "url" : "ourWork/aa"
        },
        {
            "bg_color" : "bg13",
            "heading" : "Spreading The Word",
            "description" : "In addition to its workshops, seminars and other events, the ISA plays a critical role in disseminating information.",
            "icon" : "fa-solid fa-bullhorn",
            "url" : "ourWork/aa"
        },
        {
            "bg_color" : "bg14",
            "heading" : "Acting Globally",
            "description" : "As well as being an active member of the WSA, ISA also works with sister organizations in Asia such as China.",
            "icon" : "fa-solid fa-globe",
            "url" : "ourWork/aa"
        }
    ]
    return ( 
        <React.Fragment>
            <div className="container py-5">
            <h2 className="pb-4"> What We Do?</h2>
            <div className="what_we_do row justify-content-center">
                <div className="col col-12">
                    <div className="row">
                        {we_do_data.map(e=> <WeDoBox we_do_data={e} />)}
                    </div>
                </div>
            </div>
            </div>

        </React.Fragment>
     );
}
 
export default WeDo;