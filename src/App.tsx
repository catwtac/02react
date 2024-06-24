import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Greetings from './components/Greetings'
import GreetingProps from './interfaces/GreetingProps';

import TestPassFunction from './components/TestPassFunction'

import NameList from './components/Namelist'
import NameListProps from './interfaces/NameListProps';

import Task from './interfaces/Task';
// interface GreetingProps {
//   name:string;
//   surname:string;
// }

function App() {
  let greetObject:GreetingProps={"name":"Plisson","surname":"Cathy"};
  let testAlertParent=(value:string)=> alert(value);


  let taskList:Task[]=[];


  taskList.push(
    {title:"learn react",descrption:"so good"}
  );
  taskList.push(
    {title:"learn mongo db",descrption:"wow"}
  );

let listTask: NameListProps={tasks:taskList}



  return (
    <div className="App">
      <header className="App-header">
        <Greetings {...greetObject} />
        <TestPassFunction testAlert={(value:string)=>testAlertParent(value)}/>
        <NameList {...listTask} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
