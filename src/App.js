import { useState } from "react";
import "./App.css";
import GoalInput from "./components/CourseGoals/GoalInput";
import GoalList from "./components/CourseGoals/GoalList";

function App() {
  const [goals, setGoals] = useState([
    { goalName: "Pray Constantly💕!", id: "g1" },
  ]);

  const addGoal = (goalVal) => {
    setGoals((prevGoal) => {
      const updatedGoals = [...prevGoal];
      updatedGoals.unshift({
        goalName: goalVal,
        id: Math.random().toString(),
      });
      return updatedGoals;
    });
  };

  const onDeleteGoal = (goalId) => {
    setGoals((prevGoal) => {
      const updatedGoals = prevGoal.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  return (
    <div>
      <GoalInput onAddGoal={addGoal} />
      <GoalList goals={goals} onDelete={onDeleteGoal} />
    </div>
  );
}

export default App;
