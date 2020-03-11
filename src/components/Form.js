import React, { useState, useEffect } from 'react';

import axios from 'axios';                                  // Dependencia
import styled from '@emotion/styled';                       // Dependencia
import Error from './Error';                                // Style Component

import useCurrency from '../hooks/useCurrency';             // Hook Personalizado
import useCriptoCurrency from '../hooks/useCriptoCurrency'; // Hook Personalizado

/** Define Style Components */
const
    Button = styled .button `
        background-color: #66A2FE;
        border: none;
        border-radius: 10px;
        color: white;
        font-size: 20px;
        font-weight: bold;
        margin-top: 20px;
        padding: 10px;
        transition: background-color .3s ease;
        width: 100%;

        &:hover {
            background-color: #326AC0;
            cursor: pointer;
        }
    `;

const Form = () => {

    /** Define available currencies (Podria ser una consulta a un API) */
    const 
        CURRENCIES = [
            { name: 'Peso Colombiano', prefix: 'COP' },
            { name: 'Peso Mexicano', prefix: 'MXN' },
            { name: 'Peso Argentino', prefix: 'ARS' },
            { name: 'Bolivar Soberano', prefix: 'VES' },
            { name: 'Dólar Americano', prefix: 'USD' },
            { name: 'Dólar Canadiense', prefix: 'CAD' },
            { name: 'Euro', prefix: 'EUR' },
            { name: 'Libra Esterlina', prefix: 'GBP' }
        ];

    /** Define State */
    const 
        [ ApiData, setApiData ] = useState([]),
        [ error, setError ] = useState( false ),
        /** Implementacion del Hooks personalizados */
        [ currency, setCurrency, SelectCurrency ] = useCurrency( 'Elije tu moneda', '', CURRENCIES ),      // Destructura State del Hook e Interfaz (Los Nombres con que se destructura pueden ser diferentes pero el orden importa al implementarlos)
        [ criptoCurrency, setCriptoCurrency, SelectCriptoCurrency ] = useCriptoCurrency( 'Elije tu criptomoneda', '', ApiData );      // Destructura State del Hook e Interfaz (Los Nombres con que se destructura pueden ser diferentes pero el orden importa al implementarlos)     

    /** Hooks: Seguimiento */
    useEffect( () => {
        
        /** Ejecutar llamado a la API */
        const getDataApi = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`,
                  response = await axios .get( url );
            
            console .log( 'Data API', response );
            setApiData( response .data .Data );     // Asigna datos de la API al State
        }
        getDataApi();

    }, [] );

    /** Methods */
    const submitQuoteCurrency = event => {
        event .preventDefault();

        /** Valida si los campos estan vacios */
        if( currency === '' || criptoCurrency === '' ) {
            setError( true );
            return;
        }
        setError( false );

        /** Pasar datos al componente padre */
    }

    return (
        <form
            onSubmit={ submitQuoteCurrency }
        >
            { error
                ?   <Error message="Todos los campos son requeridos" />
                :   null
            }
            <SelectCurrency />
            <SelectCriptoCurrency />
            <Button
                type="submit"
            >Calcular</Button>
        </form>
    );
}

export default Form;