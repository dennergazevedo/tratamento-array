import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Text = styled.h3`
  font-size: 1rem;
  color: #333;
  font-variant: small-caps;
  margin-bottom: 10px;
  font-weight: normal;

  b{
    font-weight: bold;
  }
`;

export const InputSize = styled.input`
  display: flex;
  border-radius: 5px;
  width: 200px;
  height: 30px;
  border: 1px solid #333;
  padding: 0px 20px;
`;

export const Submit = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 30px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  border: none;
  outline: 0;
  margin: 20px 0px;
`;