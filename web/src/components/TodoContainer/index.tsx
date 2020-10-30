import React from 'react';

import TodoItem from '../TodoItem';

import { TaskContainer, Content } from './styles';

const TodoContainer = () => {
  return (
    <TaskContainer>
      <Content>
        <h4 className="TodoContainer--title">Todo App v2</h4>
        <div className="TodoContainer--tasks">
          <TodoItem />
          <TodoItem />
        </div>
        <div className="TodoContainer--completedTasks">
          <h4 className="TodoContainer--completedTasks-title">Completed Tasks</h4>
          <TodoItem />
          <TodoItem />
        </div>
      </Content>
    </TaskContainer>
  );
}

export default TodoContainer;