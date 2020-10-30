import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'

import { ItemContainer, Button } from './styles';

interface Task {
  name: string;
}

const TodoItem: React.FC<Task> = ({ name })  => {
  return(
    <ItemContainer>
      <div className="ItemContainer--task">
        <h4>{name}</h4>
      </div>

      <Button color='#9969D4'>
        <FaEdit size={40} color={'#C4C4C4'}/>
      </Button>

      <Button color='#F32F2F'>
        <FaTrash size={40} color={'#C4C4C4'}/>
      </Button>
    </ItemContainer>
  );
}

export default TodoItem;