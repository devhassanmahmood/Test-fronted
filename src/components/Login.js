import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";


class Login extends Component {
  constructor(props) {
  super(props);
  this.state = {
    username: "",
    password: "",
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event){
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/sessions/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: this.state.username, password: this.state.password })
      }
    )
    .then(res => res.json())
    .then(json => {
      console.log("json", json)
      localStorage.setItem('token', json.token);
      localStorage.setItem('id', json.id);
      this.props.history.push("/home")
    })
  }

  render() {
    console.log(this.props);
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <center><input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.username}
          /></center>
          <br></br>
          <center><input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          /></center>
          <center><button type="submit">Login</button></center>
        </form>
        <center><p>Need to sign up? Register here</p></center>
      </div>
    )
  }
}

export default Login;
