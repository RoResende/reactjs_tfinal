import React, { useState, useEffect } from 'react';

import api from '../../services/api'

import {
    ContainerProduct,
    ContainerImage,
    ContainerInformation,
    Space,
    Delete,
    ContainerName,
    ContainerPrice,
    ContainerDescription,
} from './style'
import { FiTrash2 } from 'react-icons/fi';

const Del = () => {

    const [lists, setLists] = useState([]);

    useEffect(() => {
        const handleListProduct = async () => {


            try {
                const response = await api.get('/produto');
                const list = response.data;

                setLists(list);

            } catch (error) {
                alert('Erro no acesso a API');
            }
        };
        handleListProduct();
    }, []);


    return (
        <>
            {lists.map(list => {
                return (
                    <ContainerProduct key={list.id}>
                            <ContainerImage src={list.fotoLink} alt='foto' />
                            <ContainerInformation>
                                <ContainerName>{list.nome}</ContainerName>
                                <ContainerPrice>R$ {list.valor}</ContainerPrice>
                                <ContainerDescription>{list.descricao}</ContainerDescription>
                            </ContainerInformation>
                        <Space />
                        <Delete><FiTrash2 /></Delete>
                    </ContainerProduct>
                )
            })}
        </>

    );
}

export default Del;