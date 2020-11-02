import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  height: 450px;
  padding: 30px 20px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;

  background: #479590;
  z-index: 2;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

  .NewTask--title {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    color: #1A1B41;
    margin-bottom: 20px;
  }

  .NewTask--input {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
  }

  .NewTask--input input[type="text"] {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    padding-left: 20px;
    outline: none;
    border: none;
  }

  .NewTask--input textarea {
    width: 100%;
    height: 120px;
    border-radius: 10px;
    padding-left: 20px;
    outline: none;
    border: none;
  }
`;