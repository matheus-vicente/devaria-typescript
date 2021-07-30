import styled from "styled-components";

export const Container = styled.button`
  padding: 1rem;
  background: var(--blue);
  color: var(--text-white);
  font-size: 1rem;
  font-weight: 600;
  border: 0;
  border-radius: 10px;
  transition: all 0.2s;

  &:hover {
    background: transparent;
    border: 1px solid var(--purple);
    color: var(--purple);
  }
`;
