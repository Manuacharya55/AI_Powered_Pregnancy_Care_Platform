import React from "react";
import Table from "../../components/Admin/Table";
import { useAuth } from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import { useEffect } from "react";
import { USER, USERKEY } from "../../utils/table";
import { useState } from "react";

const AllUsers = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const { user } = useAuth();
  const { loading, error, response, handleRequest } = useAxios();

  const fetchUsers = async () => {
    if (!user?.token) return;

    const response = await handleRequest({
      method: "get",
      url: `admin/users?page=${page}`,
      data: "",
      token: user?.token,
    });

    setData(response.data);
  };

  useEffect(() => {
    if (user?.token) {
      fetchUsers();
    }
  }, [user?.token,page]);
  return loading ? (
    "Loading.."
  ) : (
    <div id="blog">
      <div id="dot"></div>
      <div id="container">
        <span id="title">All Users</span>
        <Table keys={USERKEY} data={data} heading={USER} page={page} setPage={setPage}/>
      </div>
    </div>
  );
};

export default AllUsers;
