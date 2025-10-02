import React, { useState, useEffect} from "react";

function UsersLoaderH() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const loadUsers = () => {
    setIsFetching(true);
    fetch(`https://randomuser.me/api?results=5&seed=pe2024&page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((e) => setError(e))
      .finally(() => setIsFetching(false))
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage => currentPage - 1);
    }
  };
  const nextPage = () => {
    setCurrentPage(currentPage => currentPage + 1 );
  };
  useEffect(() => {
    loadUsers();
  }, [currentPage]);
  return (
    <>
      <button onClick={prevPage}>{"<"}</button>
      <button onClick={nextPage}>{">"}</button>
      {error && <div>!!!ERROR!!!</div>}
      {isFetching && <div>Loading. Please waite...</div>}
      {!error && !isFetching && (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{JSON.stringify(u)}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default UsersLoaderH;
