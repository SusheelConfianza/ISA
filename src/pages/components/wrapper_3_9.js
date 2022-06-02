
import "./components.css"

const InnerWrapper = (props) => {
    return(
        <div className="container">
            <div className="row">
            <div className="col col-lg-3 col-md-3">
                {props.col3}
            </div>
            <div className="col col-lg-9 col-md-9">
            {props.col9}
            </div>
        </div>
        </div>
    )
}

export default InnerWrapper;