import React from 'react';

class Counter extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // static.propTypes={
  //     ////
  // }
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };
  addGoodReview = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  addNeutralReview = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  addBadReview = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1 className="title">Please live feedback</h1>
        <div>
          <button className="good" type="button" onClick={this.addGoodReview}>
            Good
          </button>
          <button
            className="neutral"
            type="button"
            onClick={this.addNeutralReview}
          >
            Neutral
          </button>
          <button className="bad" type="button" onClick={this.addBadReview}>
            Bad
          </button>
        </div>
        <h2 className="statistics">Statistics</h2>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
        </ul>
      </div>
    );
  }
}

export default Counter;
