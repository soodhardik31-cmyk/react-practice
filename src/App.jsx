import './App.css'
//import './index.css'
import StudentList from "./StudentList.jsx";
import Counter from "./Counter.jsx";
import UserProfile from './userProfile.jsx';
import Lottery from './Lottery.jsx';
import Ticket from './Ticket';

function App() {
  return (
    <>
      <Lottery n={3} />
    </>
  )
}

export default App
