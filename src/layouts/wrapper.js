import Header from "./header";
import Footer from "./footer";
import "./layouts.css";
import SubHeadingMenu from "../pages/components/sub_heading_menu";
import { useEffect, useState } from "react";

const Wrapper = (props) => {
  const [settings, setSetting] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = new URL(window.api_url + "/settings");

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
        setSetting(data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <Header settings={settings} />
      {props.submenu
      ? <SubHeadingMenu menu={props.menu} submenu={props.submenu} />
      : ''
      }
      <main className="container-fluid" id="main_container">
        {props.children}
      </main>

      <Footer settings={settings} />
    </div>
  );
};

export default Wrapper;
