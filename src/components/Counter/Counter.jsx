import React from 'react';
import Controls from '../Controls/Controls';
import Statistics from '../Statistics/Statistics';

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
        <Controls
          addGoodReview={this.addGoodReview}
          addNeutralReview={this.addNeutralReview}
          addBadReview={this.addBadReview}
        />
        <h2 className="statistics">Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positiveFeedback}
        />
      </div>
    );
  }
}

export default Counter;
