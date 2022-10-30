import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40rem;
  gap: 3rem;

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    gap: 0.5rem;
  }

  label {
    font-family: "Nunito";

    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2rem;

    color: #344054;
  }
  input {
    height: 4rem;
    padding: 10px 14px;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 0.1rem 0.2rem rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    background-color: #ffffff;

    font-family: "Inter";
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #344054;

    ::placeholder {
      color: #667085;
    }
  }

  @media (max-width: 880px) {
    width: 33rem;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  width: 100%;
  color: #e70000;
`;

export const Button = styled.button`
  width: 16rem;
  height: 3.3rem;
  padding: 0.4rem 4rem;

  background-color: #034a2a;
  border-radius: 1rem;

  font-family: "Nunito";
  font-size: 1.8rem;
  line-height: 2.5rem;
  color: #f8f8f9;
`;
