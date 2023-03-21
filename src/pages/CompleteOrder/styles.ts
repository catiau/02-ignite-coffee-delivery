import styled from "styled-components"

export const CompleteOrderContainer = styled.form`
    width: 100%;
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media screen and (max-width: 47rem) {
        flex-direction: column;
        padding: 1rem;
    }
`