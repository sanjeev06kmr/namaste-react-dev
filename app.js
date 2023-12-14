const reactHeader = React.createElement(
  "h1",
  { id: "headerId" },
  "Hello World - from App.js  React!!"
);

const content = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am Header 1"),
    React.createElement("h1", {}, "I am Header 2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(content);
