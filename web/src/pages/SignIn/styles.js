import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #f8f8f9;
`;

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 50vw;
  height: 100vh;

  background-color: #000;

  h3 {
    text-align: center;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 130%;
    color: #acd9c5;
    padding: 0rem 25rem;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;

  width: 50vw;
  height: 100vh;

  h1 {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 130%;

    color: #343447;
  }

  span {
    font-family: "Nunito";
    font-size: 1.6rem;
    color: #3f3f55;

    a {
      color: #034a2a;
    }
  }

  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

export const CardForm = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  width: 40rem;
  height: 40rem;

  @media (max-width: 880px) {
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    width: 35rem;
    height: 35rem;
  }
`;

export const Image = styled.img`
  height: 44rem;
  width: 55rem;

  @media (max-width: 880px) {
    display: none;
  }
`;
