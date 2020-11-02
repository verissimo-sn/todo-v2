import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 800px;
  height: 900px;
  margin-top: 50px;
  padding: 60px 30px;
  border-radius: 30px;
  background-image: linear-gradient(to right, #FF512F, #DD2476);
  /* background: #C2E7DA; */
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .TodoContainer--title {
    font-size: 40px;
    font-weight: bold;
    color: #1A1B41;
    margin-bottom: 70px;
  }

  .TodoContainer--tasks,
  .TodoContainer--completedTasks {
    width: 100%;
    max-height: 350px;
    height: 100%;
    position: relative;

  }

  .TodoContainer--completedTasks {
    margin-bottom: 0 ;

    .TodoContainer--completedTasks-title {
      color: #1A1B41;
      font-size: 30px;
      text-align: center;
      margin-top: 50px;
      margin-bottom: 50px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255, 255, 255 , 0.5);
    }
  }

  .TodoContainer--add-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #fff;
    background: #BAFF29;
    outline: none;
    cursor: pointer;

    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
