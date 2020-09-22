import styled from 'styled-components'

export const ContainerProduct = styled.div`
    border: solid 1px #A8A8A8;
    border-radius: 1vh;
    display: flex;
    margin: 0% 5% 4vh 5%;
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
        padding-top: 5%;
    }
`;
export const ContainerDescription = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    display: flex;
    font-size: 20px;

    @media(max-width: 530px) {
        font-size: 12px;
    }
`;

export const ContainerAdd = styled.div`
    display: flex;
    margin: 0% 5% 0vh 5%;
    img{
        height: 20vh;
        width: 20vh;

        @media(max-width: 530px) {
            width: 16vh;
            height: 16vh;
        }
    }
`;
export const ContainerAddInformation = styled.div`
   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    
    input{
        margin: 0vh 0vh 2vh 1vh;
        width: 99.1%;
        border: none;
        height: 5.1vh;
        background-color: #c4c4c4;
        &::placeholder{
            color: #252526;
        }
        
        @media(max-width: 530px) {
            width: 96.3%;
            margin-bottom: 1.1vh;
            height: 4.35vh;
        }
    }
`;

export const ContainerAddCatSto = styled.div`
    
    margin: 0% 5% 0vh 5%;
    display: flex;
    justify-content: space-between;
    
    input{
        width: 350%;
        margin-right: 1vh;
        border: none;
        height: 5.1vh;
        background-color: #c4c4c4;
        &::placeholder{
            color: #252526;
        }
        
        @media(max-width: 530px) {
            width: 96.3%;
            margin-bottom: 1.1vh;
            height: 4.35vh;
        }
    }
`;
