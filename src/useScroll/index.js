import { useScroll } from "./useScroll";

export default function App() {
  const { y } = useScroll();
  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "blue" : "red" }}>Hello</h1>
    </div>
  );
}
