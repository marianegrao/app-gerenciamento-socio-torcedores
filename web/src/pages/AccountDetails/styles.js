import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #f8f8f9;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: calc(100vw - 108px);
  padding: 3rem 12rem 0px 12rem;
`;

export const Header = styled.header`
  display: flex;
  gap: 2rem;

  margin-left: 1rem;
  h1 {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 2.6rem;

    color: #3f3f55;
  }
`;

export const CardTableInvoices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45rem;
  overflow-y: auto;

  padding: 1.4rem 0rem;

  background: #ffffff;
  border-radius: 30px;

  h2 {
    display: flex;
    justify-content: flex-start;
    width: 95%;
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 1.8rem;
    color: #3f3f55;
    margin-bottom: 2rem;
  }
`;
