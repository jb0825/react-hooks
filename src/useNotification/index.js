import { useNotification } from "./useNotification";

export default function App() {
  const triggerNotification = useNotification("Hello I'm Notification", { body: "hahahahaha" });

  return <button onClick={triggerNotification}>notification</button>;
}
