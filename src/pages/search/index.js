import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api'
import notFound from '../../assets/images/image-not-found.jpg'

import {
    ContainerProduct,
    ContainerImage,
    ContainerInformation,
    ContainerName,
    ContainerPrice,
    ContainerDescription,
    ContainerAddCategory
} from './style'

const Search = () => {

    const [listsProduto, setListsProduto] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [produto, setProduto] = useState();
    const [newId, setNewId] = useState()

    useEffect(() => {
        const handleListProduct = async () => {


            try {
                const response = await api.get('/produto');
                const list = response.data;

                setListsProduto(list);

            } catch (error) {
                alert('Erro no acesso a API');
            }
        };
        handleListProduct();
    }, []);

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

    const findCategoria = (id) => {
        const result = categorias.find(cat => cat.id === parseInt(id));
        return result.nome;
    }

    const findById = (e) => {
        e.preventDefault();
        console.log(newId)
        const result = listsProduto.find(id_prod => id_prod.id === newId);
        setProduto(result);
        return result;
    }

    const addDefaultImg = (e) => {
        e.target.src = notFound;
    }

    return (
        <>

            <form onChange={e => setNewId(parseInt(e.target.value))} onSubmit={e => findById(e)} >
                <input type='search' placeholder="Procure por ID...." ></input>
                <button>Click me</button>
            </form>
            <form onChange={findCategoria}>
                <ContainerAddCategory>
                    <select name="dropdown" onChange={e => setProduto({
                        ...produto,
                        idCategoria: parseInt(e.target.value), nomeCategoria: findCategoria(e.target.value)
                    })}>
                        <option selected="selected" disabled="disabled">Category...</option>
                        {categorias.map(cat => {
                            return (
                                <option id={cat.id} key={cat.id} value={cat.id}>{cat.nome}</option>)
                        })};
                        </select>
                </ContainerAddCategory>
            </form>
            <ContainerProduct>
                <Link to={`/update/${produto?.id}`}>
                    <ContainerImage src={produto?.fotoLink} onError={addDefaultImg} alt='foto' />
                    <ContainerInformation>
                        <ContainerName>{produto?.nome}</ContainerName>
                        <ContainerPrice>R$ {produto?.valor}</ContainerPrice>
                        <ContainerDescription>{produto?.descricao}</ContainerDescription>
                    </ContainerInformation>
                </Link>
            </ContainerProduct>

        </>

    );
}

export default Search;
