import React from 'react';

import TodoItem from '../TodoItem';

import { TaskContainer, Content } from './styles';

const TodoContainer = () => {
  return (
    <TaskContainer>
      <Content>
        <h4>Todo App v2</h4>
        <TodoItem />
        <TodoItem />
      </Content>
    </TaskContainer>
  );
}

export default TodoContainer;