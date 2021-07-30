import styled from "styled-components";

export const Container = styled.section`
  border: 1px solid var(--blue);
  border-radius: 10px;
  padding: 2rem;

  div + div {
    margin-top: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;

    .button-sign-up {
      margin-top: 2rem;
    }
  }
`;
