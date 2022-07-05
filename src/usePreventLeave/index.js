import { usePreventLeave } from "./usePreventLeave";

export default function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </>
  );
}
