const NewsDate = (props) => {
    const d = new Date(props.data.date)
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    return ( 
        <div className="new_date pl-3 pb-3"> 
            <span className="font-italic"> {d.getDate()} {months[d.getMonth()]}, {d.getFullYear()}</span>
            {props.data.source ? <> | <span className="font-italic"> {props.data.source}</span></> : ''}
            {props.data.notification_number ? <> | <span className="font-italic"> {props.data.notification_number}</span></> : ''}
         </div>
     );
}

export default NewsDate;