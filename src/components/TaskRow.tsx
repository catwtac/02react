import React from 'react';

const TaskRow: React.FC<any> = ({ index, task }) => {
    return (<div>
                        <li key={index}>{task.title}</li>
                        <li key={index}>{task.description}</li>
{/* 
                        <li key={index}><button onClick={modify(task.id)}>modify</button></li>
                        <li key={index}><button onClick={modify(task.id)}>delete</button></li> */}


            </div>

    )
}

export default TaskRow;