import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import {
    ContainerProduct,
    ContainerImage,
    ContainerInformation,
    ContainerName,
    ContainerPrice,
    ContainerDescription,
    ContainerAdd,
} from './style.js'

const Add = () => {

    const [categorias, setCategorias] = useState([]);

    const [produto, setProduto] = useState({
        dataFabricacao: '',
        descricao: '',
        fotoLink: '',
        id: 0,
        idCategoria: 0,
        idFuncionario: 1,
        nome: '',
        nomeCategoria: '',
        nomeFuncionario: 'Joaquim',
        qtdEstoque: 0,
        valor: 0
    });

    useEffect(() => {
        const handleListCategorias = async () => {


            try {
                const response = await api.get('/categoria');
                const list = response.data;
                const namesList = [];
                list.forEach(item => {
                    namesList.push(item)
                });
                setCategorias(namesList);
                
            } catch (error) {
                alert('Erro no acesso a API');
            }
        };
        handleListCategorias();
        
    }, []);

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

    const handleSubmit = e => {
        e.preventDefault();
        console.log(categorias);
    }

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

export default Add;