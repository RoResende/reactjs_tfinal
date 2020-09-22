import React from 'react';

import {
    ContainerProduct,
    ContainerImage,
    ContainerInformation,
    ContainerName,
    ContainerPrice,
    ContainerDescription,
} from './style.js'

const add = () => {
    return (
        <>
            <ContainerProduct>
                <ContainerImage src='https://avatars2.githubusercontent.com/u/6456100?s=400&u=0ceca3fc134b849b8ce9e2721f8698fa592a867f&v=4' alt='foto' />
                <ContainerInformation>
                    <ContainerName>alo</ContainerName>
                    <ContainerPrice>R$ 100</ContainerPrice>
                    <ContainerDescription>teste</ContainerDescription>
                </ContainerInformation>
            </ContainerProduct>
            <div style={{ height: '50px' }}></div>
            <form>
                <ContainerName>
                    <label>Name Product</label>
                    <input type= 'text' placehold='Nome'/>
                </ContainerName>
                <ContainerPrice>
                    <label>Price</label>
                    <input type= 'number' />
                </ContainerPrice>
                <ContainerDescription>
                    <label>Description</label>
                    <input type= 'text' />
                </ContainerDescription>
                <div>
                    <label>Stock</label>
                    <input type= 'number' />
                </div>
                <div>
                    <label>Category</label>
                    <input type= 'text' />
                </div>
            </form>
        </>
    );
};

export default add;