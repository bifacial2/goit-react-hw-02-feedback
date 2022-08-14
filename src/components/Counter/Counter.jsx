import React from 'react';

class Counter extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };
  // static.propTypes={
  //     ////
  // }
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
    positiveFeedback: this.props.positiveFeedback,
  };
  addGoodReview = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  addNeutralReview = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  addBadReview = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positiveFeedback: Math.round((100 / prevState.total) * prevState.good),
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
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.state.total}</li>
          <li>Positive Feedback: {this.state.positiveFeedback}%</li>
        </ul>
      </div>
    );
  }
}

export default Counter;
