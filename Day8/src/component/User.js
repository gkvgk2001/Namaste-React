import { useState } from "react";

const User = (props) => {
  const { name } = props;
  const [counter, setcounter] = useState(0);
  const [counter2, setcounter2] = useState(5);
  return (
    <div className="usercard">
      <h1>Counter:{counter}</h1>
      <button
        onClick={() => {
          const update = counter + 1;
          setcounter(update);
        }}
      >
        Update Counter3
      </button>
      <h1>Counter2 = {counter2}</h1>
      <h1>Name:{name}</h1>
      <h2>Location: Delhi</h2>
      <h3>contact:gauravvg2001@gmail.com</h3>
    </div>
  );
};

export default User;
