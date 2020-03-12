import React, { useState, useEffect } from 'react';

/** Dependencies */
import axios from 'axios';           
import styled from '@emotion/styled';

/** Components */
import Form from './components/Form';          
import Quotation from './components/Quotation';
import Spinner from './components/Spinner';
import Default from './components/Default';

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
    }),
    [ quotedValue, setQuotedValue ] = useState({}),   // Valor cotizado a traves del API
    [ loadComponent, setLoadComponent ] = useState( '' );  // Controla Carga del Spinner

  /** Hook: Seguimiento a cambios */
  useEffect( () => {

    /** Se recomienda usar funciones dentro de este Hook */
    const quoteCryptoCurrencyValue = async () => {
        
      if( dataForm .currency === '' ) return;   // Evita ejecucion la primera vez 
      
      console .log( 'Cotizando...' );
      
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ dataForm .criptoCurrency }&tsyms=${ dataForm .currency }`,
            response = await axios .get( url );

      console .log( 'quoteValue', response );

      setLoadComponent( 'spinner' );        // Cambia el estado del State (Muestra el Spinner)

      setTimeout( () => {            // Temporizador para ocultar el Spinner
        setLoadComponent( 'quotation' );     // Cambia el estado del State (Elimina el Spinner)
        setQuotedValue( response .data .DISPLAY[ dataForm .criptoCurrency ][ dataForm .currency ] );    // Asigna valor al State: Acceso Dinámico a el objeto de la API
      }, 3000 );                     // 3s

    }
    quoteCryptoCurrencyValue();
    
  }, [ dataForm ] );

  /** Carga Condicional de Componentes */
  const component = ( loadComponent === 'spinner' ) 
                        ? <Spinner />
                        : ( loadComponent === 'quotation' ) 
                          ? <Quotation 
                              quotedValue={ quotedValue }
                            />
                          : <Default />

  return (
    <Container>
      <div>
        <Heading>Consulta Criptos</Heading>
        <Form
          setDataForm={ setDataForm }
        />
      </div>
      <div>
        { component }
      </div>
    </Container>
  );
}

export default App;
