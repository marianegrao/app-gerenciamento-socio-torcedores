import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #f8f8f9;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  width: calc(100vw - 108px);
  padding: 3rem 10rem 0px 10rem;
`;

export const Header = styled.header`
  display: flex;
  gap: 2rem;
  h1 {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 2.6rem;

    color: #3f3f55;
  }
`;

export const CardUserData = styled.div`
  background: #ffffff;
  border-radius: 30px;

  width: 111.5rem;
  height: 26.85rem;
`;
