
import AppName from "./component/AppName";
import Addtodo from "./component/Addtodo";
import Todoitem1 from "./component/Todoitem1.jsx";
import Todoitem2 from "./component/Todoitem2.jsx";
import './App.css';


function App() {
 
  return (
    <center className='todo-container'>   <AppName/>
      <Addtodo />  
      <div className='text-container'>
        <Todoitem1 />
      <Todoitem2 />
      </div>
   
      

         


    </center>);
  
  
}

export default App;

