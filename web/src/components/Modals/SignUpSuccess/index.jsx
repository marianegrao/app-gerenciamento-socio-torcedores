export { CheckCircle } from "phosphor-react";
export default function SignUpSuccess({ message }) {
  return (
    <Container>
      <CheckCircle size={32} />
      <h1>{message}</h1>
    </Container>
  );
}
