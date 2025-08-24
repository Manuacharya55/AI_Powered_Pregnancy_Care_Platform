import React from "react";
import useAxios from "../../hooks/useAxios";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Accordion from "../../components/Program/Accordion";
import Back from "../../components/Back";

const ViewSingleProgram = () => {
  const { loading, error, response, handleRequest } = useAxios();
  const { user } = useAuth();
  const [data, setData] = useState();
  const { id } = useParams();
  const [page, setPage] = useState(1);

  const fetchProgram = async () => {
    if (!user?.token || !id) return;

    const response = await handleRequest({
      method: "get",
      url: `program/${id}?page=${page}`,
      data: "",
      token: user?.token,
    });
    console.log(response);
    setData(response.data);
  };

  useEffect(() => {
    if (user?.token) {
      fetchProgram();
    }
  }, [user?.token, id,page]);

  return loading ? (
    "Loading..."
  ) : (
    <div id="blog">
      <div id="container">
        <span id="title">
          <Back/>
          {data?.name}</span>

        <div id="week-holder">
          {data?.weeks.map((curele) => (
            <Accordion
              weekNumber={curele.weekNumber}
              details={curele.details}
              key={curele._id}
            />
          ))}
        </div>
        <div id="btn-holder">
          {page > 1 && (
            <button
              id="pg-btn"
              onClick={() => {
                setPage((prev) => prev - 1);
              }}
            >
              previous
            </button>
          )}
          {data?.weeks?.length == 4 && (
            <button
              id="pg-btn"
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
            >
              next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewSingleProgram;
