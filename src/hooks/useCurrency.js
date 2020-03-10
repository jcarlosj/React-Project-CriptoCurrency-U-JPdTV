import React, { Fragment, useState } from 'react';

const useCurrency = ( label, initialState, options ) => {

    /** Define State */
    const [ state, setState ] = useState( initialState );

    /** Interface que se mostrará (No siempre se muestra) */
    const SelectCurrency = () => (          // Return Implicito
        <Fragment>
            <label>{ label }</label>
            <select
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
            </select>
        </Fragment>
    );

    return [ state, setState, SelectCurrency ];     // Retorna State del Hook e Interfaz
}

export default useCurrency;