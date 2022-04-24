import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const element = (
  <div className="main">
    <section className="header">
      <h1 className="header">DikDns</h1>
      <p>-an internet username.</p>
    </section>
    <section className="content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        repudiandae rem, inventore assumenda provident consequuntur. Eum quis
        quas dignissimos delectus!
      </p>
    </section>
    <footer className="footer">
      <p>Copyright &copy; DikDns 2022</p>
    </footer>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
// console.log(element);
// document.getElementById("root").append(element);
// document.getElementById("root").append(JSON.stringify(element));

reportWebVitals();
