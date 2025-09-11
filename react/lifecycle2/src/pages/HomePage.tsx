import { Component } from "react";

interface IProps {}

interface IState {
  counter: number;
}

export default class HomePage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      counter: 0,
    };

    console.log("constructor");
  }

  componentDidMount(): void {
    console.log("componentDidMount");
  }

  componentDidUpdate(): void {
    console.log("componentDidUpdate");
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("renered");
    return (
      <div>
        <div>this is counter {this.state.counter}</div>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment
        </button>
      </div>
    );
  }
}
