import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import {
    ContainerProduct,
    ContainerImage,
    ContainerInformation,
    ContainerName,
    ContainerPrice,
    ContainerDescription,
} from './style.js'

const Add = () => {

    const [produto, setProduto] = useState({
        dataFabricacao: '',
        descricao: '',
        fotoLink: '',
        id: 0,
        idCategoria: 0,
        idFuncionario: 0,
        nome: '',
        nomeCategoria: '',
        nomeFuncionario: '',
        qtdEstoque: 0,
        valor: 0
    });



    /*useEffect(() => {

        const handleAddProduct = async () => {
            try {
                await api.post('/produto', produto);

            } catch (error) {
                alert('Erro no acesso a API');
            }
        }

        handleAddProduct();
    }, [handleSubmit()]);*/

    const updateInput = () => {
        setProduto();
    }

    const handleSubmit = () => {
        console.log(produto);
    }

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

export default Add;