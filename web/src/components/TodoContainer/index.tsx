import React, { useEffect, useState } from 'react';

import api from '../../server/api';

import TodoItem from '../TodoItem';

import { TaskContainer, Content } from './styles';

interface Task {
  id: number;
  name: string;
  // priority: number;
  // description: string;
  // done: boolean;
}

const TodoContainer = () => {
  const [task, setTask] = useState<Task[]>([]);

  useEffect(()=>{
    api.get('tasks').then(response => {
      setTask(response.data.tasks);
    })
  }, []);

  return (
    <TaskContainer>
      <Content>
        <h4 className="TodoContainer--title">Todo App v2</h4>
        <div className="TodoContainer--tasks">
          {task.map(task => (
            <TodoItem
              key={task.id} 
              name={task.name} 
              // description={task.description} 
              // priority={task.priority} 
              // done={task.done}
            />
          ))}
        </div>
        <div className="TodoContainer--completedTasks">
          <h4 className="TodoContainer--completedTasks-title">Completed Tasks</h4>
        </div>
      </Content>
    </TaskContainer>
  );
}

export default TodoContainer;