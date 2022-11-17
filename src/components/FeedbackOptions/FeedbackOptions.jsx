import { Button } from './FeedbackOptions.styled';

export function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;
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
