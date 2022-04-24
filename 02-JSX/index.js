// const h1 = document.createElement("h1");
// h1.className = "header";
// h1.innerHTML = "Hello World";
// document.querySelector("#root").append(h1);
// console.log(h1);
// <h1 class="header">Hello World</h1>

// const h1 = <h1 className="header">Hello World</h1>;
// console.log(h1);
/** 
  {
    $$typeof: Symbol(react.element),
    key: null,
    props: {
      children: "Hello World"
      className: "header"
    },
    ref: null,
    type: "h1",
    _owner: null,
    _store: {validated: false},
    _self: null,
    _source: null  
  }
**/

const nav = (
  <nav>
    <h1 className="brand">DikDns</h1>
    <ul className="links">
      <li className="link-item">Pricing</li>
      <li className="link-item">About</li>
      <li className="link-item">Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(nav, document.querySelector("#root"));
