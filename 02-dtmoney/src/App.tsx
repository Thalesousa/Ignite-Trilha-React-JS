import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 64px;

  button{
    background: green;
  }
`
export function App() {
  return (
    <div className="App">
      <Title>
        Hello World
        <button>Salvar</button>
      </Title>
    </div>
  );
}