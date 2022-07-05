import { useBeforeLeave } from "./useBeforeLeave";

export default function App() {
  const beforeLeave = () => alert("Pls not leave!");
  useBeforeLeave(beforeLeave);

  return <h1>Hello</h1>;
}
