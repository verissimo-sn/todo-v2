import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 800px;
  height: 900px;
  margin-top: 50px;
  padding: 60px 70px;
  border-radius: 30px;
  background: #C2E7DA;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 100%;

  background: #fff;

  h4 {
    font-size: 40px;
    font-weight: bold;
    color: #1A1B41;
    margin-bottom: 70px;
  }
`;
