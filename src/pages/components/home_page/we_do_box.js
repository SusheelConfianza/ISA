import { Link } from "react-router-dom";

const WeDoBox = (props) => {
    const data = props.we_do_data;
    return ( 
        <div className={ data.bg_color+" we_do_box col col-3"}>
            
            <h4 className=""> {data.heading} </h4>
            <p> {data.description} </p>
            <p>
                <i class={data.icon}></i>
            </p>
            {data.url.toLowerCase().startsWith("http", 0) 
            ? <a href={data.url} target="_blank" rel="noreferrer" className="btn btn-primary m-3">Read More </a> 
            : <Link to={data.url} className="btn btn-primary m-3">Read More </Link>
            }
            
        </div>
     );
}
 
export default WeDoBox;