import { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./GoalInput.module.css";

const GoalInput = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [isValue, setIsValue] = useState(true);
  const enteredGoal = useRef();

  const inputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setIsValue(event.target.value);
  };

  const submitGoal = (event) => {
    event.preventDefault();

    const enteredGoalValue = enteredGoal.current.value;
    if (enteredGoalValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredGoalValue);

    enteredGoal.current.value = "";
  };

  return (
    <Card className={classes.forminput}>
      <form onSubmit={submitGoal}>
        <div
          className={`${isValue && classes.formcontrol} ${
            !isValid && classes.invalid
          }`}
        >
          <label htmlFor="text">My Goals</label>
          <input
            id="text"
            type="text"
            ref={enteredGoal}
            onChange={inputChangeHandler}
          ></input>
        </div>
      </form>
      <Button type="submit" onClick={submitGoal}>
        Add Goal
      </Button>
    </Card>
  );
};

export default GoalInput;
