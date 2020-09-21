import React,{useState} from 'react';

import api from '../../services/api'

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

    return (
        <h1>home</h1>
        
    );
};

export default Home;