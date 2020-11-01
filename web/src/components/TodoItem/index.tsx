import React, { useState, MouseEvent } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import api from '../../server/api';

import { ItemContainer, Button, InfoContainer } from './styles';

interface Task {
  name: string;
  description: string;
  id: number;
}

const TodoItem: React.FC<Task> = ({ name, description, id })  => {
  const [showInfo, setShowInfo] = useState<string>('none');

  function handleClick(e: MouseEvent) {
    if(e.type === 'click') {
      if(showInfo === 'flex') {
        return setShowInfo('none');
      }
  
      return setShowInfo('flex');
    }    
  }

  function handleDeleteTask(e: MouseEvent) {
    if(e.type === 'click') {
      api.delete(`tasks/${id}`);
      alert(`Task ${id} successfully deleted`);
    }
  }
  return(
    <>
      <ItemContainer>
        <div className="ItemContainer--task" onClick={handleClick}>
          <h4>{name}</h4>
        </div>

        <Button color='#9969D4'>
          <FaEdit size={40} color={'#C4C4C4'}/>
        </Button>

        <Button color='#F32F2F' onClick={handleDeleteTask}>
          <FaTrash size={40} color={'#C4C4C4'}/>
        </Button>
        <InfoContainer itemProp={showInfo}>
          <h4>{description}</h4>
          <button>Done</button>
        </InfoContainer>
      </ItemContainer>
    </>
  );
}

export default TodoItem;