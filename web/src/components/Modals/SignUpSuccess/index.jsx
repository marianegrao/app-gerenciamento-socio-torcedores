import { Container, Modal } from "./styles";
import { CheckCircle } from "phosphor-react";
export default function SignUpSuccess({ message }) {
  return (
    <Container>
      <Modal>
        <CheckCircle size={104} color="#0e8750" />
        <h1>{message}</h1>
      </Modal>
    </Container>
  );
}
