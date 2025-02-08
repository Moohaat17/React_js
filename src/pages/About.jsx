import Cardui from "../layouts/CardUi"
import Card_data from "../layouts/Carddata"

const About = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    Card_data.map((ele,index)=>{
                        return(
                            <div className="col-lg-3">
                                <Cardui title={ele.title} paragraph={ele.Paragraph} image={ele.Image} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default About