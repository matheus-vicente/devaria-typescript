import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 1.5rem;
  background: var(--background-50);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--purple);
  border-radius: 20px;

  strong {
    margin: 2rem 0;
    max-width: 240px;
    text-align: center;
    font-weight: 700;
  }

  span {
    color: var(--green);
  }
`;
