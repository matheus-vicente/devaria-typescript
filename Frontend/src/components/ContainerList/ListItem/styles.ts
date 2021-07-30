import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .list-item-title {
    max-width: 180px;
    width: 100%;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .icons {
    display: flex;
    align-items: center;
    margin-left: 1rem;

    button {
      background: transparent;
      padding: 0.2rem;
      border: 0;

      display: flex;
      align-items: center;

      & + button {
        margin-left: 0.2rem;
      }

      &:hover {
        filter: brightness(0.5);
      }
    }
  }
`;
