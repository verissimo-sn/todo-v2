import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

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

  function handleInputTitle(e: ChangeEvent<HTMLInputElement>) {
    const title = e.target.value;

    setTitle(title);
  }

  function handleTextareaDescription(e: ChangeEvent<HTMLTextAreaElement>) {
    const description = e.target.value;

    setDescription(description);
  }

  function handleSelectedPriority(e: ChangeEvent<HTMLSelectElement>) {
    const selectedPriority = e.target.value;

    setSelectedPriority(selectedPriority);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData();

    const appendName = formData.append('name', title);
    const appendDescription = formData.append('description', description);
    const appendPriority = formData.append('priority', String(selectedPriority));

    console.log(appendName, appendDescription, appendPriority);
    console.log(title, description, selectedPriority);

    // await api.post('tasks', data);

    // alert("Task criada com sucesso");
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
              name="title"
              value={title}
              onChange={handleInputTitle}
            />
          </div>

          <div className="NewTask--input">
            <label htmlFor="description">Description</label>
            <textarea 
              id="description" 
              value={description}
              maxLength={100}
              onChange={handleTextareaDescription}
            />
          </div>

          <div className="NewTask--input">
            <label htmlFor="priority"></label>
            <select 
              name="priority" 
              id="priority"
              value={selectedPriority}
              onChange={handleSelectedPriority}
            >
              <option value="0">Priority</option>
                {priorities.map(priority => (
                  <option key={priority.id} value={priority.id}>{priority.id} - {priority.name}</option>
                ))}
            </select>
          </div>

          <div className="NewTask--button">
            <button>Cancelar</button>
            <button type="submit">Criar</button>
          </div>
        </form>
      </Content>
    </Container>
  )
}

export default NewTask;