import React from 'react';
import styled from '@emotion/styled';

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
    return (
        <form>
            <Button
                type="button"
            >Calcular</Button>
        </form>
    );
}

export default Form;