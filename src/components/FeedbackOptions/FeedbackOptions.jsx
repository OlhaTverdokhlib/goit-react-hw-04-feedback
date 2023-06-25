import React from 'react';
import PropTypes from 'prop-types';
import feedbackOptionsStyles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((item, index) => {
        return (
            
            <button className={feedbackOptionsStyles.btn }
            key={index}
            type="button"
            onClick={() => onLeaveFeedback(item) }
          >
                {item}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
