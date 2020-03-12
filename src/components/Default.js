import React from 'react';
import styled from '@emotion/styled';                   // Dependency
import blockchain from '../images/blockchain.png';      // Assets

/** Define Style Components */
const Image = styled .img `
    height: auto;
    margin: 6rem 0 3rem 0;
    max-width: 400px;
    width: 100%;
`;

const Default = () => {       
    return (
        <Image 
            src={ blockchain }
        />
    );
}

export default Default;