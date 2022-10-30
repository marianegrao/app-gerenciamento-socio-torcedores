import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 16rem;
  padding: 2.4rem 2.1rem;

  background: #ffffff;
  border-radius: 30px;

  h2 {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 1.8rem;
    color: #3f3f55;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 2rem;

  h2 {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 1.8rem;
    color: #3f3f55;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 4px 60px;
    background: #f8f8f9;
    border: 1px solid #dedee9;
    border-radius: 10px;

    font-family: "Nunito";
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: #0e8750;
  }
`;

export const CardContainerSections = styled.div`
  display: flex;
  gap: 40rem;
`;

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  font-family: "Nunito";
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #3f3f55;
  strong {
    font-weight: 700;
  }

  span {
    font-style: normal;
    font-weight: 400;
  }
`;
