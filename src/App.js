import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import TaskComponent from './components/TaskComponent';


function App() {

  return (
    <div className="App">
      <div className='sidebar'>
       <SideBar />
      </div>
      <Header />
      <TaskComponent />
    </div>
  );
}

export default App;
