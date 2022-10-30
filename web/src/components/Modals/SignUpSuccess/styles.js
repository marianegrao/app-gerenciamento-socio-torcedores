import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(145, 154, 150, 0.3);
  backdrop-filter: blur(4px);
  z-index: 2;
  padding: 0rem 58rem;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 5rem;

  height: 45rem;
  background: #f0f0f5;
  border-radius: 3rem;
`;
