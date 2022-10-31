import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  top: 8rem;
  right: 4rem;

  width: 12rem;
  height: 6.2rem;
  padding: 0 2.1rem;

  background-color: #ffffff;
  filter: drop-shadow(0px 0.4rem 4.2rem rgba(0, 0, 0, 0.2));
  border-radius: 0.8rem;
`;

export const CardPopUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  a {
    text-decoration: none;
  }
  button {
    all: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    cursor: pointer;
    span {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 600;
      font-size: 11px;
      line-height: 11px;
      color: #747488;
    }
  }
`;

export const ImgPopUp = styled.div`
  position: absolute;
  top: -1.6rem;
  right: 8rem;
`;
