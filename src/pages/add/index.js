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
    ContainerAddInformation,
    ContainerAddCatSto,
    ContainerAddCategory,
    ContainerAddStock,
    ContainerSpace,
    Button,
} from './style.js'

const Add = () => {

    const [categorias, setCategorias] = useState([]);

    const [produto, setProduto] = useState({
        dataFabricacao: '2019-10-01T00:00:00Z',
        descricao: '',
        fotoLink: null,
        id: 0,
        idCategoria: 0,
        idFuncionario: 1,
        nome: '',
        nomeCategoria: '',
        nomeFuncionario: null,
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

    const handleAddProduct = async () => {

        try {
            await api.post('/produto', produto);

        } catch (error) {
            alert('Erro no acesso a API');
        }

    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(produto);
        handleAddProduct();
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
                    <ContainerDescription>{produto.descricao}</ContainerDescription>
                </ContainerInformation>
            </ContainerProduct>
            <form onSubmit={handleSubmit} >
                <ContainerAdd>
                    <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10127049-cd7b-45bf-8f09-10742b7e5418/d31ln8w-cb91a8bb-dfd2-4a1f-9b2c-b68bfa613fb9.png/v1/fill/w_900,h_563,q_80,strp/minimalist_pokewall_umbreon_by_thermalsensor_d31ln8w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NjMiLCJwYXRoIjoiXC9mXC8xMDEyNzA0OS1jZDdiLTQ1YmYtOGYwOS0xMDc0MmI3ZTU0MThcL2QzMWxuOHctY2I5MWE4YmItZGZkMi00YTFmLTliMmMtYjY4YmZhNjEzZmI5LnBuZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.eKxbyDmzMD3_kSTlbruZtkHDmAa-JGEouJ32DGiotT4' alt='' />
                    <ContainerAddInformation>
                        <div>
                            <input type='text' placeholder='Name Product' value={produto.nome} onChange={e => setProduto({ ...produto, nome: e.target.value })} />
                        </div>
                        <div>
                            <input type='number' placeholder='Price' value={produto.valor} onChange={e => setProduto({ ...produto, valor: parseFloat(e.target.value) })} />
                        </div>
                        <div>
                            <input type='text' placeholder='Description' value={produto.description} onChange={e => setProduto({ ...produto, descricao: e.target.value })} />
                        </div>
                    </ContainerAddInformation>
                </ContainerAdd>
                <ContainerAddCatSto>
                    <ContainerAddStock>
                        <input type='number' placeholder='Stock' value={produto.qtdEstoque} onChange={e => setProduto({ ...produto, qtdEstoque: parseInt(e.target.value) })} />
                    </ContainerAddStock>
                    <ContainerSpace />
                    <ContainerAddCategory>
                        <select  name='dropdown' onChange={e => setProduto({
                            ...produto,
                            idCategoria: parseInt(e.target.value), nomeCategoria: findCategoria(e.target.value)
                        })}>
                            <option selected="selected" disabled="disabled">Categoria....</option>
                            {categorias.map(cat => {
                                return (
                                    <option id={cat.id} key={cat.id} value={cat.id}>{cat.nome}</option>)
                            })};
                        </select>
                    </ContainerAddCategory>
                </ContainerAddCatSto>
                <Button><button>Submit</button></Button>
            </form>
        </>
    );
};

export default Add;