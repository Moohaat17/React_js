import { Component } from "react";

class ClassCardui extends Component {
  render() {
    return (
      <>
        <div className="card mt-5 border-0 shadow">
          <img src={this.props.image} alt="" />
          <div className="card-body">
            <h3 style={{height:'50px'}}>{this.props.title}</h3>
            <p className="pt-3">{this.props.paragraph}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ClassCardui;
