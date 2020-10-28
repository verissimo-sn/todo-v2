import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;

  input {
    width: 100%;
    max-width: 460px;
    height: 100%;
    padding: 20px;
    border-radius: 10px;
    border: none;
    outline-color: #C6B2B2;

    font-size: 20px;
    font-weight: bold;
    color: #C6B2B2;

    /* background-image: linear-gradient(to right, #FFF, #DD1818); */
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;
  border-radius: 10px;
  background: ${props => props.color};
  cursor: pointer;
`;
