import styled from 'styled-components'

export const ContainerProduct = styled.div`
    display: flex;
    margin: 5% 5% 0% 5%;
    border-radius: 1vh;
    background-color: #fff;
`;
export const ContainerImage = styled.img`
    width: 20vh;
    height: 20vh;
    align-content: left;
    border-radius: 1vh 0vh 0vh 1vh;
`;
export const ContainerInformation = styled.div`
    padding: 1%;
    flex-direction: column;
    justify-content: space-between;
`;
export const ContainerName = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    display: flex;
    padding: 5% 0% 0% 0%;
    align-content: left;
    font-size: 4vh;
    height: 4vh;

    @media(max-width: 320px) {
        font-size: 14px;
    }
`;
export const ContainerPrice = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    display: flex;
    padding: 10% 0% 15% 0%;
    align-content: left;
    font-weight: bold;
    font-size: 4vh;
    height: 5vh;

    @media(max-width: 320px) {
        font-size: 20px;
    }
`;
export const ContainerDescription = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    display: flex;
    align-content: left;
    font-size: 4vh;
    height: 2vh;

    @media(max-width: 320px) {
        font-size: 9px;
    }
`;