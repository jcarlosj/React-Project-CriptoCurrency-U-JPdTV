import React, { Fragment } from 'react';
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
const useCriptoCurrency = () => {

    /** Interface que se mostrará (No siempre se muestra una) */
    const SelectCriptoCurrency = () => (          // Return Implicito
        <Fragment>
            <Label>Elije tu cripto</Label>
            <Select>
                <option value="BTC">Bitcoin</option>
            </Select>
        </Fragment>
    );

    return [ SelectCriptoCurrency ];     // Retorna Interfaz
}

export default useCriptoCurrency;