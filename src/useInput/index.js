import { useInput } from "./useInput";

export default function App() {
  const name = useInput("홍길동", (value) => value.length <= 10);
  return (
    <>
      <input type="text" placeholder="Name" {...name} />
    </>
  );
}
