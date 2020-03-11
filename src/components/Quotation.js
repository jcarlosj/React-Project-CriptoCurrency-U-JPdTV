import React from 'react';

const Quotation = ({ quotedValue }) => {    // Destructuring Props

    /** Valida no se a obtenido resultado */
    if( Object .keys( quotedValue ) .length === 0 ) return null;

    const IMG_URL = `https://www.cryptocompare.com/${ quotedValue .IMAGEURL }`;

    return (
        <div>
            
            <img src={ IMG_URL } />
            <h2>{ quotedValue .PRICE }</h2>
            <p>Última actualización { quotedValue .LASTUPDATE }</p>
            <p>Variación últimas 24 horas { quotedValue .CHANGEPCT24HOUR }</p>
            <div>
                <h3>Mínimo del día</h3>
                <p>{ quotedValue .LOWDAY }</p>
            </div>
            <div>
                <h3>Máximo del día</h3>
                <p>{ quotedValue .HIGHDAY }</p>
            </div>
        </div>
    );
}

export default Quotation;