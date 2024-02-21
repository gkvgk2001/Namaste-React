import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      count2: 7,
      userInfo: {
        name: "Dummy",
        location: "Zummy",
      },
    };
    //console.log(this.props.name + "child constructor");
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
  }

  render() {
    //console.log(this.props.name + "child Render");
    const { names, locations } = this.props;
    const { count, count2 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="usercard">
        <h4>
          Api Call Data
          <img src={avatar_url} alt="" height={150} width={150} />
          <h1>{name}</h1>
          <h1>{location}</h1>
        </h4>
        <h1>Counter:{count}</h1>
        <button
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
