import React from 'react';

import styled from '@emotion/styled';       // Dependency

/** Define Style Components */
const 
    Image = styled .img `
        margin: 6rem 0 3rem 0;
        width: 12rem;
    `,
    Heading = styled .h2 `
        color: #326AC0;
        display: block;
        font-size: 1.8rem;
        font-weight: bold;
        margin: 1rem 0;
    `,
    Card = styled .div `
        text-align: center;

        .min-max {
            display: flex;
            justify-content: space-between;

            p {
                font-size: 1.3rem;
                font-weight: bold;
            }

            &::first-of-type {
                p {
                    color: red;
                }
            }
            &:last-child {
                p { 
                    color: green;
                }
            }
        }
    `,
    Price = styled .div `
        color: #000;
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
    `,
    Bar = styled .hr `
        background: #66A2FE;
        height: 6px;
        text-align: center;
        width: 100px;
    `,
    Paragraph = styled .p `
        color: gray;
        font-size: 1.2rem;
        margin: .2rem;

        span {
            font-weight: bold;
        }
    `;

const Quotation = ({ quotedValue }) => {    // Destructuring Props

    /** Valida no se a obtenido resultado */
    if( Object .keys( quotedValue ) .length === 0 ) return null;

    const IMG_URL = `https://www.cryptocompare.com/${ quotedValue .IMAGEURL }`;

    return (
        <Card>  
            <Image src={ IMG_URL } />
            <Price>{ quotedValue .PRICE }</Price>
            <Bar></Bar>
            <Paragraph>Última actualización <span>{ quotedValue .LASTUPDATE }</span></Paragraph>
            <Paragraph>Variación últimas 24 horas <span>{ quotedValue .CHANGEPCT24HOUR }%</span></Paragraph>
            <div className="min-max">
                <div>
                    <Heading>Mínimo del día</Heading>
                    <p>{ quotedValue .LOWDAY }</p>
                </div>
                <div>
                    <Heading>Máximo del día</Heading>
                    <p>{ quotedValue .HIGHDAY }</p>
                </div>
            </div>
        </Card>
     
    );
}

export default Quotation;