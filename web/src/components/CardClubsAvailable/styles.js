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
  margin: 2rem 0;
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
