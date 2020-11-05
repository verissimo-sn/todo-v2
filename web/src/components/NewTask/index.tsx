import React, { useState, useEffect, FormEvent, MouseEvent } from 'react';

import api from '../../server/api';

import { Container, Content } from './styles';

interface PriorityProps {
  id: number;
  name: string;
}

const NewTask: React.FC = () => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [priorities, setPriorities] = useState<PriorityProps[]>([]);

  useEffect(()=>{
    api.get('priorities').then(res => {
      const priorities = res.data;

      setPriorities(priorities);
    });
  },[]);

  function handleCloseForm(e: MouseEvent) {
    if(e.type === 'click') {
      setDescription('');
      setTitle('');
      setSelectedPriority('');
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('name', title);
    formData.append('description', description);
    formData.append('priority', selectedPriority);

    console.log(title, description, selectedPriority);

    // await api.post('tasks', formData);

    // alert("Task criada com sucesso");

    setDescription('');
    setTitle('');
    setSelectedPriority('');
  }

  return (
    <Container>
      <Content>
        <h4 className="NewTask--title">New Task</h4>

        <form onSubmit={handleSubmit}>
          <div className="NewTask--input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="NewTask--input">
            <label htmlFor="description">Description</label>
            <textarea 
              id="description" 
              value={description}
              maxLength={100}
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div className="NewTask--input">
            <label htmlFor="priority"></label>
            <select 
              id="priority"
              value={selectedPriority}
              onChange={e => setSelectedPriority(e.target.value)}
            >
              <option value="0">Priority</option>
                {priorities.map(priority => (
                  <option key={priority.id} value={priority.id}>{priority.id} - {priority.name}</option>
                ))}
            </select>
          </div>

          <div className="NewTask--button">
            <button onClick={handleCloseForm}>Cancelar</button>
            <button type="submit">Criar</button>
          </div>
        </form>
      </Content>
    </Container>
  )
}

export default NewTask;