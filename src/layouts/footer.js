import FooterContainer from "./footer_container";
import FooterCopyright from "./footer_copyright";


const Footer = (props) => {
 

console.log()

  return (
    <footer className="text-center text-lg-start text-white">
      <FooterContainer  settings={props.settings}/>      
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
