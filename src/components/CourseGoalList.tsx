import { ReactNode } from "react";
import {type CourseGoal as CourseGoalPropsTypes } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

interface CourseGoalListProps {
    goals: CourseGoalPropsTypes[]; 
    onDeleteGoal: (id: number) => void
}

export default function CourseGoalList({ goals, onDeleteGoal}: CourseGoalListProps) {
if(goals.length === 0) {
     return (
     <InfoBox mode="hint">No goals found. Maybe add one?</InfoBox>
)
}

let warningBox: ReactNode
if (goals.length >= 4) {warningBox = <InfoBox mode="warning" severity="high">To much goals</InfoBox>}

  return (  
    <> 
    {warningBox}
    <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>  
      </>    
  );
}