import Card from "../UI/Card";
import classes from "./CourseGoalItem.module.css";

const CourseGoalItem = (props) => {
  const deleteGoal = () => {
    props.deleteItem(props.id);
  };

  return (
    <Card className={classes["goal-list"]}>
      <li onClick={deleteGoal}>{props.children}</li>
    </Card>
  );
};

export default CourseGoalItem;
