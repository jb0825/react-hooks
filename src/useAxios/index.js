import { useAxios } from "./useAxios";

export default function App() {
  const { loading, data, error, refetch } = useAxios({ url: "https://reqres.in/api/users" });

  return (
    <>
      <h1>{data && data.status}</h1>
      <h1>{error && error}</h1>
      <h1>{loading && "loading"}</h1>
      <div style={{ height: "200px", overflow: "scroll" }}>{JSON.stringify(data)}</div>
      <button onClick={refetch}>Refetch</button>
    </>
  );
}
