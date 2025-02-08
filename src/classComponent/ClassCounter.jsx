import { Component } from "react";
class ClassCounter extends Component{
  constructor(){
    super()
    this.state = {
      count: 0,
      name: "test"
    }
  }
  inc =()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  dec =()=>{
    var counter = this.state.count;
    this.setState({
      count: counter>0?counter-1:counter
    })
  }
  render(){ 
    return(
      <>
      <h1 className="text-center mt-3">Using Class Component</h1>
        <div className="col-lg-6 mx-auto my-5 p-5 shadow text-center">
            <h1>{this.state.count}</h1>
            <button className="btn btn-success m-3" onClick={this.inc}>+</button>
            <button className="btn btn-danger m-3" onClick={this.dec}>-</button>
            
            </div>
      </>
    )
  }
}

export default ClassCounter