import React from 'react';

import { Container, Content } from './styles';

const NewTask: React.FC = () => {
  return (
    <Container>
      <Content>
        <h4 className="NewTask--title">New Task</h4>
        <form >
          <div className="NewTask--input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              // onChange={}
            />
          </div>

          <div className="NewTask--input">
            <label htmlFor="description">Description</label>
            <textarea 
              id="description" 
              value="{description}"
              maxLength={100}
              // onChange={}
            />
          </div>

          <div className="NewTask--input">
            <label htmlFor="priority"></label>
            <select 
              name="priority" 
              id="priority"
              // value={selectedPriority}
              //onChange={handleSelectedPriority}
            >
              <option value="0">Prioridade</option>
              <option value="1">Normal</option>
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