import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Form from './components/Form';

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

  /** Define State */
  const [ dataForm, setDataForm ] = useState({
    currency: '',
    criptoCurrency: ''
  });

  /** Seguimiento a Cambios */
  useEffect( () => {
    /** Evita ejecucion la primera vez */
    if( dataForm .currency === '' ) return;
    console .log( 'Cotizando' );
  }, [ dataForm ] );

  return (
    <Container>
      <div>
        <Heading>Consulta Criptos</Heading>
        <Form
          setDataForm={ setDataForm }
        />
      </div>
      <div>
        <Heading>Valor Cotización</Heading>
      </div>
    </Container>
  );
}

export default App;
