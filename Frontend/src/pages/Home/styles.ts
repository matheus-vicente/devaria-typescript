import styled from "styled-components";

export const Content = styled.main`
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const Title = styled.div`
  margin-bottom: 2rem;
  h1 {
    font-size: 2.1rem;
    font-weight: 600;
  }
  p {
    color: var(--text-purple);
    font-weight: 600;
  }
`;

export const Section = styled.section`
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem 1.8rem;

  .empty-modules {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-white);
  }
`;

export const ClassTitle = styled.div`
  margin-bottom: 2rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  div {
    margin-left: 1rem;
    strong {
      font-size: 2rem;
      font-weight: 600;
    }
    p {
      color: var(--text-purple);
      font-weight: 600;
    }
  }
`;

export const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem 4.2rem;
`;
