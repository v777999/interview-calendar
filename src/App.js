import "./App.css";
import { styled } from "styled-components";
import Header from "./components/Header";
import Calendar from "./components/Calendar";

const Container = styled.div`
  max-width: 740px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
`;

function App() {
  return (
    <Container>
      <Header />
      <Calendar />
    </Container>
  );
}

export default App;
