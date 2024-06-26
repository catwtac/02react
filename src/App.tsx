import React, { useState } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Greetings from './components/Greetings';
import GreetingProps from './interfaces/GreetingProps';
import Counter from './components/Counter';
import TestPassFunction from './components/TestPassFunction';
import NameList from './components/Namelist';
import NameListProps from './interfaces/NameListProps';
import Post from './components/Post';
import ChatRoom from './components/ChatRoom'
import CalculTva from './components/CalculTva';
import Task from './interfaces/Task';
import ComponentInput from './components/form/ComponentInput';
import UseRefV1 from './components/UseRefV1';
import UseRefV2 from './components/UseRefV2';
import UseRefV3 from './components/UseRefV3';
import UseRefV4 from './components/UseRefV4';
import UseContextV1 from './components/UseContextV1';
import UseReducerV1 from './components/UseReducerV1'

// interface GreetingProps {
//   name:string;
//   surname:string;
// }

function App() {
  let greetObject: GreetingProps = { "name": "Plisson", "surname": "Cathy" };
  let testAlertParent = (value: string) => alert(value);


  let taskList: Task[] = [];


  taskList.push(
    {
      title: "learn react",
      descrption: "so good"
    }
  );
  taskList.push(
    { title: "learn mongo db", descrption: "wow" }
  );

  let listTask: NameListProps = { tasks: taskList }
  const [roomId, setRoomId] = useState('general');
  const [idPostState, setIdPostState] = useState("1");
  const handleChange = (value: string) => {
    setIdPostState(value)
  }

  // <Greetings {...greetObject} />
  // <TestPassFunction testAlert={(value:string)=>testAlertParent(value)}/>
  // <NameList {...listTask} />
  // <Counter />
  // <Post />
  // <CalculTva />
  //       <UseRefV1 />
  //       <UseRefV2 />
  //       <UseRefV3 />
  //       <UseRefV4 />
  //      
  // <label>
  //         Choose the chat room:{' '}
  //         <select
  //           value={roomId}
  //           onChange={e => setRoomId(e.target.value)}
  //         >
  //           <option value="general">general</option>
  //           <option value="travel">travel</option>
  //           <option value="music">music</option>
  //         </select>
  //       </label>
  /* <ChatRoom roomId={roomId} />
          <input type="text" value={idPostState} onChange={(e) => handleChange(e.target.value)} ></input>
          <Post postid={idPostState} />*/



  return (
    <div className="App">
      <header className="App-header">



        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <img src={logo} className="App-logo" alt="logo" />

      
        <UseReducerV1 />
        <UseContextV1 />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>

  );
}

export default App;
