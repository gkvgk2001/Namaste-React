import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
      count2: 7,
      userInfo: {
        name: "Dummy",
        location: "Zummy",
      },
    };
    console.log(this.props.names + "child constructor");
  }

  //Api call
  async componentDidMount() {
    //console.log(this.props.name + " Child Component did mount called");

    const data = await fetch("https://api.github.com/users/gkvgk2001");

    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    // console.log("child Component mount");
  }
  componentDidUpdate() {
    //  console.log("child component did update");
  }
  componentWillUnmount() {
    // console.log("child component wi;; unmount");
  }

  render() {
    console.log(this.props.names + "child Render");
    const { names, locations } = this.props;
    const { count, count2 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="usercard">
        <h4>
          Api Call Data
          <img src={avatar_url} alt="" height={150} width={150} />
          <p>{name}</p>
          <p>{location}</p>
        </h4>
        <div>
          Loggedin user
          <UserContext.Consumer>
            {({ loggedinUser }) => (
              <h1 className="text-2xl font-bold">{loggedinUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h1>Counter:{count}</h1>
        <button
          className="p-2 cursor-pointer bg-slate-100"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              // count2: this.state.count2 + 1,
            });
          }}
        >
          updateCounter
        </button>
        <h1>Counter:{count2}</h1>
        <h1>Name:{names}</h1>
        <h2>Location: {locations}</h2>
        <h3>contact:gauravvg2001@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
