import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return Object.keys(options).map(key => {
    return (
      <Button onClick={onLeaveFeedback} key={key} type="button">
        {firstLetterToUpperCase(key)}
      </Button>
    );
  });
}

function firstLetterToUpperCase(word) {
  const newWord = word;
  return newWord[0].toUpperCase() + newWord.slice(1);
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
