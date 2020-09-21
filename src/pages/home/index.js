import React from 'react';

import {
    ContainerProduct,
    ContainerImage,
    ContainerInformation,
    ContainerName,
    ContainerPrice,
    ContainerDescription,
} from './style'

const home = () => {
    return (
        <>
            <ContainerProduct>
                <ContainerImage src='https://images-americanas.b2w.io/produtos/01/00/img/54306/8/54306828_1GG.jpg' alt='foto' />
                <ContainerInformation>
                    <ContainerName>Cadeira Gamer</ContainerName>
                    <ContainerPrice>R$ 1000,00</ContainerPrice>
                    <ContainerDescription>Cadeira totalamente foda-seaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</ContainerDescription>
                </ContainerInformation>
            </ContainerProduct>
        </>
    );
};

export default home;