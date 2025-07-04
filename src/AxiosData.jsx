import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/users", { id: 1, name: "behruz" })
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  console.log(user);

  return <div></div>;
};

export default AxiosData;
