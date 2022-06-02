

const FooterSocial = (props) => {
  console.log(props.settings);

  return (
    <section className="d-flex justify-content-between p-4" id="footer_social_main_section">
      {/* Left */}
      <div className="mt-2">
        <span>Get connected with us on social networks:</span>
      </div>

      <div id="footer_social">
    <a href={props.settings.facebook} target="_blank" rel="noreferrer" className="text-white me-4">
      <i className="fa-brands fa-facebook-square"></i>
    </a>
    <a href={props.settings.twitter} target="_blank" rel="noreferrer" className="text-white me-4">
      <i className="fa-brands fa-twitter-square"></i>
    </a>
  
    <a href={props.settings.instagram} target="_blank" rel="noreferrer"  className="text-white me-4">
      <i className="fa-brands fa-instagram-square"></i>
    </a>
    <a href={props.settings.linkedin} target="_blank" rel="noreferrer"  className="text-white me-4">
      <i className="fa-brands fa-linkedin"></i>
    </a>
    <a href={props.settings.youtube} target="_blank" rel="noreferrer" className="text-white me-4">
      <i className="fa-brands fa-youtube-square"></i>
    </a>
   
  </div>
      
    </section>
  );
};

export default FooterSocial;
