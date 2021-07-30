import styled from "styled-components";

export const Container = styled.div`
  margin-left: 2rem;
  padding: 1rem 1rem 1rem 1.5rem;
  background: var(--background-50);

  border: 1px solid var(--purple);
  border-radius: 20px;

  .container-modules-title {
    align-self: flex-start;
    font-weight: 700;
    font-size: 1.25rem;
  }

  .container-modules-button {
    background: var(--green);

    width: 100%;
    padding: 1rem 0;

    border: 0;
    border-radius: 10px;

    font-size: 1.125rem;
    font-weight: 600;
  }

  ul {
    max-width: 300px;
    max-height: 400px;
    width: 20rem;

    overflow-x: hidden;
    overflow-y: scroll;

    margin: 1rem 0;
    padding-right: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    li + li {
      width: 100%;
      margin-top: 1.125rem;

      button {
        width: 100%;
      }
    }

    &::-webkit-scrollbar {
      width: 10px;
      border: 0;
      background: var(--background);
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--purple);
      border: 0;
      border-radius: 5px;
    }
  }
`;
