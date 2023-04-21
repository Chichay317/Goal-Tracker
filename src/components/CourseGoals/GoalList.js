import classes from "../CourseGoals/GoalList.module.css";
import CourseGoalItem from "./CourseGoalItem";

const GoalList = (props) => {
  return (
    <div className={classes["goal-item"]}>
      <ul>
        {props.goals.map((goal) => (
          <CourseGoalItem
            key={goal.id}
            id={goal.id}
            deleteItem={props.onDelete}
          >
            {goal.goalName}
          </CourseGoalItem>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;
