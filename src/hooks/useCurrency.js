import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const 
    Label = styled .label `
        color: #326AC0;
        display: block;
        font-size: 2rem;
        font-weight: bold;
        margin: 1rem 0;
    `,
    Select = styled .select `
        background-color: lightcyan;
        border: 1px solid #326AC0;
        border-radius: 10px;
        display: block;
        font-size: 1.2rem;
        padding: .5rem;
        width: 100%;
        -webkit-appearance: none;
    `;

/** Hook */
const useCurrency = ( label, initialState, options ) => {

    /** Define State */
    const [ state, setState ] = useState( initialState );

    /** Interface que se mostrará (No siempre se muestra una) */
    const SelectCurrency = () => (          // Return Implicito
        <Fragment>
            <Label>{ label }</Label>
            <Select
                onChange={ event => setState( event .target .value ) }      /** Actualiza el State */
                value={ state }                                             /** Asigna Valor al Select */
            >
                <option value="">Seleccione...</option>
                { options .map( option => (     // Return implicito
                    <option 
                        key={ option .prefix } 
                        value={ option .prefix }
                    >{ option .name }</option>
                ))}
            </Select>
        </Fragment>
    );

    return [ state, setState, SelectCurrency ];     // Retorna State del Hook e Interfaz
}

export default useCurrency;