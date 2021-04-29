import React from "react";

class Counter extends React.Component {
  state = {
    title: "Loading ...",
    count: 0,
  };
  componentDidMount() {
    // console.log("counter mounter");
    //for ajax calls
    setTimeout(() => {
      this.setState({
        ...this.state,
        title: "Counter Page",
      });
    }, 2000);

    document.body.style.backgroundColor = "#dfe4ea";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = "white";
  }

  onPlus = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  };
  onReset = () => {
    this.setState({
      ...this.state,
      count: 0,
    });
  };

  onMinus = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count - 1,
      };
    });
  };

  render() {
    const { title, count } = this.state;
    return (
      <div className="row">
        {/* <h2>{this.state.title}</h2> */}
        <h2 className="text-muted">
          {title} - {count}
        </h2>
        <div className="col-2 d-flex justify-content-between">
          <button className="btn btn-info btn-lg" onClick={this.onPlus}>
            +
          </button>
          <button className="btn btn-warning btn-lg" onClick={this.onReset}>
            0
          </button>
          <button className="btn btn-danger btn-lg" onClick={this.onMinus}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
