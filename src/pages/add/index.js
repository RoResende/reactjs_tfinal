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
        qtdEstoque: null,
        valor: null
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
        console.log(produto);
    }

    const findCategoria = (id) => {
        const result = categorias.find(cat => cat.id === parseInt(id));
        return result.nome;
    }

    return (
        <>
            <ContainerProduct>
                <ContainerImage src='' alt='foto' />
                <ContainerInformation>
                    <ContainerName>{produto.nome}</ContainerName>
                    <ContainerPrice>R$ {produto.valor}</ContainerPrice>
                    <ContainerDescription>{produto.description}</ContainerDescription>
                </ContainerInformation>
            </ContainerProduct>
            <div style={{ height: '50px' }}></div>
            <form onSubmit={handleSubmit} >
                <ContainerAdd>
                    <div>
                        <input type='text' placeholder='Name Product' value={produto.nome} onChange={e => setProduto({ ...produto, nome: e.target.value })} />
                    </div>
                    <div>
                        <input type='number' placeholder='Price' value={produto.valor} onChange={e => setProduto({ ...produto, valor: parseFloat(e.target.value) })} />
                    </div>
                    <div>
                        <input type='text' placeholder='Description' value={produto.description} onChange={e => setProduto({ ...produto, descricao: e.target.value })} />
                    </div>
                    <div>
                        <input type='number' placeholder='Stock' value={produto.qtdEstoque} onChange={e => setProduto({ ...produto, valor: parseInt(e.target.value) })}/>
                    </div>
                    <div>
                        <select placeholder="Categoria..." name="dropdown" onChange={e => setProduto({...produto, 
                                        idCategoria: parseInt(e.target.value), nomeCategoria:findCategoria(e.target.value)})}>
                            {categorias.map(cat => {
                                return (
                                    <option id={cat.id} key={cat.id} value={cat.id}>{cat.nome}</option>)
                            })};
                        </select>
                    </div>
                    <div>
                        <button >Submit</button>
                    </div>
                </ContainerAdd>
            </form>
        </>
    );
};

export default Add;