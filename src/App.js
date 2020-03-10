import React from 'react';
import styled from '@emotion/styled';

const 
  Heading = styled .h1 `
    color: #000;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 6rem 0 3rem 0;
    text-align: left;

    &::after {
      background: #66A2FE;
      display: block;
      content: '';
      height: 6px;
      width: 100px;
    }
  `,
  Container = styled .div `
    margin: 0 auto;
    max-width: 900px;
    
    @media ( min-width: 992px ) {
      display: grid;
      grid-template-columns: repeat( 2, 1fr );
      column-gap: 2rem;
    }
  `;

function App() {
  return (
    <Container>
      <div>
        <Heading>Consulta Criptos</Heading>
      </div>
      <div>
        <Heading>Valor Cotización</Heading>
      </div>
    </Container>
  );
}

export default App;
