import './App.css'
import TodoList from "./TodoList.jsx";
import StudentList from "./StudentList.jsx";
import Counter from "./Counter.jsx";
import UserProfile from './userProfile.jsx';
import Lottery from './Lottery.jsx';
import Ticket from './Ticket';

function App() {
  return (
    <>
      <Ticket ticket={[0, 1, 2]}/>
    </>
  )
}

export default App
