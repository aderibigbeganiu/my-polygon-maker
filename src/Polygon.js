export default function Polygon(props) {
  const square = {
    background: props.color,
    width: "100px",
    height: "100px",
  };
  return <div style={square}></div>;
}
