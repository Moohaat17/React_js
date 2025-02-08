import Cardui from "../layouts/CardUi"

function Home(){
    return(
      <>
      <div className="container">
        <div className="row">
            <div className="col-lg-3">
        <Cardui title = "title1" paragraph="lorem ipsum dolo sit amen"/>
                </div>
                <div className="col-lg-3">
        <Cardui title="Title2" paragraph="HEyyyyyyyy"/>
                </div>
                <div className="col-lg-3">
        <Cardui title="Title3" paragraph="lorem ipsum dolo sit amen"/>
                </div>
            </div>
        </div>
    
      </>
    )
  }
  
  export default Home