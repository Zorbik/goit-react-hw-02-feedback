import { Component } from 'react';
import { Box } from './components/Box';
import { Statistics } from './components/Statistics/Statistics';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Section } from './components/Section/Section';
import { Notification } from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = e => {
    const stateOption = e.target.textContent.toLowerCase();

    this.setState(prevState => ({
      [stateOption]: prevState[stateOption] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((sum, current) => sum + current, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return `${positiveFeedbackPercentage}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Box
        boxShadow="normal"
        mt={6}
        mx="auto"
        width="px"
        p={5}
        borderRadius="normal"
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onHandleClick}
          />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics:">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Box>
    );
  }
}

export default App;
