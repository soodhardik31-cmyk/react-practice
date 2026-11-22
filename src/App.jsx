import './App.css'
import TodoList from "./TodoList.jsx";
import StudentList from "./StudentList.jsx";
import Counter from "./Counter.jsx";
import UserProfile from './userProfile.jsx';
import Lottery from './Lottery.jsx';
import TicketNum from './TicketNum.jsx';

function App() {
  return (
    <>
      <TicketNum num={5}/>
      <TicketNum num={4}/>
      <TicketNum num={3}/>
    </>
  )
}

export default App
