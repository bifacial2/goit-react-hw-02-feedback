import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.feedback}>
      <h1 className={style.feedback__title}>Please leave feedback</h1>
      <div className={style.feedback__buttons}>
        {options.map(option => {
          return (
            <button
              key={option}
              type="button"
              name={option}
              onClick={() => onLeaveFeedback(option)}
              className={style.feedback_buttons}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;
