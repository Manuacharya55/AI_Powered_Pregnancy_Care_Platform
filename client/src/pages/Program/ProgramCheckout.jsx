import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Payment from "../../components/Program/Payment";
import Back from "../../components/Back";
const ProgramCheckout = () => {
  const { error, loading, handleRequest } = useAxios();
  const [data, setData] = useState();
  const { user } = useAuth();
  const { id } = useParams();

  const fetchProgramDetail = async () => {
    if (!user?.token) return;

    const response = await handleRequest({
      method: "get",
      url: `program/${id}`,
      data: "",
      token: user?.token,
    });

    setData(response.data);
  };

  useEffect(() => {
    if (user?.token) {
      fetchProgramDetail();
    }
  }, [user?.token]);
  return loading ? (
    "Loading...."
  ) : (
    <div id="blog">
      <div id="container">
        <span id="title">
          <Back />
          One Step Behind
        </span>
        <div id="checkout-holder">
          <div id="checkout">
            <img src={data?.avatar} alt="" />
          </div>
          <div id="payment">
            <span id="name">{data?.name}</span>
            <span id="price">{data?.price} &#8377;</span>
            <Payment id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCheckout;
