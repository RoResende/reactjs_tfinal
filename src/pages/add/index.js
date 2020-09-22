import React, { useState, useEffect } from 'react';

import api from '../../services/api';

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



    useEffect(() => {

        const handleAddProduct = async () => {
            try {
                await api.post('/produto', produto);

            } catch (error) {
                alert('Erro no acesso a API');
            }
        }

        handleAddProduct();
    }, [precisaFazerEvento]);

    const updateInput = () => {
        setProduto(props);
    }

    const handleSubmit = () => {
        console.log(produto);
    }

    return (
        <h1>add</h1>
    );
};

export default Add;