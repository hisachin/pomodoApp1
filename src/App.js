import { useEffect, useState } from "react";
import { Button } from "./component/Button/button";
import TimerText from "./component/TimerText/timerText";
import { convertToHHMMSS } from "./utils/timerHelper";

import "./styles.css";

export default function App() {
  const [startTimer, setStartTimer] = useState(2);
  const [secondsLeft, setSecondsLeft] = useState(startTimer * 60);
  const [timer, setTimer] = useState();
  const [timerState, setTimerState] = useState("stop");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const start = () => {
    setStartTimer(startTimer);
    setSecondsLeft(startTimer * 60);
    const timerId = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft - 1);
    }, 1000);
    setTimerState("start");
    setTimer(timerId);
  };

  const stop = () => {
    clearInterval(timer);
    setStartTimer(startTimer);
    setSecondsLeft(startTimer * 60);
  };

  useEffect(() => {
    if (secondsLeft == 0) {
      clearInterval(timer);
      setTimerState("stop");
    } else {
      updateTimerText();
    }
  }, [secondsLeft, timer]);

  const updateTimerText = () => {
    const { hours, minutes, seconds } = convertToHHMMSS(secondsLeft);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return (
    <div className="App">
      <h1>Pomodo App 1</h1>
      <div className="counter-text">
        <div className="counter-text-hours">
          <TimerText timerText={hours} />
        </div>
        <div className="counter-text-seperator">:</div>
        <div className="counter-text-minute">
          <TimerText timerText={minutes} />
        </div>
        <div className="counter-text-seperator">:</div>
        <div className="counter-text-second">
          <TimerText timerText={seconds} />
        </div>
      </div>
      <div className="btn-container">
        <Button text="start" type="primary" clickHandler={start} />
        <Button text="pause" type="secondary" />
        <Button text="stop" type="error" clickHandler={stop} />
      </div>
    </div>
  );
}
