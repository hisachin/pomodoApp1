import "./timerText.css";

export default function TimerText(props) {
  const { timerText } = props;
  return <div className="timer-text">{timerText ? timerText : 0}</div>;
}
