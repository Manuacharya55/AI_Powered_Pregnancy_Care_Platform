import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div id="page">
      <div id="banner">
        <span>A beautiful journey of love and new beginnings</span>
      </div>
      <div id="banner-image">
        <img src="home.jpg" alt="" />
      </div>
      <div id="benifits">
        <span id="title">
          More Than Promises <br /> Real Benefits for You
        </span>
        <div id="container">
          <Card
            index={1}
            title={"Reason"}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor"
          />
          <Card
            index={1}
            title={"Reason"}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor"
          />
          <Card
            index={1}
            title={"Reason"}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor"
          />
          <Card
            index={1}
            title={"Reason"}
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor"
          />
        </div>
      </div>
      <div id="testimonial">
        <span id="title">
          Dont Trust Our Words
          <br />
          Hear It From Our Partners
        </span>

        <div id="container">
          <Card
            profile={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            }
            title="Jhon Doe"
            description={
              "Lorem ipsum dolor sit amet consectetur , adipisicing elit . Doloremque laudantium obcaecati facilis expedita , odio cumqueomnis. Libero illum repellat earum."
            }
          />
          <Card
            profile={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            }
            title="Jhon Doe"
            description={
              "Lorem ipsum dolor sit amet consectetur , adipisicing elit . Doloremque laudantium obcaecati facilis expedita , odio cumqueomnis. Libero illum repellat earum."
            }
          />
          <Card
            profile={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            }
            title="Jhon Doe"
            description={
              "Lorem ipsum dolor sit amet consectetur , adipisicing elit . Doloremque laudantium obcaecati facilis expedita , odio cumqueomnis. Libero illum repellat earum."
            }
          />
          <Card
            profile={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            }
            title="Jhon Doe"
            description={
              "Lorem ipsum dolor sit amet consectetur , adipisicing elit . Doloremque laudantium obcaecati facilis expedita , odio cumqueomnis. Libero illum repellat earum."
            }
          />
        </div>
      </div>
      <div id="program">
        <span id="title">
          Not One-Size-Fits-All <br /> Programs Tailored for You
        </span>
        <div id="container">
          <Card
            profile="https://plus.unsplash.com/premium_photo-1664299350663-9a5648f66c2c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
            title="Yoga"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi, nostrum?"
            price={400}
            button={"buy now"}
            handleClick={() => navigate(`/`)}
          />
          <Card
            profile="https://plus.unsplash.com/premium_photo-1664299350663-9a5648f66c2c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
            title="Yoga"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi, nostrum?"
            price={400}
            button={"buy now"}
            handleClick={() => navigate(`/`)}
          />
          <Card
            profile="https://plus.unsplash.com/premium_photo-1664299350663-9a5648f66c2c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
            title="Yoga"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi, nostrum?"
            price={400}
            button={"buy now"}
            handleClick={() => navigate(`/`)}
          />
          <Card
            profile="https://plus.unsplash.com/premium_photo-1664299350663-9a5648f66c2c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
            title="Yoga"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi, nostrum?"
            price={400}
            button={"buy now"}
            handleClick={() => navigate(`/`)}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
