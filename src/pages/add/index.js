import React from 'react';

import {
    ContainerProduct,
    ContainerImage,
    ContainerInformation,
    ContainerName,
    ContainerPrice,
    ContainerDescription,
    ContainerAdd,
} from './style.js'

const add = () => {
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
            <div style={{ height: '50px' }}></div>
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

export default add;