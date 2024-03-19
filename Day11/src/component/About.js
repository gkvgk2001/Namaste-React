import User from "./User";
import UserClass from "./Userclass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log(" Parent Component did mount called");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Namste React about us Page</h2>
        <UserClass names={"First Child"} locations={"FirstchildLocation"} />

        {/* //<UserClass name={"Second Child"} location={"SEcondchildLocation"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is Namste React about us Page</h2>
//       <User name={"Gaurav Kumar /Function component"} />
//       <UserClass
//         name={"Gaurav Kumar /class component"}
//         location={"Delhi Class"}
//       />
//     </div>
//   );
// };

export default About;
