import { useFadeIn } from "./useFadeIn";

export default function App() {
  const fadeInH1 = useFadeIn(1, 1);
  const fadeInP = useFadeIn(3);

  return (
    <>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>Lorem Ipsum lalala...</p>
    </>
  );
}
