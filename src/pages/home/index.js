import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api'

import {
    ContainerProduct,
    ContainerImage,
    ContainerInformation,
    ContainerName,
    ContainerPrice,
    ContainerDescription,
} from './style'

const Home = () => {

    const [lists, setLists] = useState([]);

    useEffect(() => {
        const handleListProduct = async () => {


            try {
                const response = await api.get('/produto');
                const list = response.data;

                setLists(list);

            } catch (error) {
                alert('Erro na busca por este repositório')
            }
        };
        handleListProduct();
    }, []);

    console.log(lists);

    return (
        <>
            {lists.map(list => {
                return (
                    <ContainerProduct key={list.id}>
                        <Link to='/update'>
                            <ContainerImage src={list.fotoLink} alt='foto' />
                            <ContainerInformation>
                                <ContainerName>{list.nome}</ContainerName>
                                <ContainerPrice>R$ {list.valor}</ContainerPrice>
                                <ContainerDescription>{list.descricao}</ContainerDescription>
                            </ContainerInformation>
                        </Link>
                    </ContainerProduct>)
            })}
        </>

    );
}

export default Home;
