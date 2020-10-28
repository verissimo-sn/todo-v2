import React from 'react';
import { FaRegCheckCircle, FaEdit, FaTrash } from 'react-icons/fa'

import { ItemContainer, Button } from './styles';

const TodoItem = ()  => {
  return(
    <ItemContainer>
      <Button color='#F9FBBB' >
        <FaRegCheckCircle size={40} color={'#C4C4C4'}/>
      </Button>

      <input type="text"/>

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