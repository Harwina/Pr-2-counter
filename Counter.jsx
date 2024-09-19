import { Component } from "react";


class Count extends Component {
  constructor() {
    super();
    this.state = {
      cnt: 0,
    };
  }
  plus = () => {
    this.setState({
      cnt: this.state.cnt + 1,
    });
  };

  dec = () => {
    this.setState({
      cnt: this.state.cnt - 1,
    });
  };
  reset = () => {
    this.setState({
      cnt: this.state.cnt
    });
  };
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow-sm p-4" style={{ width: "350px", borderRadius: "15px" }}>
          <div className="card-body text-center">
            <h1 className="mb-4 text-primary fw-bold">Counter</h1>
            <p className="fw-bold fs-1">{this.state.cnt}</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-success btn-lg px-4" onClick={this.plus}>
                +
              </button>
              {this.state.cnt <= 0 ? (
                <button disabled className="btn btn-danger btn-lg px-4" onClick={this.dec}>
                  -
                </button>
              ) : (
                <button className="btn btn-danger btn-lg px-4" onClick={this.dec}>
                  -
                </button>
              )}
            </div>
            <button className="btn btn-primary mt-5" onClick={this.reset}>reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Count;
