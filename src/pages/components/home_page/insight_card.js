const InsightCard = () => {
    return ( 
        <div class="card insight_card">
                <img
                  class="card-img-top"
                  src={window.api_storage_url+"/images/home_page/green_steel.jpg"}
                  alt="Card image cap"
                />
                <div class="card-body text-left">
                  <h4 class="card-title">Building the future of green steel</h4>
                  <p class="card-text">
                  GREEN STEEL THROUGH HYDROGEN DIRECT REDUCTION A STUDY ON THE ROLE OF HYDROGEN IN THE INDIAN IRON AND STEEL SECTOR THEENERGY AND RESOURCESINSTITUTE Creating Innovative Solutions for a Sustainable Future ©2021
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
     );
}
 
export default InsightCard;