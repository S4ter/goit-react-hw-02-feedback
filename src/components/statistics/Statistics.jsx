import clsx from 'clsx';
import css from './Statistics.module.css';

export const StatsList = ({ variant, children }) => {
  return <ul className={clsx(css[variant])}>{children} </ul>;
};
export const StatsItem = ({ variant, children }) => {
  return <li className={clsx(css[variant])}>{children} </li>;
};
export const StatsLabel = ({ variant, children }) => {
  return <li className={clsx(css[variant])}>{children} </li>;
};
