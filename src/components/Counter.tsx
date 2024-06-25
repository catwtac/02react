// Counter.tsx
import React, { useState, useEffect } from 'react';
import Task from '../interfaces/Task'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  // exemple avec tack et modification des valeurs de l'objet 
  const task: Task = { "title": "learn react", "descrption": "top" };
  const [taskState, setTaskState] = useState(task);

  const handleChange = (attribut: string, value: string) => {
    setTaskState({ ...taskState, [attribut]: value })
  }
  useEffect(() => {
    console.log('Count value changed');
  }, [count]);

  //  exemple lui ne fonctionne pas car pas de useState()
  //     let count = 1;
  //     function plusOne(){
  //        count=count+1;
  //     }


  //<div><p>Count: {count}</p><button onClick={() => plusOne()}>Increment</button></div>
  return (
    <>
      <div><p>Count: {count}</p><button onClick={() => setCount(count + 1)}>Increment</button></div>
      <div>
        <input type="text" value={taskState.title}
          onChange={(e) => handleChange("title", e.target.value)}></input>

          <textarea value={taskState.descrption}
          onChange={(e) => handleChange("descrption", e.target.value)}></textarea>

        <p>Count: {count}</p><button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}


export default Counter;