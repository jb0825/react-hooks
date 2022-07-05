import { useConfirm } from "./useConfirm";

export default function App() {
  const deleteAction = () => console.log("Deleting");
  const abort = () => console.log("Aborted");
  const confirm = useConfirm("Are You Sure?", deleteAction, abort);

  return <button onClick={confirm}>Delete</button>;
}
