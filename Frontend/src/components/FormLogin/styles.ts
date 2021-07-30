import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--blue);
  border-radius: 10px;
  padding: 2rem;

  div + div {
    margin-top: 2rem;
  }

  button {
    width: 100%;
  }

  .button-login {
    margin-top: 2rem;
    margin-bottom: 4rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -2em;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: #fff;
    }
  }
`;
