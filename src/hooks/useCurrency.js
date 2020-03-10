import React, { Fragment, useState } from 'react';

const useCurrency = () => {

    /** Define State */
    const [ state, setState ] = useState( '' );

    /** Interface que se mostrará (No siempre se muestra) */
    const SelectCurrency = () => (          // Return Implicito
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value="COP">Peso Colombiano</option>
            </select>
        </Fragment>
    );

    return [ state, setState, SelectCurrency ];     // Retorna State del Hook e Interfaz
}

export default useCurrency;