import React,{useState} from 'react';

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

   const handleAddRepository = async () => {

       // e.preventDefault();
    try {
        const response = await api.get('/produto');
        const list = response.data;
        
        setLists([list]);

   } catch (error) {
        alert('Erro na busca por este repositório')
   }
   };

   console.log(lists);


const home = () => {
    return (
        <>
            <ContainerProduct>
                <ContainerImage src='https://images-americanas.b2w.io/produtos/01/00/img/54306/8/54306828_1GG.jpg' alt='foto' />
                <ContainerInformation>
                    <ContainerName>Cadeira Gamer</ContainerName>
                    <ContainerPrice>R$ 1000,00</ContainerPrice>
                    <ContainerDescription>Cadeira totalamente pensada nos gamers</ContainerDescription>
                </ContainerInformation>
            </ContainerProduct>
        </>

    
};

export default Home;
