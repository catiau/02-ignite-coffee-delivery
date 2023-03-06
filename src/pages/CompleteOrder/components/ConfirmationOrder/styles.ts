import styled from "styled-components"

export const ConfirmationOrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    gap: 1rem;


    div {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1rem;
        color: #574F4D;
    }

    strong {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 1.2rem;
        color: #403937;
    }

    button {
        width: 100%;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;

        background: #DBAC2C;
        border-radius: 6px;
        cursor: pointer;
        border: 0;

        color: #FFFFFF;
        margin-top: 1.5rem;
    }
`