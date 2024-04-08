import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export interface CourseGoal {id: number, title: string, description: string}

export default function App() {
const [ goals, setGoals] = useState<CourseGoal[]>([])

function handleAddGoal(goal: string, summary: string) {
  setGoals((prevGoals) => {
   const newGoal: CourseGoal = {
    id: Math.random(), 
    title: goal, 
    description: summary}
    return [...prevGoals, newGoal];
  })
}

function handleDeleteGoal(id: number) {
  setGoals((prevGoals) => 
   prevGoals.filter(goal => goal.id !== id)
  )
}

  return ( 
  <main>
    <Header image={{src: goalsImg, alt: "A list of goals" }}>Your Course Goals</Header>
   <NewGoal onAddGoal={handleAddGoal}/>
    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
  </main>)
 
}
