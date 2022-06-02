import { Link } from "react-router-dom";
import FooterMainCol from "./footer_main_column";


const columnArray = [
  {
    key: 1,
    heading: "Useful Links",
    menus: [
      {
        key: 11,
        name: "Home",
        to: "/",
      },
      {
        key: 12,
        name: "About",
        to: "/about",
      },
      {
        key: 13,
        name: "Our Members",
        to: "/ourMembers",
      },
      {
        key: 14,
        name: "Committees",
        to: "/committees",
      },
      {
        key: 16,
        name: "Events & Meetings",
        to: "/events",
      },
      {
        key: 17,
        name: "Knowledge Bank",
        to: "/knowledgeBank",
      },
      {
        key: 18,
        name: "Govt Notification",
        to: "/notification",
      },
    ],
  },
  {
    key: 2,
    heading: "Other Links",
    menus: [
      {
        key: 21,
        name: "World Steel Association",
        to: "https://worldsteel.org/",
        aTarget: "blank",
      },
      {
        key: 22,
        name: "Ministry of Steel",
        to: "https://steel.gov.in/",
        aTarget: "blank",
      },
    ],
  },
];

const FooterContainer = (props) => {
  return (
    <section className="">
      <div className="container text-left text-md-start py-4">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}

          <div className="footer_col col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <Link to="/" className="navbar-brand">
              <img
                id="header_logo"
                src={
                  window.api_storage_url +
                  "/images/logo/" +
                  props.settings.light_logo
                }
                alt="ISA Logo "
              />
            </Link>
            <address>
              Upper Ground Floor No. 4, Kanchenjunga Building, 18, Barakhamba
              Road, New Delhi-110001 INDIA <br /> <br />
              <i className="fa-solid fa-phone"></i> : 011 – 42668800 <br />
              <i className="fa-solid fa-fax"></i> : 011 – 42668805 <br />
              <i className="fa-solid fa-envelope"></i> : media.isa@indsteel.org{" "}
              <br />
            </address>
          </div>

          {columnArray.map((e) => (
            <FooterMainCol
              key={e.key}
              heading={e.heading}
              menu_item={e.menus}
            />
          ))}

          <div className="col-md-3 col-lg-2 col-xl-2 text-left mx-auto mb-4" id="footer-social-icons">
            {/* Links */}
            <h5 className="text-uppercase fw-bold">Get connected with us on social networks:</h5>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <ul>
            <a
              href={props.settings.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-white px-2"
            >
              <i className="fa-brands fa-facebook-square text-2xl"></i>
            </a>
            <a
              href={props.settings.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-white px-2"
            >
              <i className="fa-brands fa-twitter-square text-2xl"></i>
            </a>

            <a
              href={props.settings.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-white px-2"
            >
              <i className="fa-brands fa-instagram-square text-2xl"></i>
            </a>
            <a
              href={props.settings.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-white px-2 hover:"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
            <a
              href={props.settings.youtube}
              target="_blank"
              rel="noreferrer"
              className="text-white px-2"
            >
              <i className="fa-brands fa-youtube-square text-2xl"></i>
            </a>
            </ul>
          </div>
        </div>

        {/* Grid row */}
      </div>
    </section>
  );
};

export default FooterContainer;
