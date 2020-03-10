import React from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';         // Hook Personalizado

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
    const CURRENCIES = [
        { name: 'Peso Colombiano', prefix: 'COP' },
        { name: 'Peso Mexicano', prefix: 'MXN' },
        { name: 'Peso Argentino', prefix: 'ARS' },
        { name: 'Bolivar Soberano', prefix: 'VES' },
        { name: 'Dólar Americano', prefix: 'USD' },
        { name: 'Dólar Canadiense', prefix: 'CAD' },
        { name: 'Euro', prefix: 'EUR' },
        { name: 'Libra Esterlina', prefix: 'GBP' }
    ];

    /** Implementacion del Hook personalizado */
    const [ state, setState, SelectCurrency ] = useCurrency( 'Elije tu moneda', '', CURRENCIES );      // Destructura State del Hook e Interfaz (Los Nombres con que se destructura pueden ser diferentes pero el orden importa al implementarlos)

    return (
        <form>
            <SelectCurrency />
            <Button
                type="button"
            >Calcular</Button>
        </form>
    );
}

export default Form;