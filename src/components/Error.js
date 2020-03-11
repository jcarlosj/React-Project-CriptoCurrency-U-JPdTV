import React from 'react';
import styled from '@emotion/styled';

/** Define Style Components */
const SCError = styled .p `
    background-color: orange;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: .5rem 0;
    -webkit-transition: background-color .3s ease;
    transition: background-color .3s ease;
    width: 100%;
    text-align: center;
`;

const Error = ({ message }) => {       // Destructuring Props
    return (
        <SCError>{ message }</SCError>
    );
}

export default Error;