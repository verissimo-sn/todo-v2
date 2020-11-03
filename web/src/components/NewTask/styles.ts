import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 460px;
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
  position: relative;

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
    margin-top: 6px;
    border-radius: 10px;
    padding-left: 20px;
    outline: none;
    border: none;
  }

  .NewTask--input textarea {
    width: 100%;
    height: 120px;
    margin-top: 6px;
    border-radius: 10px;
    padding-left: 20px;
    outline: none;
    border: none;
  }

  .NewTask--input select,
  .NewTask--input option {
    width: 100%;
    max-width: 200px;
    height: 30px;
    border-radius: 5px;
    padding-left: 10px;
    margin: 0 auto;
  }

  .NewTask--button {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  .NewTask--button button {
    width: 100%;
    max-width: 120px;
    padding: 3px;
    border: none;
    outline: none;
    color: #000;
    cursor: pointer;
  }

  .NewTask--button button:first-child {
    background: #E77F7F;
  }
  .NewTask--button button:last-child {
    background: #BAFF29;
  }

  .NewTask--btn-fechar {
    position: absolute;
    top: -15px;
    right: 0;
  }

  .NewTask--btn-fechar button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
`;