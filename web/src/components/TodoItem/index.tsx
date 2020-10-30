import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'

import { ItemContainer, Button } from './styles';

const TodoItem = ()  => {
  return(
    <ItemContainer>
      <div className="task">
        <h4>My Task</h4>
      </div>

      <Button color = '#9969D4'>
        <FaEdit size={40} color={'#C4C4C4'}/>
      </Button>

      <Button color = '#F32F2F'>
        <FaTrash size={40} color={'#C4C4C4'}/>
      </Button>

    </ItemContainer>
  );
}

export default TodoItem;