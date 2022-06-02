import { Routes, Route } from "react-router-dom";
import "../App.css";

import Home from "../pages/home";
import Events from "../pages/events";
import Media from "../pages/media";
import Committees from "../pages/committees";
import OurMembers from "../pages/members";
import KnowledgeBank from "../pages/knowledge_bank";
import Notification from "../pages/govt_notifications";
import Error404 from "../pages/errors/404";
import About from "../pages/about";
import Vishakha from "../pages/components/about_page/vishakha";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="about/vision" element={<About />} />
      <Route path="about/ourTeam" element={<About />} />
      <Route path="about/vishakha" element={<Vishakha/>} />
      <Route path="ourMembers" element={<OurMembers />} />
      <Route path="committees" element={<Committees />} />
      <Route path="events/committeeEvents" element={<Events />} />
      <Route path="events/isaEvents" element={<Events />} />
      <Route path="events/externalNews" element={<Events />} />
      <Route path="media/pressRelease" element={<Media />} />
      <Route path="media/inTheNews" element={<Media />} />
      <Route path="media/contact" element={<Media />} />
      <Route path="knowledgeBank" element={<KnowledgeBank />} />
      <Route path="govtNotifications" element={<Notification />} />



      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default RouteComponent;
