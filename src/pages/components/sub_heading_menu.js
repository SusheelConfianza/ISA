import { Link, useLocation } from "react-router-dom";

const SubHeadingMenu = (props) => {
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("http://localhost:3000/");
  return (
    <div className="sub_heading_menu container-fluid">
      <div className="container">
        <div className="row">
          <div className="col col-2">
            <div className="submenu">
              <button className="btn btn-nobg p-3"> {props.menu} </button>
            </div>
          </div>
          <div className="text-right col col-10">
            <div className="submenu">
              {props.submenu.map((e) => (
                <Link key={e.menu} to={e.to} className= {splitLocation[splitLocation.length-1] === e.to ? "active-fh btn btn-fh p-3" : "btn btn-fh p-3"}>
                  {e.menu}{" "}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default SubHeadingMenu;
