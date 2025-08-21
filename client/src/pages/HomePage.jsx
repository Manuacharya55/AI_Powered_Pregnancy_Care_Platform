import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div id="page">
      <div id="dot"></div>
      <NavBar />
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
          <div id="card">
            <span id="index">01</span>
            <h3 id="reason">Reason</h3>
            <p id="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            </p>
          </div>
          <div id="card">
            <span id="index">01</span>
            <h3 id="reason">Reason</h3>
            <p id="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            </p>
          </div>
          <div id="card">
            <span id="index">01</span>
            <h3 id="reason">Reason</h3>
            <p id="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            </p>
          </div>
          <div id="card">
            <span id="index">01</span>
            <h3 id="reason">Reason</h3>
            <p id="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            </p>
          </div>
        </div>
      </div>
      <div id="testimonial">
        <span id="title">
          Dont Trust Our Words
          <br />
          Hear It From Our Partners
        </span>

        <div id="container">
          <div id="card">
            <div id="image">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <h3 id="reason">Jhon Doe</h3>
            <p id="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque laudantium obcaecati facilis expedita, odio cumque
              omnis. Libero illum repellat earum.
            </p>
          </div>
          <div id="card">
            <div id="image">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <h3 id="reason">Jhon Doe</h3>
            <p id="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque laudantium obcaecati facilis expedita, odio cumque
              omnis. Libero illum repellat earum.
            </p>
          </div>
          <div id="card">
            <div id="image">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <h3 id="reason">Jhon Doe</h3>
            <p id="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque laudantium obcaecati facilis expedita, odio cumque
              omnis. Libero illum repellat earum.
            </p>
          </div>
          <div id="card">
            <div id="image">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <h3 id="reason">Jhon Doe</h3>
            <p id="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque laudantium obcaecati facilis expedita, odio cumque
              omnis. Libero illum repellat earum.
            </p>
          </div>
        </div>
      </div>
      <div id="program">
        <span id="title">
          Not One-Size-Fits-All <br /> Programs Tailored for You
        </span>
        <div id="container">
          <div id="card">
            <h2 id="name">Yoga</h2>
            <p id="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, nostrum?
            </p>
            {/* <div id="card-image">
                    <img src="card.jpg" alt="" />
                </div> */}
            <button>Buy now</button>
          </div>
          <div id="card">
            <h2 id="name">Yoga</h2>
            <p id="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, nostrum?
            </p>
            {/* <div id="card-image">
                    <img src="card.jpg" alt="" />
                </div> */}
            <button>Buy now</button>
          </div>
          <div id="card">
            <h2 id="name">Yoga</h2>
            <p id="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, nostrum?
            </p>
            {/* <div id="card-image">
                    <img src="card.jpg" alt="" />
                </div> */}
            <button>Buy now</button>
          </div>
          <div id="card">
            <h2 id="name">Yoga</h2>
            <p id="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, nostrum?
            </p>
            {/* <div id="card-image">
                    <img src="card.jpg" alt="" />
                </div> */}
            <button>Buy now</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
