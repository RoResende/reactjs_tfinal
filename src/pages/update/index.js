import React from 'react';

import {
    ContainerProduct,
    ContainerImage,
    ContainerInformation,
    ContainerName,
    ContainerPrice,
    ContainerDescription,
    ContainerAdd,
    ContainerAddInformation,
    ContainerAddCatSto,
    ContainerAddCategory,
    ContainerAddStock,
    ContainerSpace,
    Button,
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
            <form>
                <ContainerAdd>
                    <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10127049-cd7b-45bf-8f09-10742b7e5418/d31ln8w-cb91a8bb-dfd2-4a1f-9b2c-b68bfa613fb9.png/v1/fill/w_900,h_563,q_80,strp/minimalist_pokewall_umbreon_by_thermalsensor_d31ln8w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NjMiLCJwYXRoIjoiXC9mXC8xMDEyNzA0OS1jZDdiLTQ1YmYtOGYwOS0xMDc0MmI3ZTU0MThcL2QzMWxuOHctY2I5MWE4YmItZGZkMi00YTFmLTliMmMtYjY4YmZhNjEzZmI5LnBuZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.eKxbyDmzMD3_kSTlbruZtkHDmAa-JGEouJ32DGiotT4' alt='' />
                    <ContainerAddInformation>
                        <div>
                            <input type='text' placeholder='Name Product' />
                        </div>
                        <div>
                            <input type='number' placeholder='Price' />
                        </div>
                        <div>
                            <input type='text' placeholder='Description' />
                        </div>
                    </ContainerAddInformation>
                </ContainerAdd>
                <ContainerAddCatSto>
                    <ContainerAddStock>
                        <input type='number' placeholder='Stock' />
                    </ContainerAddStock>
                    <ContainerSpace />
                    <ContainerAddCategory>
                        <select type='text'><option>cimento</option></select>
                    </ContainerAddCategory>
                </ContainerAddCatSto>
            </form>
            <Button><button>Submit</button></Button>
        </>
    );
};

export default update;