
import Card_data from "../layouts/Carddata"
import FunctionCardui from "./CardFuntion"

const DisplayFunction = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    Card_data.map((ele,index)=>{
                        return(
                            <div className="col-lg-3">
                                <FunctionCardui title={ele.title} paragraph={ele.Paragraph} image={ele.Image} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DisplayFunction