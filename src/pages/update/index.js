import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api'
import umbreon from '../../assets/images/umbreon_placeholder.jpg'

import {
    Container,
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
    Button,
    Image,
} from './style.js'

const Update = () => {

    const { params } = useRouteMatch();

    const [produto, setProduto] = useState();

    useEffect(() => {
        const handleProduct = async () => {


            try {
                const response = await api.get(`/produto/${params.update}`);
                const prod = response.data;

                setProduto(prod);
                //console.log(prod)

            } catch (error) {
                alert('Erro no acesso a API');
            }
        };
        handleProduct();
    }, [params.update]);

    const handleClick = (e) => {
        e.preventDefault();
        console.log(produto)
    }
    console.log(produto)
    return (
        <Container>
            <ContainerProduct>
                <ContainerImage src='' alt='foto' />
                <ContainerInformation>
                    <ContainerName>{produto?.nome}</ContainerName>
                    <ContainerPrice>{produto?.valor}</ContainerPrice>
                    <ContainerDescription>{produto?.descricao}</ContainerDescription>
                </ContainerInformation>
            </ContainerProduct>
            <form style={{ margin: '0 5% 0 5%' }}>
                <ContainerAdd>
                    <Image>
                        <img src={umbreon} alt='' />
                    </Image>
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
                    <ContainerAddCategory>
                        <select>
                            <option selected="selected" disabled="disabled">Category....</option>
                        </select>
                    </ContainerAddCategory>
                </ContainerAddCatSto>
                <Button><button onClick={handleClick} >Submit</button></Button>
            </form>
        </Container>
    );
};

export default Update;