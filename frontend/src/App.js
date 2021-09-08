import "./App.css";
import React, { useState, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";

function App() {
  const url = "/api";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data.users));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div className="card" key={uuid_v4()}>
          <h3>
            {user.name.last}, {user.name.first} - Age: {user.age}
          </h3>
          <p>phone: {user.phone}</p>
          <p>email: {user.email}</p>
          <p>Address: {user.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
