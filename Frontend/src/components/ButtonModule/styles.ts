import styled from "styled-components";

export const Container = styled.button`
  background: var(--background-50);
  max-width: 360px;

  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid var(--purple);
  border-radius: 1rem;
  transition: border 0.2s;

  &:hover {
    border: 2px solid var(--green);
  }
`;

export const ModuleDescription = styled.div`
  padding: 0 1rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;

  strong {
    color: var(--green);
    font-weight: 600;
    font-size: 1.125rem;
  }

  span {
    color: var(--text-purple);
    font-weight: 600;
  }
`;
