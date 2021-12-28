import styled from 'styled-components';


export const Container = styled.header`

    background: var(--blue)

`;

export const Content = styled.div`
    padding:2rem 1rem 10rem;
    display: flex;
    max-width: 1120px;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    button{
        font-size: 1rem;
        color: #fff;
        background: var(--light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;