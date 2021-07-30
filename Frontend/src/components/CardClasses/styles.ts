import styled from "styled-components";

export const Container = styled.div`
  max-width: 320px;
  padding: 2rem 1.4rem;
  background: var(--background-50);
  border: 1px solid var(--purple-50);
  border-radius: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem 0;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    border: 2px solid var(--green);
  }
  strong {
    color: var(--green);
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
  .class-date {
    margin: 2rem 0;
    color: var(--text-white);
    font-weight: 600;
    font-size: 1.125rem;
  }
  p {
    max-height: 9.5rem;
    overflow: hidden;
    position: relative;
    margin-bottom: 1rem;
    color: var(--text-white);
  }
`;

export const Header = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    padding: 0.5rem 1rem;
    border: 1px solid var(--text-white);
    border-radius: 20px;
    font-size: 0.8rem;
  }
  span {
    color: var(--purple-50);
    font-weight: 600;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    svg {
      margin-right: 0.5rem;
    }
    span {
      color: var(--text-white);
    }
  }
`;

export const ButtonWatchClass = styled.button`
  background: var(--purple-50);
  padding: 1.125rem 0;
  border: 0;
  border-radius: 0.8rem;
  color: var(--text-white);
  font-weight: 600;
  font-size: 1.125rem;
`;
