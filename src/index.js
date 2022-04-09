var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
  <div>
    <h1>My Favorite Food Items</h1>
    <ul>
      <li>Chole-bhature</li>
      <li>Paneer</li>
      <li>Omelete</li>
    </ul>
  </div>,
  document.getElementById("root")
);

const name = "varun";
const number = 18;

ReactDOM.render(
  <div>
    <h2>hello ,{name}</h2>
    <p>your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
