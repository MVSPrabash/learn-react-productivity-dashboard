import Widget from './components/Widget.jsx'
import Clock from './components/Clock.jsx'
import Notes from './components/Notes.jsx'
import Todo from './components/Todo.jsx'
import Pomodoro from './components/Pomodoro.jsx'

export default function App() {
  return (
    <>
      <div className="dashboard">
        <Widget><Clock /></Widget>
        <Widget><Notes /></Widget>
        <Widget><Todo /></Widget>
        <Widget><Pomodoro /></Widget>
      </div>
    </>
  );
}
