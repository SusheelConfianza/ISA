const CalenderYear = (props) => {

    return (
        <div className="calender_year text-left">
            <h4> Year </h4>
            <div className="row text-center">
                {props.year.map(e => <div key={e} className="calender_year__col p-1 col col-3"> <div className="calender_year__block p-2"> {e} </div> </div>)}
                
            </div>
        </div>
    )
}
export default CalenderYear;