const heading = React.createElement(
  "h1",
  { id: "heading" },
  "heelloo bhaiiyyon"
);

console.log(heading); /// this is an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); //// render method responsible to put it on the dom by converting object to h1 tag

///// nested elements
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h1", {}, "i am an h1 tag"),
  ]),React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h1", {}, "i am an h1 tag")])]
);



console.log(parent);

root.render(parent);

//////// this is very untidy code
//////// therefore JSX was born
///////// in jsx we dont use react.createelement











