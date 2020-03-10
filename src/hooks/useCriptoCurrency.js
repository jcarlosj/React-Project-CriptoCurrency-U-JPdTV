import React, { Fragment } from 'react';

/** Hook */
const useCriptoCurrency = () => {

    /** Interface que se mostrará (No siempre se muestra una) */
    const SelectCriptoCurrency = () => (          // Return Implicito
        <Fragment>
            <label>Elije tu cripto</label>
            <select>
                <option value="BTC">Bitcoin</option>
            </select>
        </Fragment>
    );

    return [ SelectCriptoCurrency ];     // Retorna Interfaz
}

export default useCriptoCurrency;