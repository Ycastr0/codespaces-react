import React, { Component } from "react";

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.setState({
      users: ["Alice", "Bob", "Charlie"]
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.users) {
      console.log("Usuários atualizados:", this.state.users);
    }
  }

  componentWillUnmount() {
    console.log("Componente desmontado, limpando dados...");
  }

  render() {
    return (
      <div>
        <h1>Usuários Online</h1>

        <ul>
          {this.state.users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;