import React, { useState, useEffect } from 'react';

/** Dependencies */
import axios from 'axios';           
import styled from '@emotion/styled';

/** Components */
import Form from './components/Form';          
import Quotation from './components/Quotation';

/** Define Style Components */
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
  const 
    [ dataForm, setDataForm ] = useState({
      currency: '',
      criptoCurrency: ''
    });

  /** Hook: Seguimiento a cambios */
  useEffect( () => {

    /** Se recomienda usar funciones dentro de este Hook */
    const quoteCryptoCurrencyValue = async () => {
        
      if( dataForm .currency === '' ) return;   // Evita ejecucion la primera vez 
      
      console .log( 'Cotizando...' );
      
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ dataForm .criptoCurrency }&tsyms=${ dataForm .currency }`,
            response = await axios .get( url );
      
      console .group( 'quoteValue', response );
      console .log( response .data .DISPLAY[ dataForm .criptoCurrency ][ dataForm .currency ] );    // Acceso Dinámico a el objeto de la API
      console .groupEnd();

    }
    quoteCryptoCurrencyValue();

    
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
        <Quotation />
      </div>
    </Container>
  );
}

export default App;
