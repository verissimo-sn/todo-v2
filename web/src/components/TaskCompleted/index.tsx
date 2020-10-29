import React from 'react';

import TodoItem from '../TodoItem';

import { Container } from './styles';

const TaskCompleted = () => {
  return (
    <Container>
      <h4>Completed Tasks</h4>
      <TodoItem />
    </Container>
  );
}

export default TaskCompleted;