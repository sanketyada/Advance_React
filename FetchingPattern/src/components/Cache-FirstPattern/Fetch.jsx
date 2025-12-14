import useCachedFetch from "./useCachedFetch";

function Fetch() {
  const {
    data: users,
    loading,
    error,
  } = useCachedFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return users.map((u) => <p key={u.id}>{u.name}</p>);
}

export default Fetch;
