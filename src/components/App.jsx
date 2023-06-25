import React, { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import appStyles from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedback = item => {
    if (item === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (item === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (item === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (countTotalFeedback() || 1)) * 100);
  };

  return (
    <div className={appStyles.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={countFeedback}
        />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistic">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default App;
