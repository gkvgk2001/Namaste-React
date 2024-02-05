import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namste React Day 3"
);

console.log(heading);

//using jsx element

// const jsxheading = <h1 id="heading">Namaste react using JSX</h1>;
const jsxheading = (
  <h1 className="heading" tabIndex={5}>
    Namaste react using JSX
  </h1>
);
console.log(jsxheading);

//compnents in React

//both of them are valid synatx

// const HeadingComp = () => {
//   return <h1 className="heaxing"> Namste React in component</h1>;
// };

// const HeadingComp2 = () => (
//   <h1 className="heaxingg"> Namste React in component</h1>
// );

//it acn also return the bunch of react element

// const HeadingComp3 = () => (
//   <div id="container">
//     <h1 className="heaxingg"> Namste React in Functional component</h1>
//   </div>
// );

//component inside component
//also known as component composition

const Tittle = () => (
  <h1 className="heading" tabIndex={5}>
    Namaste react using JSX
  </h1>
);

const HeadingComp3 = () => (
  <div id="container">
    <Tittle />
    <h1 className="heaxingg"> Namste React in Functional component</h1>
  </div>
);

const elem = <span>Jai ho bhi</span>;
const tle = (
  <h1 className="reacthead">
    {elem}
    Hello React element
  </h1>
);

//we can use heading comp by below three things

const HeadingComp4 = () => (
  <div id="container">
    {Tittle()}
    <Tittle></Tittle>

    <Tittle />
    <h1 className="heaxingg"> Namste React in Functional component</h1>
  </div>
);
const number = 1000;
// const HeadingComp4 = () => (
//   <div id="container">
//     {tle}
//     {number}
//     <Tittle />
//     <h1 className="heaxingg"> Namste React in Functional component</h1>
//   </div>
// );

//javascript inside reactcomponent
// const number = 1000;

// const HeadingComp4 = () => (
//   <div id="container">
//     {number}
//     <Tittle />
//     <h1 className="heaxingg"> Namste React in Functional component</h1>
//   </div>
// );
//using function we acn also write react component

// const HeadingComp4 = function () {
//   return (
//     <div id="container">
//       <Tittle />
//       <h1 className="heaxingg">
//         Namste React in Functional component using function keyword
//       </h1>
//     </div>
//   );
// };
const root = ReactDOM.createRoot(document.querySelector(".root"));

// root.render(<HeadingComp3 />);
// root.render(<HeadingComp4 />);

root.render(<HeadingComp4 />);
