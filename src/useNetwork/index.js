import { useNetwork } from "./useNetwork";

export default function App() {
  const handleNetworkChange = (online) => console.log(online ? "online" : "offline");
  const status = useNetwork(handleNetworkChange);

  return <h1>{status ? "Online" : "Offline"}</h1>;
}
