const FilterBlock = (props) => {

    return (
        <div className="calender_year text-left">
            <h4> Filter </h4>
            <div className="row text-center">
                {props.filter.map(e => <div key={e} className="calender_year__col p-1"> <div className="calender_year__block p-2"> {e} </div> </div>)}
                
            </div>
        </div>
    )
}
export default FilterBlock;