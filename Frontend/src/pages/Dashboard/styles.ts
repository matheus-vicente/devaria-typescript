import styled from "styled-components";

export const Container = styled.main`
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem 0;

  h1 {
    strong {
      color: var(--green);
    }
  }
`;

export const Content = styled.section`
  display: flex;
  margin-top: 2rem;

  .card-user {
    display: inline-block;
  }

  section {
    display: flex;
  }
`;
