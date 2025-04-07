import ReactDOM from "react-dom";
import NavBar from "./componentes/NavBar";
import Body from "./componentes/Body";

export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Body></Body>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App />);
