import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <nav className="container navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand">
          <img id="header_logo" src={window.api_storage_url+"/images/logo/"+props.settings.dark_logo} alt = "ISA Logo " />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/about/vision" className="nav-link">
                About <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ourMembers" className="nav-link">
                Our Members
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/committees" className="nav-link">
                Committees
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/media/inTheNews" className="nav-link">
                Media
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/knowledgeBank" className="nav-link">
                Knowledge Bank
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/govtNotifications" className="nav-link">
                Govt Notification
              </Link>
            </li>
      <button className="Extranet-btn mx-2 px-2">
        <li className="nav-item">
          <Link to="/Extranet" className="nav-link">
            Extranet
          </Link>
        </li>
      </button>
            {/*
            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="#" className="dropdown-item">
                  Action
                </Link>
                <Link to="#" className="dropdown-item">
                  Another action
                </Link>
                <Link to="#" className="dropdown-item">
                  Something else here
                </Link>
              </div>
            </li>
            */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
