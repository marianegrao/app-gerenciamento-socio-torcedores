import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0px 10rem;
`;

export const CardSummary = styled.summary`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  color: #0e8750;
  cursor: pointer;

  strong {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
  }

  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background-color: #dedee9;
`;
