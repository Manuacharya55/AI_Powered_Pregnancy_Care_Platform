import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import useAxios from '../../hooks/useAxios';
import Table from '../../components/Admin/Table';
import { BLOG, BLOGKEY } from '../../utils/table';

const AllBlogs = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const { user } = useAuth();
  const { loading, error, response, handleRequest } = useAxios();

  const fetchUsers = async () => {
    if (!user?.token) return;

    const response = await handleRequest({
      method: "get",
      url: `admin/blog?page=${page}`,
      data: "",
      token: user?.token,
    });

    console.log(response.data)
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
      <div id="container">
        <span id="title">All Blogs</span>
        <Table keys={BLOGKEY} data={data} heading={BLOG} page={page} setPage={setPage}/>
      </div>
    </div>
  );
}

export default AllBlogs