import styled from "styled-components";

export const Cointainer = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5rem;

  width: 14rem;
  height: 100vh;

  padding-top: 4.5rem;

  background-color: #f0f0f5;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    color: #9b9bb2;
  }
  a {
    text-decoration: none;
  }
`;

export const IconSelected = styled.div`
  position: relative;
  left: 6.8rem;
  bottom: 3rem;

  width: 8.2rem;
  border: 0.15rem solid #0e8750;
  transform: rotate(90deg);
  background-color: #0e8750;
`;
