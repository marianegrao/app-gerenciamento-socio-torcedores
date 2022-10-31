import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(145, 154, 150, 0.3);
  backdrop-filter: blur(4px);
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  width: 50rem;
  height: 25rem;
  background: #f0f0f5;
  border-radius: 3rem;

  h2 {
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 2.6rem;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem 8.15rem;
    gap: 0.4rem;

    border-radius: 1rem;
  }
`;

export const ButtonConfirm = styled.button`
  border: 0.1rem solid #dedee9;
  background: #f8f8f9;
  color: #0e8750;
`;

export const ButtonCancel = styled.button`
  background: #da0175;
  color: white;
`;
