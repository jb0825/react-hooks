import { useClick } from "./useClick";

export default function App() {
  const onClick = () => console.log("Hello");
  const element = useClick(onClick);

  return <button ref={element}>Hello</button>;
}
