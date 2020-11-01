import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;
  margin-bottom: 21px;
  position: relative;

  .ItemContainer--task {
    width: 100%;
    max-width: 520px;
    height: 100%;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #C6B2B2;
    cursor: pointer;

    h4 {
      font-size: 20px;
      font-weight: bold;
      color: #1A1B41;

      /* background-image: linear-gradient(to right, #FFF, #DD1818); */
    }
  }

`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 60px;
  height: 60px;
  margin-left: 8px;
  border-radius: 10px;
  background: ${props => props.color};
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  display: ${props => props.itemProp};
  flex-direction: column;

  width: 100%;
  max-width: 520px;
  max-height: 200px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid;


  position: absolute;
  left: 0;
  top: 65px;
  z-index: 1;

  h4 {
    font-weight: bold;
    columns: #6290C3;
    padding: 30px 20px;
    margin-bottom: 40px;
  }

  button {
    position: absolute;
    right: 10px;
    bottom: 5px;

    height: 30px;
    width: 100px;
    padding: 0 10px;
    border-radius: 3px;
    border: none;
    color: #fff;
    background: #FFA686;
    cursor: pointer;

    :hover {
      background: #BAFF29;
      border: 1px solid #fff;
      color: #000;
      transition: all ease .3s;
    }
  }
`;
