import React from 'react';

import {
    ContainerProduct,
    ContainerImage,
    ContainerInformation,
    ContainerName,
    ContainerPrice,
    ContainerDescription,
    ContainerSearch,
    ContainerAdd,
} from './style.js'

const update = () => {
    return (
        <>
            <ContainerProduct>
                <ContainerImage src='' alt='foto' />
                <ContainerInformation>
                    <ContainerName>alo</ContainerName>
                    <ContainerPrice>R$ 100</ContainerPrice>
                    <ContainerDescription>teste</ContainerDescription>
                </ContainerInformation>
            </ContainerProduct>
            <div style={{ height: '10px' }}></div>
            <ContainerSearch>
                <input type='text' placeholder='Search'/>
            </ContainerSearch>
            <div style={{ height: '10px' }}></div>
            <form>
                <ContainerAdd>
                    <div>
                        <input type='text' placeholder='Name Product' />
                    </div>
                    <div>
                        <input type='number' placeholder='Price' />
                    </div>
                    <div>
                        <input type='text' placeholder='Description' />
                    </div>
                    <div>
                        <input type='number' placeholder='Stock' />
                    </div>
                    <div>
                        <input type='text' placeholder='Category' />
                    </div>
                </ContainerAdd>
            </form>
        </>
    );
};

export default update;