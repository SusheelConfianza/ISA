import { Link } from "react-router-dom";
const FooterMainCol = (props) => {
    return(
        <div className=" footer_col col-md-3 col-lg-2 col-xl-2 text-left mx-auto mb-4">
              {/* Links */}
              <h5 className="text-uppercase fw-bold"> {props.heading} </h5>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" />
              {props.menu_item.map(e => 
                 e.aTarget !== "blank"?
                  <h6 key={e.key}> <Link to={e.to} > {e.name} </Link> </h6> 
                 : <h6 key={e.key}> <a href={e.to} target="_blank" rel="noreferrer" > {e.name} </a> </h6> 
                
                
               )}
              
            </div>
    )
}

export default FooterMainCol;