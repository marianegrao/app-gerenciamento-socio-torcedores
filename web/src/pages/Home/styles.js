import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #f8f8f9;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 108px);
  padding: 30px 32px 0px 32px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  h1 {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 2.6rem;
    color: #343447;
    margin-bottom: 1.5rem;
    padding: 0px 4rem;
  }
`;

export const SectionLineDiv = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border: 0.1rem solid #acd9c5;
`;
