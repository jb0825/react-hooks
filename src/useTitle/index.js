import { useTitle } from "./useTitle";

export default function App() {
  const titleUpdater = useTitle("Loading...");

  setTimeout(() => titleUpdater("Home"), 5000);

  return <h1>hi</h1>;
}
