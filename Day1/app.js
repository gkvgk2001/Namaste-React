// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world2   React"
// );

// console.log(heading); //object return
// const root = ReactDOM.createRoot(document.querySelector(".root"));

// root.render(heading);

//  <div id ="Parent">
//    <div id ="Child">
//     <h1></h1>
//      </div>
// </div>
//

// const Parent = React.createElement(
//   "div",
//   { id: "Parent" },
//   React.createElement(
//     "div",
//     { id: "Child" },
//     React.createElement(
//       "h1",
//       { id: "heading" },
//       "This is h1 inside nested heading"
//     )
//   )
// );

// console.log(Parent);

// const root = ReactDOM.createRoot(document.querySelector(".root"));

// root.render(Parent);

//to create sibling in react

//  <div id ="Parent">
//    <div id ="Child">
//     <h1>I am inside h1</h1>
//        <h2>I am inside h2</h2>
//      </div>
// </div>
//

// const Parent = React.createElement(
//   "div",
//   { id: "Parent" },
//   React.createElement("div", { id: "Child" }, [
//     React.createElement(
//       "h1",
//       { id: "heading" },
//       "This is h1 inside nested heading"
//     ),
//     React.createElement(
//       "h2",
//       { id: "heading2" },
//       "This is h2 inside nested heading"
//     ),
//   ])
// );

// console.log(Parent);

// const root = ReactDOM.createRoot(document.querySelector(".root"));

// root.render(Parent);

//  <div id ="Parent">
//    <div id ="Child1">
//     <h1>I am inside h1</h1>
//        <h2>I am inside h2</h2>
//      </div>

//    <div id ="Child2">
//     <h1>I am inside h1</h1>
//        <h2>I am inside h2</h2>
//      </div>
// </div>
//

const Parent = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "Child1" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "This is h1 of child 1 inside nested heading"
    ),
    React.createElement(
      "h2",
      { id: "heading2" },
      "This is h2 child 1  inside nested heading"
    ),
  ]),

  React.createElement("div", { id: "Child2" }, [
    React.createElement(
      "h1",
      { id: "heading3" },
      "This is h1 child 2 inside nested heading"
    ),
    React.createElement(
      "h2",
      { id: "heading4" },
      "This is h2 child 2 inside nested heading"
    ),
  ]),
]);

console.log(Parent);

const root = ReactDOM.createRoot(document.querySelector("#header23"));

root.render(Parent);
