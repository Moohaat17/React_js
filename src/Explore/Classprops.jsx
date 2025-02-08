import { Component } from "react";
import ClassCardui from "./ClassCardUi";
import Card_data from "../layouts/Carddata";

class ClassProps extends Component{
    render(){
        return(
            <>
        <div className="container">
            <div className="row">
                {
                    Card_data.map((ele,index)=>{
                        return(
                            <div className="col-lg-3">
                                <ClassCardui title={ele.title} paragraph={ele.Paragraph} image={ele.Image} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
        )
    }
}

export default ClassProps