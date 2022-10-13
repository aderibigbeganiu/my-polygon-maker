import "./App.css";
import Polygon from "./Polygon";

function App() {
  return (
    <div style={{ display: "flex", backgroundColor: "black" }}>
      <Polygon shape="square" color="red" />
      <Polygon shape="rectangle" color="coral" />
      <Polygon shape="oval" color="yellow" />
      <Polygon shape="triangleUp" color="green" />
      <Polygon shape="triangleDown" color="blue" />
      <Polygon shape="trapezoid" color="purple" />
      <Polygon shape="parallelogram" color="pink" />
    </div>
  );
}

export default App;
