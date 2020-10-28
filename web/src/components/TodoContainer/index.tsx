import React from 'react';

import { Container, Content } from './styles';
import TodoItem from '../TodoItem';

const TodoContainer = () => {
  return (
    <Container>
      <Content>
        <h4>Todo App v2</h4>
        <TodoItem />
      </Content>
    </Container>
  )
}

export default TodoContainer;