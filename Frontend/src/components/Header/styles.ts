import styled from "styled-components";

export const Container = styled.header`
  border-bottom: 1px solid var(--purple);
`;

export const Content = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .button-logo {
    background: transparent;
    border: 0;

    img {
      height: 2.4rem;
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    color: var(--green);
    font-size: 1.2rem;
    text-decoration: underline;
    margin-right: 2rem;
  }

  button {
    background: transparent;
    color: var(--text-blue);

    display: flex;
    align-items: center;

    padding: 0.4rem 1rem;
    font-size: 1.125rem;
    border: 1px solid var(--text-blue);
    border-radius: 10px;
    transition: all 0.2s;

    &:hover {
      background: var(--text-blue);
      color: var(--text-white);
    }
  }
`;
