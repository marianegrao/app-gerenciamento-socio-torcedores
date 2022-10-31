import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
  gap: 4rem;
`;

export const ClubCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 36rem;
  height: 29.1rem;
  background-color: #ffffff;
  border-radius: 3rem;
  box-shadow: 4px 4px 4px rgba(172, 217, 197, 0.25);
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;

  img {
    width: 7rem;
    height: 7rem;
  }
`;

export const CardSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  button {
    all: unset;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }
`;

export const CardPrince = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0px;

  strong {
    font-family: "Montserrat";

    font-weight: 700;
    font-size: 24px;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16rem;
  height: 3.3rem;
  padding: 0.4rem 4rem;

  background-color: #034a2a;
  border-radius: 1rem;

  font-family: "Nunito";
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: #f8f8f9;

  :hover {
    transform: scale(1.1);
  }
`;
