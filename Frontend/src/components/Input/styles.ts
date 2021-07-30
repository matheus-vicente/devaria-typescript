import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background: var(--background-50);
  padding-left: 1rem;
  border: 0;
  border-radius: 10px;
  transition: border 0.2s;

  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid var(--purple);
    `}

  &:hover {
    border: 1px solid var(--purple);
  }

  input {
    width: 100%;
    padding: 1.125rem;
    border: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 1.125rem;
    color: var(--text-white);
    background-color: transparent;
  }
`;
