import clsx from 'clsx';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { StatsLabel } from 'components/statistics/Statistics';

const Button = ({ variant, text, handle }) => {
  <button type="button" onClick={handle} className={clsx(css[variant])}>
    {text}
  </button>;
};

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StatsLabel variant="label">
      {options.map((element, index) => (
        <Button
          key={'i' + index}
          label={element}
          action={onLeaveFeedback[index]}
        ></Button>
      ))}{' '}
    </StatsLabel>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  neutral: PropTypes.array,
};

Button.propTypes = {
  label: PropTypes.string,
  action: PropTypes.func,
};
