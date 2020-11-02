import React, { useEffect, useState, MouseEvent } from 'react';
import { FiPlus } from 'react-icons/fi';

import api from '../../server/api';

import TodoItem from '../TodoItem';
import NewTask from '../NewTask';

import { TaskContainer, Content } from './styles';

interface Task {
  id: number;
  name: string;
  // priority: number;
  description: string;
  // done: boolean;
}

const TodoContainer: React.FC= () => {
  const [task, setTask] = useState<Task[]>([]);
  const [showForm, setShowForm] = useState<boolean>(true);

  useEffect(()=>{
    api.get('tasks').then(response => {
      setTask(response.data.tasks);
    })
  }, [task]);

  function hamdleShowForm(e: MouseEvent) {
    if(e.type === 'click') {
      // return setShowForm(!showForm);
    }
  }

  return (
    <TaskContainer>
      <Content>
        <h4 className="TodoContainer--title">Todo App v2</h4>
        <div className="TodoContainer--tasks">
          {task.map(task => (
            <TodoItem
              key={task.id} 
              id={task.id}
              name={task.name} 
              description={task.description} 
              // priority={task.priority} 
              // done={task.done}
            />
          ))}

          {showForm &&  
            <NewTask /> 
          }

          <button className="TodoContainer--add-button" onClick={hamdleShowForm}>
            <FiPlus size={40} color={'#fff'}/>
          </button>
        </div>
        <div className="TodoContainer--completedTasks">
          <h4 className="TodoContainer--completedTasks-title">Completed Tasks</h4>
        </div>
      </Content>
    </TaskContainer>
  );
}

export default TodoContainer;