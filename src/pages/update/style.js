import styled from 'styled-components'

export const ContainerProduct = styled.div`
    border: solid 1px #A8A8A8;
    border-radius: 1vh;
    display: flex;
    margin: 0% 10% 2% 10%;
    border-radius: 1vh;
    background-color: #fff;
`;
export const ContainerImage = styled.img`
    width: 20vh;
    height: 20vh;
    align-content: left;
    border-radius: 1vh 0vh 0vh 1vh;
    @media(max-width: 530px) {
        width: 16vh;
        height: 16vh;
    }
`;
export const ContainerInformation = styled.div`
    padding: 1%;
    flex-direction: column;
    justify-content: space-between;
`;
export const ContainerName = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    display: flex;
    align-content: left;
    font-size: 24px;
    height: 4vh;

    @media(max-width: 530px) {
        font-size: 14px;
    }
`;
export const ContainerPrice = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    display: flex;
    padding: 5% 0% 5% 0%;
    align-content: left;
    font-weight: bold;
    font-size: 30px;

    @media(max-width: 530px) {
        font-size: 20px;
        padding: 5% 0% 0% 0%;
    }
`;
export const ContainerDescription = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    display: flex;
    align-content: left;
    font-size: 20px;

    @media(max-width: 530px) {
        font-size: 12px;
    }
`;

export const ContainerAdd = styled.div`
    align-items: center;
    input{
        border: none;
        margin: 0% 10% 2vh 10%;
        width: 79.5%;
        height: 40px;
        background-color: #c4c4c4;
        &::placeholder{
            color: #252526;
        }

        @media(max-width: 530px) {
        margin-bottom: 5%;
        width: 78.5%;
        }
    }
`;

export const ContainerSearch = styled.div`
    align-items: center;
    
    input{
        margin: 0% 10% 0% 10%;
        width: 300px;
        height: 40px;
        margin-bottom: 40px;
        border-radius: 5px;
        box-shadow: none;
        border-color: #D0D0D0;
    }
`;
